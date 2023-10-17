/* eslint-disable @next/next/no-img-element */
import './apartmentCard.css'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useState, useEffect } from 'react';
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
  const defaultImage = "https://source.unsplash.com/178j8tJrNlc"
  return (
      <Carousel swipeable={true} emulateTouch={true} showThumbs={false} dynamicHeight={false}>
        {apartment.images.length > 0 ? apartment.images.map((image, index) => {
          return(
            <div key={index} style={{borderRadius: '10px'}}>
              <img src={`${imageUrl}/images/${image}`} alt={`Image ${index}`} onLoad={() => setIsLoaded(true)} className="card-image" style={{display: !isLoaded ? 'none' : 'block', borderRadius: '10px'}} onClick={() => handleApartmentClick(apartment)}/>
            </div>
          )
        }): 
        <div style={{borderRadius: '10px'}}>
              <img src={defaultImage} alt={`Default Image`} onLoad={() => setIsLoaded(true)} className="card-image" style={{display: !isLoaded ? 'none' : 'block', borderRadius: '10px'}} onClick={() => handleApartmentClick(apartment)}/>
        </div>}
      </Carousel>
  );
}

function ApartmentCard({apartment, goToApartmentLocation, mapListActive, setHoveredMarkerID}) {
  const [isLoaded, setIsLoaded] = useState(false)
  const handleApartmentClick = (apartment) => {
    const mapList = document.querySelector('.map-apartment-list');
    
    if (mapList?.classList.contains('active')) {
      goToApartmentLocation(apartment)
    } else {
      // Navigating to single apartment page
      window.open(`${window.location.origin}/apartment?id=${apartment.id}`, '_blank')
    }
  }

  const handleMouseEnter = () => {
      const markerID = apartment.id
      const urlLocation = window.location
      if(urlLocation.pathname === '/search'){
        setHoveredMarkerID(markerID)
      }
  }

  const handleMouseLeave = () => {
    const urlLocation = window.location
      if(urlLocation.pathname === '/search'){
        setHoveredMarkerID(null)
      }
}

  return (
    <div className={`card-container ${mapListActive ? 'map' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <ImageCarousel style={{height: mapListActive ? '100%' : 'inital'}} apartment={apartment} isLoaded={isLoaded} setIsLoaded={setIsLoaded} handleApartmentClick={handleApartmentClick}/>
      <Skeleton className='card-image' style={{display: isLoaded ? 'none' : 'block'}} borderRadius="20px" width="100%"/>
      <div className='apartment-info' onClick={() => handleApartmentClick(apartment)}>
          <p>{apartment.street_name}, {apartment.city}</p>
          <p>{apartment.monthlyPrice}/kk &emsp; {apartment.size}m2</p>
          <p>{apartment.startDate === "now" ? "Now": formatDateToDDMMYY(apartment.startDate)} - {(apartment.endDate === "temp" || apartment.endDate === "") ? "": formatDateToDDMMYY(apartment.endDate)}</p>
      </div>
    </div>
  );
}

export default ApartmentCard;