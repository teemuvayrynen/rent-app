"use client"
import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons"
import "./page.css"


const Settings = () => {
  const [user, setUser] = useState(null)
  const [showItem, setShowItem] = useState({
    info: false,
    deleteAccount: false
  })



  return (
    <>
      <div className="settings-container">
        <h1>Settings</h1>
        <div className="settings-item-container">
          <div className="settings-item">
            <div>
              <h2>Information</h2>
              <p>Name, email and phone</p>
            </div>
            <FontAwesomeIcon icon={faArrowRightLong} color="black" size={"2x"} />
          </div>
        </div>
        <span/>
        <div className="settings-item-container">
          <div className="settings-item">
            <div>
              <h2>Delete account</h2>
              <p>Delete account</p>
            </div>
            <div className="settings-icon">
              <FontAwesomeIcon icon={faArrowRightLong} color="black" size={"2x"}  />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Settings