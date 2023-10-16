"use client"
import React, { useState, useEffect } from "react";
import styles from "./page.module.css"
import useUserData from "@/hooks/useUserData";
import { apiUrl } from "@/app/apiConfig";
import ApartmentCard from "@/components/ApartmentCard/ApartmentCard";

const UserApartments = () => {
  const { user } = useUserData()
  const [apartments, setApartments] = useState([])
  const [search, setSearch] = useState("")


  useEffect(() => {
    (async () => {
      if (user) {
        try {
          const result = await fetch(`${apiUrl}//apartments/user/${user?.attributes.sub}`)
          const data = await result.json()
          setApartments(data.Items)
        } catch (err) {
          console.log(err)
        }
      }
    })()
  }, [user])


  return (
    <>
      {user ? (
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
                  <ApartmentCard key={ap.id} apartment={ap} />
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
      ) : null}
    </>
  )
}

export default UserApartments