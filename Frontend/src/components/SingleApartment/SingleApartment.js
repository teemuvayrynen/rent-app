import React, { useEffect, useState } from 'react';
import './SingleApartment.css';
import DynamicMap from './DynamicMap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faArrowRight, faChessKing } from '@fortawesome/free-solid-svg-icons';
import { apiUrl } from '@/app/apiConfig.js';
import { imageUrl } from '@/app/apiConfig.js';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import EquipmentInfo from './EquipmentInfo';


function formatDate(inputDate) {
  const parts = inputDate.split(/[-T:.+]/);
  const day = parts[2];
  const month = parts[1];
  const year = parts[0];
  return `${day}.${month}.${year}`;
}

function SingleApartment({ id }) {
  const [apartment, setApartment] = useState(null);
  const [imageIds, setImageIds] = useState([]);
  const [images, setImages] = useState([]);
  const [imageDimensions, setImageDimensions] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}/apartments/${id}`, {signal: signal});
        const data = await response.json();
        setApartment(data.Item);
        setImageIds(data.Item.images);
      } catch (error) {
        console.error('Error fetching apartment data', error);
      }
    };

    fetchData();
    return () => {
      abortController.abort()
    }
  }, [id]);

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;
    const fetchImages = async () => {
      const imagePromises = imageIds.map(async (imageName) => {
        try {
          const response = await fetch(`${imageUrl}/images/${imageName}`, {signal: signal});
          if (response.ok) {
            return response.url;
          }
        } catch (error) {
          console.error(`Error fetching image ${imageName}`, error);
        }
      });

      const imageResults = await Promise.all(imagePromises);
      setImages(imageResults.filter((result) => result !== undefined));
    };

    fetchImages();
    return () => {
      abortController.abort()
    }
  }, [imageIds]);


  useEffect(() => {
    // Ensure images are loaded before calculating dimensions
    const calculateImageDimensions = () => {
      const dimensions = {};

      images.forEach((image, index) => {
        const img = new Image();
        img.src = image;
        img.onload = () => {
          const width = img.width;
          const height = img.height;
          const aspectRatio = width / height;

          // Store the dimensions using the image index as the key
          dimensions[index] = { width, height, aspectRatio };

          // Check if all dimensions have been calculated
          if (Object.keys(dimensions).length === images.length) {
            setImageDimensions(dimensions);
          }
        };
      });
    };

    if (images.length > 0) {
      calculateImageDimensions();
    }
  }, [images]);

  console.log(apartment);

  return (
    <div className="main-container">
      <div className="slider-map-container">
        <div className="slider-container">
          {images.length && Object.keys(imageDimensions).length === images.length ? 
            <Carousel swipeable={true} emulateTouch={true} showThumbs={false} dynamicHeight={true}>
              {images.map((image, index) => {
                return (
                  <div className="imageContainer" key={index} style={{ width: imageDimensions[index]?.aspectRatio > 1 ? '-webkit-fill-available' : 'fit-content' }}>
                    <img className="image" src={image} alt={`image ${index}`} style={{ borderRadius: '10px' }} />
                  </div>
                );
              })}
            </Carousel>
          : 
            <Skeleton width={'100%'} height={'100%'} style={{paddingTop: '2px'}}/>}
        </div>

        <div className="map-container">
          {apartment ? (
            <DynamicMap position={[apartment.location.lat, apartment.location.lon]} />
          ): (
            <Skeleton width={'100%'} height={'100%'} />
          )}
          
        </div>
      </div>

      <div className='address-contact-container'>
        <div className='address-and-owner'>
          <div className='address-text-container'>
            {apartment ? (
              <>
                <h1 className='h1-streetname'>
                  {apartment.street_name.charAt(0).toUpperCase()}{apartment.street_name.slice(1)} {apartment.street_number}, {apartment.zip}, {apartment.city.charAt(0).toUpperCase()}{apartment.city.slice(1)}
                </h1>
                <p className='p-basic-text'>
                  {apartment.floor ? (
                    <>{apartment.apartmentType} | {apartment.floor}.floor | {apartment.size}m&sup2;</>
                  ) : (
                    <>{apartment.apartmentType} | {apartment.size}m&sup2;</>
                  )}
                </p>
              </>
            ) : (
              <>
              <h1 className='h1-streetname'>
                <Skeleton width={350} height={'100%'} />
              </h1>
              <p className='p-basic-text'>
                <Skeleton width={200} height={'100%'} />
              </p>
              </>
            )}

          </div>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingRight: '60px' }}>
            {apartment ? (
              <>
                <FontAwesomeIcon icon={faUser} size="2x" style={{padding: '5px'}} />
                <span className='span-basic-text'>{apartment.ownerName}</span>
              </>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Skeleton width={40} height={40} style={{ margin: '5px' }} />
                <Skeleton width={100} height={24} style={{ margin: '5px' }} />
              </div>
            )}
          </div>
        </div>

        <div className='contact-container'>
          {apartment ? (
            <div className='contact-details'>
              <div className='monthly-price'>
                <p style={{padding: '5px', fontSize: '20px', fontWeight: '600'}}>{apartment.monthlyPrice} €</p>
              </div>
              <div>
                <span style={{padding: '5px'}}>{formatDate(apartment.startDate)}</span>
                <FontAwesomeIcon icon={faArrowRight} size="lg" />
                <span style={{padding: '5px'}}>{formatDate(apartment.endDate)}</span>
              </div>
            </div>
          ) : (
            <div className='contact-details'>
              <div className='monthly-price'>
                <Skeleton width={120} height={24} style={{ margin: '5px' }} />
              </div>
              <div>
                <Skeleton width={200} height={24} style={{ margin: '5px' }} />
              </div>
            </div>
          )}
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingRight: '40px' }}>
            {apartment ? (
              <button className='contact-button'>Contact</button>
            ) : (
              <Skeleton width={100} height={40} style={{ margin: '5px' }} />
            )}
          </div>
        </div>

      </div>
      
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <div className='information-container'>
          <div className="description-container">
            <h1>Description</h1>
            
            {apartment ? (
                <p>{apartment.description}</p>
              ) : (<p>loading...</p>
              )}    
              
          </div>

          <div className='divider'/>
          
          <div className='equipment-container'>
            <h1>Equipment and Utility</h1>
            
            {apartment ? (
              <EquipmentInfo apartmentData={apartment} />
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>

        <div className='information-container-spacer'/>
      </div>
    
    </div>
  );
}

export default SingleApartment;
