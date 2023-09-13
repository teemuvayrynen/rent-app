"use client"

import { useState } from 'react'
import './apartmentList.css'
import ApartmentCard from '../ApartmentCard/ApartmentCard'
import apartmentData from '../../../apartmentData.json'

function ApartmentList() {

    const [visible, setVisible] = useState(10)

    const showMore = () => {
        setVisible(prev => prev + 8)
    }
    return (
        <div className='flex-container'>
            <div className='apartment-list'>
                <div className='grid-container'>
                    {apartmentData.slice(0, visible).map(apartment => {
                        return <ApartmentCard key={apartment.id} apartment={apartment}/>
                    })}
                </div>
            </div>
            {visible < apartmentData.length ? (
            <button onClick={showMore}>Load More</button>
            ) : null}
        </div>
        
    );
}

export default ApartmentList;