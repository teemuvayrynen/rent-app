"use client"

import DynamicMap from '../../components/Map/index'
import ApartmentList from '../../components/ApartmentList/ApartmentList'
import { useState, useEffect } from 'react'


function postData(data: any) {
  const apiUrl = 'https://p2nldoza40.execute-api.eu-west-1.amazonaws.com/api/apartments/get';

  const convertedData = {
    keys: data.map((item: { id: any; }) => ({ id: item.id })),
  };
  console.log(convertedData)
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
      console.log('Response Data:', responseData);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

export default function SearchPage() {
  const [apartments, setApartments] = useState([])
  const [markers, setMarkers] = useState([])
  const [filteredMarkers, setFilteredMarkers] = useState([])

  useEffect(() => {
    fetch('https://p2nldoza40.execute-api.eu-west-1.amazonaws.com/api/markers/get')
      .then((res) => res.json())
      .then((data) => {
        setMarkers(data.Items)
      })
  }, [])

  useEffect(()=>{
    if(filteredMarkers.length > 0){
      postData(filteredMarkers)
    }
  }, [filteredMarkers])

  return (
    <>
      <DynamicMap apartments={apartments} markers={markers} setFilteredMarkers={setFilteredMarkers}/>
      <ApartmentList apartments={apartments}/>
    </>
  )
}