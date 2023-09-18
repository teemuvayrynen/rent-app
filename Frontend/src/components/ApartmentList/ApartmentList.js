"use client"

import { useState } from 'react'
import './apartmentList.css'
import ApartmentCard from '../ApartmentCard/ApartmentCard'

function ApartmentList({apartments}) {
    
    const [visible, setVisible] = useState(10)
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
            {visible < apartments.length ? (
            <button onClick={showMore}>Load More</button>
            ) : <button onClick={showMore} style={{opacity: 0, pointerEvents: 'none'}}>Load More</button>}
        </div>) : <p>Loading</p>
    );
}

export default ApartmentList;