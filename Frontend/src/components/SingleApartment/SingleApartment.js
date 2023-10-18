import React, { useEffect, useState } from 'react';
import './SingleApartment.css';
import './Modal.css'
import DynamicMap from './DynamicMap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faArrowRight, faHeart, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { apiUrl } from '@/app/apiConfig.js';
import { imageUrl } from '@/app/apiConfig.js';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import Modal from 'react-modal';

import EquipmentInfo from './EquipmentInfo';
import RentAndRules from './RentAndRules'
import ContactForm from './ContactForm'

function formatDate(inputDate) {
  const parts = inputDate.split(/[-T:.+]/);
  const day = parts[2];
  const month = parts[1];
  const year = parts[0];
  return `${day}.${month}.${year}`;
}

function SingleApartment({ id }) {
  const [apartment, setApartment] = useState(null);
  const [images, setImages] = useState([]);
  const [imageDimensions, setImageDimensions] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false)
  const [isSaved, setIsSaved] = useState(false);
  const [viewAllImages, setViewAllImages] = useState(false);

  const defaultImage = "https://source.unsplash.com/178j8tJrNlc"

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}/apartments/${id}`, {signal: signal});
        const data = await response.json();
        setApartment(data.Item);
        setImages(data.Item.images);
        setIsLoaded(true)
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
    // Ensure images are loaded before calculating dimensions
    const calculateImageDimensions = () => {
      const dimensions = {};

      images.forEach((image, index) => {
        const img = new Image();
        img.src = `${imageUrl}/images/${image}`
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

  const scrollToContactForm = () => {
    const contactFormElement = document.getElementById('contact-form');
    if (contactFormElement) {
      contactFormElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const save = () => {
    setIsSaved(!isSaved);
  };

  const toggleViewAllImages = () => {
    setViewAllImages(!viewAllImages);
  };

  console.log(apartment);

  function AllImagesModal({show, close}) {
    return(
      <Modal
        isOpen={show}
        onRequestClose={close}
      >
        <div className="modal-slider-container">
          <Carousel 
            swipeable={true} 
            emulateTouch={true} 
            showThumbs={false} 
            dynamicHeight={false} 
            infiniteLoop={true}
            useKeyboardArrows={true}
          >
            {images.map((image, index) => {
              return (
                <div 
                  className={'modal-imageContainer'} 
                  key={index} 
                  style={{ width: imageDimensions[index]?.aspectRatio > 1 ? '-webkit-fill-available' : 'fit-content' }}
                >
                  <img className="modal-image" src={`${imageUrl}/images/${image}`} alt={`image ${index}`} style={{ borderRadius: '10px' }} />
                </div>
              )
            })}
          </Carousel>
          <div className='close-modal-button' onClick={close}>
            <FontAwesomeIcon icon={faXmark} />
          </div>
        </div>
      </Modal>
    )
  }

  return (
    <div className="main-container">
      <AllImagesModal show={viewAllImages} close={toggleViewAllImages}/>
      <div className="slider-map-container" style={{ display: viewAllImages ? 'none' : '' }}>
        <div className="slider-container">
          {isLoaded && Object.keys(imageDimensions).length === images.length ? 
            <Carousel 
              swipeable={true} 
              emulateTouch={true} 
              showThumbs={false} 
              dynamicHeight={true} 
              infiniteLoop={true}
              useKeyboardArrows={true}
            >
              {images.length > 0 ? images.map((image, index) => {
                return (
                  <div 
                    className='imageContainer'
                    key={index} 
                    style={{ width: imageDimensions[index]?.aspectRatio > 1 ? '-webkit-fill-available' : 'fit-content' }}
                  >
                    <img className="image" src={`${imageUrl}/images/${image}`} alt={`image ${index}`} style={{ borderRadius: '10px' }} />
                  </div>
                )
              }):
              <div className="imageContainer" style={{ width: '-webkit-fill-available' }}>
                  <img src={defaultImage} className="imageContainer" alt={`Default Image`} />
              </div>
              }
            </Carousel>
          : 
            <Skeleton width={'100%'} height={'100%'} style={{paddingTop: '2px'}}/>
          }
          {images.length > 1 && (
            <div className='view-all-button' onClick={toggleViewAllImages}>
              <p>View All Images</p>
            </div>
          )}
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
         {apartment ? (
          <div className="favorites-button-container" onClick={save}>
            <FontAwesomeIcon
              icon={isSaved ? faHeart : farHeart}
              size='2xl'
            />
            <p>{isSaved ? 'Saved' : 'Save'}</p>
          </div>
         ): (
          <div style={{alignSelf: 'center'}}>
              <Skeleton width={40} height={40}/>
          </div>
         )}
          
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
          <div className='owner-container'>
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

        {apartment ? (
          <div className='contact-container'>
            <div className='contact-details'>
              <div className='monthly-price'>
                <p style={{padding: '5px', fontSize: '20px', fontWeight: '600'}}>{apartment.monthlyPrice} € / mo.</p>
              </div>
              <div>
                <span style={{padding: '5px'}}>
                  {apartment.startDate ? formatDate(apartment.startDate) : "Right away"}
                </span>
                <FontAwesomeIcon icon={faArrowRight} size="lg" />
                <span style={{padding: '5px'}}>
                  {apartment.endDate != 'temp' ? formatDate(apartment.endDate) : "Open-ended"}
                </span>
              </div>
            </div>
            <div className='contact-button-container'>
                <button className='contact-button' onClick={scrollToContactForm}>Contact</button>
            </div>
          </div>
        ) : (
          <div className='contact-container' style={{border: '0px', boxShadow: '0 0 0'}}>
            <div className='contact-details'>
              <div className='monthly-price'>
                <Skeleton width={120} height={24} style={{ margin: '5px' }} />
              </div>
              <div>
                <Skeleton width={200} height={24} style={{ margin: '5px' }} />
              </div>
            </div>
            <div className='contact-button-container'>
              <Skeleton width={100} height={40} style={{ margin: '5px' }} />
            </div>
          </div>
        )}
      </div>
      
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <div className='information-container'>
          <div className="description-container">
            
            {apartment ? (
              <>
                <h1>Description</h1>
                <p>{apartment.description}</p>
              </>
              ) : (
              <>
                <h1 style={{marginBottom: '10px', fontSize: '2rem'}}>
                  <Skeleton width={200}/>
                </h1>
                <div style={{alignSelf: 'center', width: '100%'}}>
                  <Skeleton count={4}/>
                </div>
              </>
            )}    
              
          </div>

          {apartment ? (
            <div className='divider'/>
            ) : (
              <div style={{width: '100%'}}>
                <Skeleton style={{margin: '20px 0px'}}/>
              </div>
          )}    

          <div>
            {apartment ? (
              <>
                <EquipmentInfo apartmentData={apartment} />
              </>
              ) : (
              <>
                <h1 style={{textAlign: 'center', marginBottom: '10px', fontSize: '2rem'}}>
                  <Skeleton width={200}/>
                </h1>
                <div style={{alignSelf: 'center', width: '100%'}}>
                  <Skeleton count={4}/>
                </div>
              </>
            )}    
          </div>

          {apartment ? (
            <div className='divider'/>
            ) : (
              <div style={{width: '100%'}}>
                <Skeleton style={{margin: '20px 0px'}}/>
              </div>
          )}    

          <div>
            {apartment ? (
              <>
                <RentAndRules apartmentData={apartment} />
              </>
              ) : (
              <>
                <h1 style={{textAlign: 'center', marginBottom: '10px', fontSize: '2rem'}}>
                  <Skeleton width={200}/>
                </h1>
                <div style={{alignSelf: 'center', width: '100%'}}>
                  <Skeleton count={6}/>
                </div>
              </>
            )}   
          </div>

          {apartment ? (
            <div className='divider'/>
            ) : (
              <div style={{width: '100%'}}>
                <Skeleton style={{margin: '20px 0px'}}/>
              </div>
          )}  

          <div id="contact-form">
            {apartment ? (
                <ContactForm />
                ) : (
                <div style={{flex: '1', textAlign: 'center'}}>
                  <Skeleton height={400} width={'60%'}/>
                </div>
              )}   
          </div>
          
        </div>
        
        {/* Just an empty spacer to handle the 2/1 ratio of the image
            container and the map container */}
        <div className='information-container-spacer'/>
      </div>
    
    </div>
  );
}

export default SingleApartment;
