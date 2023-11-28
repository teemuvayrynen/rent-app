"use client"

import { useState } from 'react'
import './apartmentRow.css'
import ApartmentCard from '../ApartmentCard/ApartmentCard'

function ApartmentRow({apartments, place}) {

  return (
    <>
      <div className='apartment-row-container'>
        <p>
          Best of <span> {place}</span>
        </p>
        <div className='apartment-row-flex-row'> 
          {apartments.map(apartment => {
            return (
              <div key={apartment.id} style={{ minWidth: 265, maxWidth: 265}}>
                <ApartmentCard apartment={apartment}/>
              </div>
            )
          })}

        </div>
      </div>
    </>   
  )
}

export default ApartmentRow;