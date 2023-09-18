"use client"

import DynamicMap from '../../components/Map/index'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer'
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
      <Navbar />
      <DynamicMap apartments={apartments}/>
      <ApartmentList apartments={apartments}/>
      <Footer />
    </>
  )
}