"use client"

import "./map.css"
import React, {useState, useEffect} from 'react';
import DynamicMap from '@/components/AddApartment/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo} from '@fortawesome/free-solid-svg-icons'

function LocationForm({apartmentData, handleUpdate}) {

    const [circle, setCircle] = useState({lat: 0, lng: 0});

    useEffect(()=>{
        if(apartmentData.location.lat !== 0 && apartmentData.location.lon !== 0) {
            const newCircle = {
                lat:  apartmentData.location.lat,
                lng: apartmentData.location.lon
              }
            setCircle(prev  => newCircle)
        }
    }, [])

    useEffect(() => {
        handleUpdate('location', {lat: circle.lat, lon: circle.lng})
    }, [circle])

    return (
        <>
            <h2>Where is Your place?</h2>
            <div className='form-wrapper-row'>
                <div className='location-information'>
                    <div className='grid-item1'>
                        <label>Street name</label>
                        <input type="text" autoFocus required placeholder='Street name' value={apartmentData['street_name']} onChange={(e) => handleUpdate('street_name', e.target.value)}/>
                    </div>
                    <div className='grid-item2'>
                        <label>Street number</label>
                        <input type="number" autoFocus required placeholder='Number' value={apartmentData['street_number']} onChange={(e) => handleUpdate('street_number', e.target.value)}/>
                    </div>
                    <div className='grid-item3'>
                        <label>Zip code</label>
                        <input type="text" autoFocus required placeholder='Zip code' value={apartmentData['zip']} onChange={(e) => handleUpdate('zip', e.target.value)}/>
                    </div>
                    <div className='grid-item4'>
                        <label>City</label>
                        <input type="text" autoFocus required placeholder='City' value={apartmentData['city']} onChange={(e) => handleUpdate('city', e.target.value)}/>
                    </div>
                    <div className='grid-item5'>
                        <label>Floor</label>
                        <input type="text" autoFocus placeholder='Floor' value={apartmentData['floor']} onChange={(e) => handleUpdate('floor', e.target.value)}/>
                    </div>
                </div>
                <div className='map-container'>
                    <DynamicMap circle={circle} setCircle={setCircle}/>
                    <div className='information-icon' style={{position: "absolute", zIndex: 1000, right: "20px", top: "11px"}}>
                        <FontAwesomeIcon icon={faCircleInfo} size="2x" aria-label='Tooltip'/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LocationForm;