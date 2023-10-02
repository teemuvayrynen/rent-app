"use client"

import useMultiStepForm from '@/hooks/useMultiStepForm'
import InformationForm from '@/components/AddApartment/InformationForm'
import LoacationForm from '@/components/AddApartment/LocationForm'
import DateForm from '@/components/AddApartment/DateForm'
import AdditionalInfo from '@/components/AddApartment/Additionalnfo'
import EquipmentInfo from '@/components/AddApartment/EquiptmentInfo'
import ImageForm from '@/components/AddApartment/ImageForm'
import './addApartment.css'
import React, { useState, useEffect, useContext } from 'react';
import { AccountContext } from '@/context/Account'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const initialApartmentState = {
    country: 'finland', // always finland
    street_name: '',
    street_number: '',
    apt: '', // optional
    floor: '', // optional
    city: '',
    zip: '',
    size: 0,
    roomAmount: 0,
    apartmentType: '',
    ownerId: '', // add in frontend
    ownerName: '', // add in frontend
    monthlyPrice: 0,
    waterPrice: 0,
    deposit: 0,
    rules: {
      pets: false,
      smoking: false,
      unobstructed: false,
    },
    equipment: {
      kitchen: {
        fridge: false,
        freezer: false,
        owen: false,
        stove: false,
        dishwasher: false,
        microwave: false,
      },
      bathroom: {
        shower: false,
        wc: false,
        bath: false,
      },
      utility: {
        washing_machine: false,
        dryer: false,
        laundry: false,
      },
      electronics: {
        internet: false,
        tv: false,
      },
      other: {
        sauna: false,
        fireplace: false,
        pool: false,
        furnished: false,
        balcony: false,
      },
      premises: {
        elevator: false,
        bike_storage: false,
        storage: false,
        parking: false,
        recycle_point: false,
      },
    },
    images: [],
    location: {
      lat: 0,
      lon: 0,
    },
    description: '',
    startDate: '',
    endDate: '',
    created: '',
    building_society: '', // optional
    status: 1, // 1 or 0 depending on the listing's online status
  };
  

export default function AddApartmentsPage() {
    const [apartmentData, setApartmentData] = useState(initialApartmentState);
    const [user, setUser] = useState<any>(null)
    const { getSession, logout } = useContext(AccountContext)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        getSession().then((session: any) => {
            setUser({ name: session.idToken.payload.name })
          })
          setIsLoaded(true)
    }, [])

  // useEffect to load data from localStorage on component mount
    useEffect(() => {
        const storedData = localStorage.getItem('apartmentData');
        if (storedData) {
        setApartmentData(JSON.parse(storedData));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('apartmentData', JSON.stringify(apartmentData));
      }, [apartmentData]);

      const handleUpdate = (keyString: string, value: any) => {

        setApartmentData((prev) => {
          const newState = { ...prev };
          const keys = keyString.split('.');
      
          // Use reduce to traverse the nested object and update the target key
          keys.reduce((acc: any, currentKey, index) => {
            if (index === keys.length - 1) {
              if(keyString.includes("equipment")){
                let keyValue = acc[currentKey]
                if(!keyValue){
                    keyValue = true
                  }
                  else{
                    keyValue = false
                  }
                  acc[currentKey] = keyValue;
              }   
              acc[currentKey] = value;
            } else {
              return acc[currentKey];
            }
            return acc;
          }, newState);
      
          return newState;
        });
      };
        

    const { steps, currentIndex, goBack, goForward, step } = useMultiStepForm({
        steps: [<InformationForm apartmentData={apartmentData} handleUpdate={handleUpdate}/>, <LoacationForm apartmentData={apartmentData} handleUpdate={handleUpdate}/>,
    <DateForm apartmentData={apartmentData} handleUpdate={handleUpdate}/>, <AdditionalInfo apartmentData={apartmentData} handleUpdate={handleUpdate}/>,
    <EquipmentInfo apartmentData={apartmentData} handleUpdate={handleUpdate}/>, <ImageForm apartmentData={apartmentData} handleUpdate={handleUpdate}/>],
      });
      
    const handleSubmission = (e : any) => {
        e.preventDefault()
        console.log("Posting data")
        const apiUrl = 'https://p2nldoza40.execute-api.eu-west-1.amazonaws.com/api/apartments/post'
        const { images, ...updatedState } = apartmentData
        console.log(updatedState)
        const body = {
          apartment: {
            ...updatedState,
            ownerId: "ciwedjweifweiwei"
          },
          images: images
        }
        const requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body), 
        };
      
        fetch(apiUrl, requestOptions)
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json(); 
          })
          .then((responseData) => {
            console.log(responseData)
            console.log("Post successfull")
            //window.location.href = "/search"
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      }
        

    return (
        !isLoaded ? <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem'}}>
          <Skeleton width={350} height={30}/>
          <Skeleton width={350} height={30}/>
          <Skeleton width={350} height={30}/>
          <Skeleton width={350} height={30}/>
          <Skeleton width={350} height={30}/>
        </div> :
        ((isLoaded && user) ? (
            <div className='add-apartment-container'>
            <form onSubmit={goForward}>
            {step}
            <div className='buttons'>
                <button className='back-button' type="button" onClick={goBack}>Back</button>
                {currentIndex !== (steps.length - 1) ? <button className='next-button' type='submit'>Next</button>
                : <button className='next-button' style={{background: 'green'}} type='button' onClick={handleSubmission}>Submit</button>}
            </div>
            </form>
            </div>) : (isLoaded && !user) && <div style={{padding: "1rem 2rem", display: "flex", flexDirection: 'row', justifyContent: 'center'}}>
                <h2>This page is only for logged users. Plese log in to list your apartment.</h2>
            </div>)
    )
}