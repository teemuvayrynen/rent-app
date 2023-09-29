"use client"

import DynamicMap from '../../components/Map/index'
import ApartmentList from '../../components/ApartmentList/ApartmentList'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'


const sortApartments = (apartments: []) => {
  return apartments.sort((a: { address: string; }, b: { address: string; }) => {
    const addressA = a.address.toLowerCase(); 
    const addressB = b.address.toLowerCase();
  
    if (addressA < addressB) {
      return -1; 
    } else if (addressA > addressB) {
      return 1; 
    } else {
      return 0;
    }
  });
}

function postData(data: any, setApartments: any) {
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

  fetch(apiUrl, requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); 
    })
    .then((responseData) => {
      const sortedApartments = sortApartments(responseData.apartments)
      setApartments((prev: any) => sortedApartments)
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

export default function SearchPage() {
  const [apartments, setApartments] = useState([])
  const [markers, setMarkers] = useState([])
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
          postData(filteredMarkers, setApartments);

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
    <>
      <DynamicMap apartments={apartments} markers={markers} setFilteredMarkers={setFilteredMarkers}/>
      {(markers.length !== 0) ? <ApartmentList apartments={apartments}/> : <div style={{display: "flex", flexDirection: "row", height: "200px", justifyContent: "center", alignItems: "center"}}><p>No Apartments available</p></div>}
      
    </>
  )
}