"use client"

import DynamicMap from '../../components/Map/index'
import ApartmentList from '../../components/ApartmentList/ApartmentList'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Storage } from 'aws-amplify'


const sortApartments = (apartments: []) => {
  return apartments.sort((a: { street_name: string; }, b: { street_name: string; }) => {
    const addressA = a.street_name.toLowerCase(); 
    const addressB = b.street_name.toLowerCase();
  
    if (addressA < addressB) {
      return -1; 
    } else if (addressA > addressB) {
      return 1; 
    } else {
      return 0;
    }
  });
}

function postData(data: any, setApartments: any, setLoadingApartments: any) {
  const apiUrl = 'https://p2nldoza40.execute-api.eu-west-1.amazonaws.com/api/apartments/get';

  const convertedData = {
    keys: data.map((item: { id: any; }) => ({ id: item.id, country: "finland" })),
  };
  
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(convertedData), 
  };
  setLoadingApartments(true)
  fetch(apiUrl, requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); 
    })
    .then((responseData) => {
      if(responseData.apartments){
        const sortedApartments = sortApartments(responseData.apartments)
        setApartments((prev: any) => sortedApartments)
        setLoadingApartments(false)
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

export default function SearchPage() {
  const [apartments, setApartments] = useState([])
  const [markers, setMarkers] = useState([])
  const [loadingApartments, setLoadingApartments] = useState(true)
  const [filteredMarkers, setFilteredMarkers] = useState([])
  const searchParams = useSearchParams()
  const searchString = searchParams.toString()
  
  useEffect(() => {
    fetch(`https://p2nldoza40.execute-api.eu-west-1.amazonaws.com/api/markers/get${(searchString !== '') ? `?${searchString}` : ''}`)
      .then((res) => res.json())
      .then((data) => {
        setMarkers(data.Items)
      })
  }, [])

  useEffect(() => {
      if (filteredMarkers.length > 0) {
        try {
          postData(filteredMarkers, setApartments, setLoadingApartments);

        } catch (error) {
          console.error('Error:', error);
        }
      }
      else{
        setApartments(prev => [])
      }
    }
  , [filteredMarkers]);

  


  return (
    <div style={{display: 'flex', flexDirection: 'row', height: 'calc(100vh - 20rem)', borderTop: '0.5px solid rgb(0,0,0,0.4)'}}>
      <ApartmentList apartments={apartments}/>
      <DynamicMap apartments={apartments} markers={markers} setFilteredMarkers={setFilteredMarkers} loadingApartments={loadingApartments}/>
    </div>
  )
}