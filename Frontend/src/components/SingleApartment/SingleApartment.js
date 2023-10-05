"use client"

import { useEffect, useState } from 'react';

import './SingleApartment.css'
import ApartmentCarousel from './ApartmentCarousel'
import DynamicMap from './DynamicMap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faArrowRight } from '@fortawesome/free-solid-svg-icons'; // Import the necessary icons


function formatDate(inputDate) {
  const parts = inputDate.split(/[-T:.+]/);
  const day = parts[2];
  const month = parts[1];
  const year = parts[0];
  return `${day}.${month}.${year}`;
}

function SingleApartment({id}) {
  // State to hold the apartment data
  const [apartment, setApartment] = useState(null);

  useEffect(() => {
    // Fetch apartment data based on the ID

    const apiUrl = 'https://p2nldoza40.execute-api.eu-west-1.amazonaws.com/api/'
    if (id) {
      const fetchData = async () => {
        try {
          const response = await fetch(`${apiUrl}/apartments/${id}`);
          const data = await response.json();
          setApartment(data.Item);
        } catch (error) {
          console.error('Error fetching apartment data', error);
        }
      };

      fetchData();
    }
  }, [id]);

  // TODO: loading screen
  if (!apartment) {
    return <div>Loading...</div>;
  }
  
  console.log(apartment);

  const position = [apartment.location.lat, apartment.location.lon];
  const capitalizedStreetName = apartment.street_name.charAt(0).toUpperCase() + apartment.street_name.slice(1);
  const capitalizedCity = apartment.city.charAt(0).toUpperCase() + apartment.city.slice(1);

  return (
    <div className='main-container'>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div className='carousel-container'>
            <ApartmentCarousel/>
        </div>

        <div className='map-container'>
          <div style={{flex: '1'}}>
            <DynamicMap position={position} />
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', paddingTop: '10px' }}>
        <div className='address-and-owner'>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
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
    
      <div className='description-container'>
        <h1>
          Description
        </h1>
        <p>
          {apartment.description}
        </p>

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

        <h1>
          Rent
        </h1>
        <p>
          Rent: {apartment.monthlyPrice} + {apartment.waterPrice} (water)
        </p>
      </div>
    </div>

  )
}

export default SingleApartment;




