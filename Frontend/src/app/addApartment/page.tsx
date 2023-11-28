"use client"
import dynamic from 'next/dynamic'
import useMultiStepForm from '@/hooks/useMultiStepForm'
import InformationForm from '@/components/AddApartment/InformationForm'
import './addApartment.css'
import React, { useState, useEffect } from 'react';
import useUserData from '@/hooks/useUserData'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { v4 as uuidv4 } from 'uuid';
import { uploadData } from 'aws-amplify/storage';
import { fetchAuthSession } from 'aws-amplify/auth'

const DynamicEquipmentInfo = dynamic(() => import('@/components/AddApartment/EquiptmentInfo'), {
  loading: () => <p>Loading...</p>,
})

const DynamicAdditionalInfo = dynamic(() => import('@/components/AddApartment/Additionalnfo'), {
  loading: () => <p>Loading...</p>,
})

const DynamicDateForm = dynamic(() => import('@/components/AddApartment/DateForm'), {
  loading: () => <p>Loading...</p>,
})

const DynamicLocationForm = dynamic(() => import('@/components/AddApartment/LocationForm'), {
  loading: () => <p>Loading...</p>,
})

const DynamicImageForm = dynamic(() => import('@/components/AddApartment/ImageForm'), {
  loading: () => <p>Loading...</p>,
})

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
    endDate: 'temp',
    created: '',
    building_society: '', // optional
    status: 1, // 1 or 0 depending on the listing's online status
  };
  

export default function AddApartmentsPage() {
    const [apartmentData, setApartmentData] = useState(initialApartmentState);
    const { user } = useUserData()

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
        steps: [<InformationForm apartmentData={apartmentData} handleUpdate={handleUpdate}/>, <DynamicLocationForm apartmentData={apartmentData} handleUpdate={handleUpdate}/>,
    <DynamicDateForm apartmentData={apartmentData} handleUpdate={handleUpdate}/>, <DynamicAdditionalInfo apartmentData={apartmentData} handleUpdate={handleUpdate}/>,
    <DynamicEquipmentInfo apartmentData={apartmentData} handleUpdate={handleUpdate}/>, <DynamicImageForm apartmentData={apartmentData} handleUpdate={handleUpdate}/>],
      });
      
    const handleSubmission = async (e : any) => {
        try {
          e.preventDefault()
          const userData = await fetchAuthSession()
          if (!userData) return

          const { images, ...updatedState } = apartmentData

          const request = images.map(async (img: any) => {
            const type = img.type.split("/")
            const id = uuidv4()
            const name = `${id}.${type[1]}`
            return await uploadData({
              key: name,
              data: img,
              options: {
                accessLevel: 'private'
              }
            }).result
          })

          const results = await Promise.all(request)
    
          const sentImages = results.map((obj) => {
            return obj.key
          });          

          if (images.length !== sentImages.length) {
            console.log("Error when sending images")
            return
          }

          const apiUrl = 'https://p2nldoza40.execute-api.eu-west-1.amazonaws.com/api/apartments/post'
          const body = {
            apartment: {
              ...updatedState,
              ownerId: userData.userSub
            },
            images: sentImages,
            federatedId: userData.identityId
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
            localStorage.removeItem('apartmentData');
            window.location.href = "/account/apartments"
          })
          .catch((error) => {
            console.error('Error:', error);
          });
        } catch (err: any) {
          throw new Error(err)
        }
      }
        

    return (
      <>
        {!user ? (
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem'}}>
            <Skeleton width={350} height={30}/>
            <Skeleton width={350} height={30}/>
            <Skeleton width={350} height={30}/>
            <Skeleton width={350} height={30}/>
            <Skeleton width={350} height={30}/>
          </div>
        ) : (
          <div className='add-apartment-container'>
            <form onSubmit={goForward}>
            {step}
            <div className='buttons'>
                <button className='back-button' type="button" onClick={goBack}>Back</button>
                {currentIndex !== (steps.length - 1) ? <button className='next-button' type='submit'>Next</button>
                : <button className='next-button' style={{background: 'green'}} type='button' onClick={handleSubmission}>Submit</button>}
            </div>
            </form>
          </div>
        )}
      </>
    )
}