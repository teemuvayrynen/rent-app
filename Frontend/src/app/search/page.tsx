"use client"

import DynamicMap from '../../components/Map/index'
import ApartmentList from '../../components/ApartmentList/ApartmentList'
import { useState, useEffect } from 'react'

export default function SearchPage() {
  const [apartments, setApartments] = useState([])
  useEffect(() => {
    fetch('https://p2nldoza40.execute-api.eu-west-1.amazonaws.com/api/apartments/get')
      .then((res) => res.json())
      .then((data) => {
        setApartments(data)
      })
  }, [])

  return (
    <>
      <DynamicMap apartments={apartments}/>
      <ApartmentList apartments={apartments}/>
    </>
  )
}