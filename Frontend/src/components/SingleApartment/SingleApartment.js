import React, { useEffect, useState } from 'react';
import './SingleApartment.css';
import DynamicMap from './DynamicMap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faArrowRight, faChessKing } from '@fortawesome/free-solid-svg-icons';
import { apiUrl } from '@/app/apiConfig.js';
import { imageUrl } from '@/app/apiConfig.js';


import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


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
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}/apartments/${id}`);
        const data = await response.json();
        setApartment(data.Item);
        setImageIds(data.Item.images);
      } catch (error) {
        console.error('Error fetching apartment data', error);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchImages = async () => {
      const imagePromises = imageIds.map(async (imageName) => {
        try {
          const response = await fetch(`${imageUrl}/images/${imageName}`);
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

  if (!apartment || !images.length || Object.keys(imageDimensions).length !== images.length) {
    return <div>Loading...</div>;
  }

  const position = [apartment.location.lat, apartment.location.lon];
  const capitalizedStreetName = apartment.street_name.charAt(0).toUpperCase() + apartment.street_name.slice(1);
  const capitalizedCity = apartment.city.charAt(0).toUpperCase() + apartment.city.slice(1);

  return (
    <div className="main-container">
      <div className="slider-map-container">
        <div className="slider-container">
          <Carousel swipeable={true} emulateTouch={true} showThumbs={false} dynamicHeight={true}>
            {images.map((image, index) => {
              return (
                <div className="imageContainer" key={index} style={{ width: imageDimensions[index].aspectRatio > 1 ? '-webkit-fill-available' : 'fit-content' }}>
                  <img className="image" src={image} alt={`image ${index}`} style={{ borderRadius: '10px' }} />
                </div>
              );
            })}
          </Carousel>
        </div>

        <div className="map-container">
          <DynamicMap position={position} />
        </div>
      </div>

      <div className='address-contact-container'>
        <div className='address-and-owner'>
          <div className='address-text-container'>
            <h1 className='h1-streetname'>
              {capitalizedStreetName} {apartment.street_number}, {capitalizedCity}
            </h1>
            <p className='p-basic-text'>
              {apartment.floor ? (
                <>{apartment.floor}. floor / {apartment.size}m&sup2;</>
              ) : (
                <>{apartment.size}m&sup2;</>
              )}
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingRight: '60px' }}>
            <FontAwesomeIcon icon={faUser} size="2x" style={{padding: '5px'}} />
            <span style={{padding: '5px'}}>{apartment.ownerName}</span>
          </div>
        </div>

        <div className='contact-container'>
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
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingRight: '40px' }}>
            <button className='contact-button'>Contact</button>
          </div>
        </div>
      </div>

      {/* TODO: ADD MORE FORMAL EQUIPMENT SHOWING */}
      <div className="description-container">
        <h1>Description</h1>
        <p>{apartment.description}</p>

        <h1>Equipment</h1>
        <ul>
          {Object.entries(apartment.equipment).map(([category, items]) => (
            <div key={category}>
              <h2>{category}</h2>
              <ul>
                {Object.entries(items).map(([item, value]) => (
                  <li key={item}>
                    {item}: {value ? 'Yes' : 'No'}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </ul>

        <h1>Rules</h1>
        <ul>
          {Object.entries(apartment.rules).map(([rule, value]) => (
            <li key={rule}>
              {rule}: {value ? 'Yes' : 'No'}
            </li>
          ))}
        </ul>

        <h1>Rent</h1>
        <p>Rent: {apartment.monthlyPrice} + {apartment.waterPrice} (water)</p>
      </div>
    </div>
  );
}

export default SingleApartment;
