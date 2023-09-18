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
          {apartments.slice(0, 10).map(apartment => {
            return <ApartmentCard key={apartment.id} apartment={apartment}/>
          })}

        </div>
      </div>
    </>   
  )
}

export default ApartmentRow;