"use client"

import Landing from "@/components/Landing/Landing"
import React, { useState, useEffect } from "react"
import ApartmentRow from "@/components/ApartmentRow/ApartmentRow"
import { Storage, Auth } from "aws-amplify"


export default function Home() {

  const [apartments, setApartments] = useState([])
  // useEffect(() => {
  //   fetch('https://p2nldoza40.execute-api.eu-west-1.amazonaws.com/api/apartments/get')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setApartments(data)
  //     })
  // }, [])

  // temp
  const handleClick = async () => {
    try {
      const test = {
        test: 24345678765
      }
      const t = await Storage.put("tes1gedehfgt.json", JSON.stringify(test))
      console.log(t)
    } catch (err) {
      console.log(err)
    }

  }
  return (
    <>
      <div style={{ padding: '0px 60px'}}>
      <button onClick={handleClick}>
        micjwifweiofmweofmeo
      </button>
        <Landing />
        <div className='divider' />
        <ApartmentRow apartments={apartments} place={"Helsinki"}  />
        <div className='divider' />
        <ApartmentRow apartments={apartments} place={"Otaniemi"}  />
        <div className='divider' />
        <ApartmentRow apartments={apartments} place={"Tampere"}  />
      </div>
    </>
  )
}
