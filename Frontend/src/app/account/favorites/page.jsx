"use client"
import React, { useState, useEffect, useRef } from "react";
import styles from "./page.module.css"
import useUserData from "@/hooks/useUserData";
import { apiUrl } from "@/app/apiConfig";
import ApartmentCard from "@/components/ApartmentCard/ApartmentCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import Alert from "@/components/Alert"

const Favorites = () => {
  const { user } = useUserData()
  const [apartments, setApartments] = useState([])
  const [search, setSearch] = useState("")
  const [alertVisible, setAlertVisible] = useState(false)
  const id = useRef(null)

  const fetchData = async () => {
    if (!user || !user.hasOwnProperty("custom:favorites")) return

    const ids = user["custom:favorites"].split(";")
    if (ids.length === 0) return

    const convertedData = {
      keys: ids.map((id) => ({ id, country: "finland" })),
    };

    const apiUrl = 'https://p2nldoza40.execute-api.eu-west-1.amazonaws.com/api/apartments/get';
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(convertedData), 
    };
    if (user) {
      try {
        const result = await fetch(apiUrl, requestOptions)
        const data = await result.json()
        setApartments(data.apartments)
      } catch (err) {
        console.log(err)
      }
    }
  }


  useEffect(() => {
    fetchData()
  }, [user])

  const handleAccept = async () => {
    setAlertVisible(false)
    const ap = apartments.filter(item => item.id === id.current)
    if (!id.current || ap.length === 0) {
      alert("Error deleting listing")
      return
    }

    setApartments(prev => prev.filter(item => item.id !== id.current))
    
    try {
      const res = await fetch(`${apiUrl}/apartments/${id.current}`, {
        method: "DELETE"
      })
      id.current = null
      
      if (!res.ok) {
        throw new Error("id not found")
      }
      
    } catch (err) {
      setApartments(prev => [...prev, ap])
    }
  }

  const handleCancel = () => {
    setAlertVisible(false)
  }


  return (
    <>
      {user && (
        <section className={styles.user_ap_container}>
          <div className={styles.header_section}>
            <h2>Favorites</h2>
          </div>
          <input onChange={(e) => { setSearch(e.target.value) }} placeholder="Search" className={styles.search_input} />
          {apartments && apartments.length > 0 ? (
            <div className={styles.ap_grid}>
              {apartments.filter((item) => {
                return search === "" 
                ? item 
                : (item.street_name.toLowerCase().includes(search.toLowerCase())
                || item.city.toLowerCase().includes(search.toLowerCase()))
              }).map((ap) => {
                return (
                  <div key={ap.id} className={styles.card_container}>
                    <ApartmentCard apartment={ap} />
                  </div>
                )
              })}
            </div>
          ) : (
            <div className={styles.no_ap_box}>
              <h2>You don't have any favorites</h2>
            </div>
          )} 
        </section>  
      )}
      {alertVisible && <Alert handleAccept={handleAccept} handleCancel={handleCancel} />}
    </>
  )
}

export default Favorites