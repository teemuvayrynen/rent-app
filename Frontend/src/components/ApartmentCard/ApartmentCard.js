/* eslint-disable @next/next/no-img-element */
import './apartmentCard.css'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useState, useEffect } from 'react';

function formatDateToDDMMYY(timeString) {
  if(timeString !== "temp")
  {
    const date = new Date(timeString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear().toString().slice(-2); // Get the last 2 digits of the year
    
    const formattedDate = `${day}.${month}.${year}`;
    
    return formattedDate;
  }
    return ""
}

function ApartmentCard({apartment, goToApartmentLocation, mapListActive}) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoaded(prev => true)
    },1000)
}, [])

    const handleApartmentClick = (apartment) => {
        const mapList = document.querySelector('.map-apartment-list');
        if (mapList.classList.contains('active')) {
          goToApartmentLocation(apartment)
        } else {
          console.log('.map-apartment-list is not active');
        }
      }

    return (
        (isLoaded) ? 
        (<div className={`card-container ${mapListActive ? 'map' : ''}`} onClick={() => handleApartmentClick(apartment)}>
          <img alt="cardimage" src="https://source.unsplash.com/178j8tJrNlc" className="card-image"/>

          <div className='apartment-info'>
              <p>{apartment.address}</p>
              <p>{apartment.price}/kk &emsp; {apartment.size}</p>
              <p>{formatDateToDDMMYY(apartment.startDate)} - {formatDateToDDMMYY(apartment.endDate)}</p>
          </div>
            
        </div>) : (
          <div style={{display: 'flex', flexDirection: 'column', gap: '10px', padding: '10px'}}>
            <Skeleton borderRadius="20px" width="100%" height="200px"/>
            <Skeleton width="100%" height="20px"/>
          </div>
        )
    );
}

export default ApartmentCard;