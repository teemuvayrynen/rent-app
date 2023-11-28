"use client"
import React, { useState, useEffect, useRef } from "react";
import styles from "./page.module.css"
import useUserData from "@/hooks/useUserData";
import { apiUrl } from "@/app/apiConfig";
import ApartmentCard from "@/components/ApartmentCard/ApartmentCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import Alert from "@/components/Alert"

const UserApartments = () => {
  const { user } = useUserData()
  const [apartments, setApartments] = useState([])
  const [search, setSearch] = useState("")
  const [alertVisible, setAlertVisible] = useState(false)
  const id = useRef(null)

  const fetchData = async () => {
    if (user) {
      console.log(user)
      try {
        const result = await fetch(`${apiUrl}/apartments/user/${user?.sub}`)
        const data = await result.json()
        setApartments(data.Items)
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
            <h2>Own apartments</h2>
            <button onClick={() => window.location.href = "/addApartment"} className="basic-button">Sublet</button>
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
                    <ApartmentCard key={ap.id} apartment={ap} />
                    <button onClick={() => { setAlertVisible(true); id.current = ap.id }} className={`${styles.circle_button} ${styles.top_right}`}>
                      <FontAwesomeIcon icon={faTrash} color="black" size="xl" />
                    </button>
                    <button className={`${styles.circle_button} ${styles.top_left}`}>
                      <FontAwesomeIcon icon={faPen} color="black" size="xl" />
                    </button>
                  </div>
                )
              })}
            </div>
          ) : (
            <div className={styles.no_ap_box}>
              <h2>You don't have any listings</h2>
              <h3>Create listing to sublet your apartment</h3>
              <button onClick={() => window.location.href = "/addApartment"} className="basic-button">Sublet</button>
            </div>
          )} 
        </section>  
      )}
      {alertVisible && <Alert handleAccept={handleAccept} handleCancel={handleCancel} />}
    </>
  )
}

export default UserApartments