"use client"

import { useState } from 'react'
import './apartmentList.css'
import ApartmentCard from '../ApartmentCard/ApartmentCard'

function ApartmentList({apartments}) {
    
    const [visible, setVisible] = useState(6)
    const showMore = () => {
        setVisible(prev => prev + 8)
    }

    return (
        (apartments) ? (
            <div className='flex-container'>
                <div className='apartment-list'>
                    <div className='grid-container'>
                        {apartments.slice(0, visible).map(apartment => {
                            return <ApartmentCard key={apartment.id} apartment={apartment}/>
                        })}
                    </div>
                </div>
            </div>
        ) : <p>Loading</p>
    );
}

export default ApartmentList;