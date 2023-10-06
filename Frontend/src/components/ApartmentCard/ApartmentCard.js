/* eslint-disable @next/next/no-img-element */
import './apartmentCard.css'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

function formatDateToDDMMYY(date) {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear().toString().slice(-2); // Get the last 2 digits of the year
    
    const formattedDate = `${day}.${month}.${year}`;
    
    return formattedDate;
}

function ApartmentCard({apartment, goToApartmentLocation, mapListActive}) {
  const [isLoaded, setIsLoaded] = useState(false)
  const router = useRouter()
  const handleApartmentClick = (apartment) => {
    const mapList = document.querySelector('.map-apartment-list');
    
    if (mapList.classList.contains('active')) {
      goToApartmentLocation(apartment)
    } else {
      console.log(apartment);
      // Navigating to single apartment page
      router.push(`/apartment?id=${apartment.id}`)
    }
  }

  return (
    <div className={`card-container ${mapListActive ? 'map' : ''}`} onClick={() => handleApartmentClick(apartment)}>
      <img alt="cardimage" src="https://source.unsplash.com/178j8tJrNlc" onLoad={() => setIsLoaded(true)} className="card-image" style={{display: !isLoaded ? 'none' : 'block'}}/>
      <Skeleton className='card-image' style={{display: isLoaded ? 'none' : 'block'}} borderRadius="20px" width="100%" height="200px"/>
      <div className='apartment-info'>
          <p>{apartment.street_name}, {apartment.city}</p>
          <p>{apartment.monthlyPrice}/kk &emsp; {apartment.size}m2</p>
          <p>{apartment.startDate === "now" ? "Now": formatDateToDDMMYY(apartment.startDate)} - {apartment.endDate === "-" ? "temp": formatDateToDDMMYY(apartment.endDate)}</p>
      </div>
    </div>
  );
}

export default ApartmentCard;