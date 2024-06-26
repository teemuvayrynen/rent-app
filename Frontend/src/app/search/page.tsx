"use client"

import DynamicMap from '../../components/Map/index'
import ApartmentList from '../../components/ApartmentList/ApartmentList'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'


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
      if(responseData.apartments){
        const sortedApartments = sortApartments(responseData.apartments)
        setApartments((prev: any) => sortedApartments)
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

export default function SearchPage() {
  const [apartments, setApartments] = useState([])
  const [markers, setMarkers] = useState([])
  const [hoveredMarkerID, setHoveredMarkerID] = useState(null)
  const searchParams = useSearchParams()
  const searchString = searchParams.toString()
  
  useEffect(() => {
    const myAbortController = new AbortController();
    fetch(`https://p2nldoza40.execute-api.eu-west-1.amazonaws.com/api/markers/get${(searchString !== '') ? `?${searchString}` : ''}`, {signal: myAbortController.signal})
      .then((res) => res.json())
      .then((data) => {
        setMarkers(data.Items)
      })

      return () => {
        myAbortController.abort();
      };
  }, [])

  const updateData = (markers: Array<object>) => {
    if (markers.length > 0) {
      try {  
        postData(markers, setApartments);
      } catch (error) {
        console.error('Error:', error);
      }
    }
    else{
      setApartments([])
    }
  }

  


  return (
    <div style={{display: 'flex', flexDirection: 'row', height: 'calc(100vh - 5rem)', borderTop: '0.5px solid rgb(0,0,0,0.4)'}}>
      <ApartmentList apartments={apartments} setHoveredMarkerID={setHoveredMarkerID}/>
      <DynamicMap apartments={apartments}
        markers={markers}
        setHoveredMarkerID={setHoveredMarkerID}
        handleUpdate={updateData}
        hoveredMarkerID={hoveredMarkerID}/>
    </div>
  )
}