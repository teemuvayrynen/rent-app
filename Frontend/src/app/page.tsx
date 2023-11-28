"use client"

import Landing from "@/components/Landing/Landing"
import React, { useState, useEffect } from "react"
import styles from "./page.module.css"
import ApartmentRow from "@/components/ApartmentRow/ApartmentRow"


export default function Home() {
  const [apartments, setApartments] = useState([])
  useEffect(() => {
    fetch('https://p2nldoza40.execute-api.eu-west-1.amazonaws.com/api/apartments/landing/get?places=espoo,helsinki,tampere')
      .then((res) => res.json())
      .then((data) => {
        setApartments(data)
      })
  }, [])

  

  return (
    <>
      <main className={styles.page_container}>
        <Landing />
        <div className='divider' />
        {apartments.map((ap: any) => {
          return (
            <>
              <ApartmentRow key={ap.City} apartments={ap.Items} place={ap.City}  />
              <div className='divider' />
            </>
          )
        })}
      </main>
    </>
  )
}
