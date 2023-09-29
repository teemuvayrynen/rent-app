"use client"

import './SingleApartment.css'
import ApartmentCarousel from './ApartmentCarousel'
import DynamicMap from './DynamicMap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faArrowRight } from '@fortawesome/free-solid-svg-icons'; // Import the necessary icons


const data = {
  "country": "finland",
  "id": "2b87ab8b-faf4-4bb7-96e5-838ebe8b5a2e",
  "apartmentType": "apartment",
  "apt": "",
  "building_society": "",
  "city": "espoo",
  "created": "2023-10-31T01:30:00.000-05:0",
  "deposit": 0,
  "description": "d3ed3dm3d3od3kd34kd3d3ndbe3duneide3id2jlfbdo2bid3nd",
  "endDate": "2024-10-31T01:30:00.000-05:0",
  "equipment": {
   "bathroom": {
    "bath": true,
    "shower": true,
    "wc": true
   },
   "electronics": {
    "internet": true,
    "tv": true
   },
   "kitchen": {
    "dishwasher": true,
    "freezer": true,
    "fridge": true,
    "microwave": true,
    "owen": true,
    "stove": true
   },
   "other": {
    "balcony": true,
    "fireplace": false,
    "furnished": false,
    "pool": false,
    "sauna": true
   },
   "premises": {
    "bike_storage": false,
    "elevator": false,
    "parking": false,
    "recycle_point": false,
    "storage": false
   },
   "utility": {
    "dryer": true,
    "laundry": true,
    "washing_machine": true
   }
  },
  "floor": "",
  "images": [
   {
    "id": "frjjf34jf3jkd4k4kj434rmr43m"
   }
  ],
  "location": {
   "lat": 60.198126422010034,
   "lon": 24.80326748835334
  },
  "monthlyPrice": 1000,
  "ownerId": "p3f3kkf+3kp3kfk3droef3",
  "ownerName": "Pekka",
  "roomAmount": 3,
  "rules": {
   "pets": false,
   "smoking": false,
   "unobstructed": false
  },
  "size": 65,
  "startDate": "2023-10-31T01:30:00.000-05:0",
  "status": 1,
  "street_name": "kyyrölänkuja",
  "street_number": "2",
  "waterPrice": 40,
  "zip": "02140"
}

function formatDate(inputDate) {
  const parts = inputDate.split(/[-T:.+]/);
  const day = parts[2];
  const month = parts[1];
  const year = parts[0];
  return `${day}.${month}.${year}`;
}

function SingleApartment() {
  const position = [data.location.lat, data.location.lon];
  const capitalizedStreetName = data.street_name.charAt(0).toUpperCase() + data.street_name.slice(1);
  const capitalizedCity = data.city.charAt(0).toUpperCase() + data.city.slice(1);

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
              {capitalizedStreetName} {data.street_number}, {capitalizedCity}
            </h1>
            <p className='p-basic-text'>
              {data.floor ? (
                <>{data.floor}. floor / {data.size}m&sup2;</>
              ) : (
                <>{data.size}m&sup2;</>
              )}
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingRight: '60px' }}>
            <FontAwesomeIcon icon={faUser} size="2x" style={{padding: '5px'}} />
            <span style={{padding: '5px'}}>{data.ownerName}</span>
          </div>
        </div>

        <div className='contact-container'>
          <div className='contact-details'>
            <div className='monthly-price'>
              <p style={{padding: '5px', fontSize: '20px', fontWeight: '600'}}>{data.monthlyPrice} €</p>
            </div>
            <div>
              <span style={{padding: '5px'}}>{formatDate(data.startDate)}</span>
              <FontAwesomeIcon icon={faArrowRight} size="lg" />
              <span style={{padding: '5px'}}>{formatDate(data.endDate)}</span>
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
          {data.description}
        </p>

        <h1>Equipment</h1>
        <ul>
          {Object.entries(data.equipment).map(([category, items]) => (
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
          {Object.entries(data.rules).map(([rule, value]) => (
            <li key={rule}>
              {rule}: {value ? 'Yes' : 'No'}
            </li>
          ))}
        </ul>

        <h1>
          Rent
        </h1>
        <p>
          Rent: {data.monthlyPrice} + {data.waterPrice} (water)
        </p>
      </div>
    </div>

  )
}

export default SingleApartment;




