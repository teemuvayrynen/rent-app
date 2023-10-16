/* eslint-disable @next/next/no-img-element */
import './apartmentCard.css'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { imageUrl } from '@/app/apiConfig.js';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function formatDateToDDMMYY(date) {
    date = new Date(date)
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear().toString().slice(-2); // Get the last 2 digits of the year
    
    const formattedDate = `${day}.${month}.${year}`;
    
    return formattedDate;
}

function ImageCarousel({apartment, isLoaded, setIsLoaded, handleApartmentClick}) {
  return (
      <Carousel swipeable={true} emulateTouch={true} showThumbs={false} dynamicHeight={false}>
        {apartment.images.map((image, index) => {
          return(
            <div key={index} style={{borderRadius: '10px'}}>
              <img src={`${imageUrl}/images/${image}`} alt={`Image ${index}`} onLoad={() => setIsLoaded(true)} className="card-image" style={{display: !isLoaded ? 'none' : 'block', borderRadius: '10px'}} onClick={() => handleApartmentClick(apartment)}/>
            </div>
          )
        })}
      </Carousel>
  );
}

function ApartmentCard({apartment, goToApartmentLocation, mapListActive}) {
  const [isLoaded, setIsLoaded] = useState(false)
  const router = useRouter()

  const handleApartmentClick = (apartment) => {
    const mapList = document.querySelector('.map-apartment-list');
    
    if (mapList?.classList.contains('active')) {
      goToApartmentLocation(apartment)
    } else {
      // Navigating to single apartment page
      window.open(`${window.location.origin}/apartment?id=${apartment.id}`, '_blank')
    }
  }

  return (
    <div className={`card-container ${mapListActive ? 'map' : ''}`}>
      <ImageCarousel style={{height: mapListActive ? '100%' : 'inital'}} apartment={apartment} isLoaded={isLoaded} setIsLoaded={setIsLoaded} handleApartmentClick={handleApartmentClick}/>
      <Skeleton className='card-image' style={{display: isLoaded ? 'none' : 'block'}} borderRadius="20px" width="100%"/>
      <div className='apartment-info' onClick={() => handleApartmentClick(apartment)}>
          <p>{apartment.street_name}, {apartment.city}</p>
          <p>{apartment.monthlyPrice}/kk &emsp; {apartment.size}m2</p>
          <p>{apartment.startDate === "now" ? "Now": formatDateToDDMMYY(apartment.startDate)} - {apartment.endDate === "" ? "": formatDateToDDMMYY(apartment.endDate)}</p>
      </div>
    </div>
  );
}

export default ApartmentCard;