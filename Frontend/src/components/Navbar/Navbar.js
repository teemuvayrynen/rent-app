"use client"

import { useState, useRef, useEffect } from 'react'
import './navbar.css'
import Image from 'next/image'
import logo from '../../../public/logo.svg'
import Filter from './Filter'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

function Navbar() {
    const [dateRange, setDateRange] = useState([
        {
          startDate: new Date(),
          endDate: null,
          key: 'selection',
          isSet: false
        }
      ]);

      function formatDateToCustomString(date) {
        const day = date.getDate().toString().padStart(2, '0'); // Get the day and pad with leading zero if needed
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Get the month (months are zero-based) and pad with leading zero if needed
        const year = date.getFullYear().toString().slice(-2); // Get the last two digits of the year
      
        return `${day}.${month}.${year}`;
      }
    const [priceRange, setPriceRange] = useState({min: 0,max: 0, isSet: false})

    useEffect(() => {
        if(priceRange.isSet) {
            const priceFilterElement = document.querySelector('.price-filter')
            priceFilterElement.textContent = `${priceRange.min}€ - ${priceRange.max}€`
        }
        
        if(dateRange[0].isSet){
            const rangeElement = document.querySelector('.date-filter')
            const formattedStartDate = formatDateToCustomString(dateRange[0].startDate)
            const formattedEndDate = formatDateToCustomString(dateRange[0].endDate)
            rangeElement.textContent = `${formattedStartDate} - ${formattedEndDate}`
        
        }
    }, [priceRange, dateRange])

    const minPriceRef = useRef(0)
    const maxPriceRef = useRef(0)
    
    const toggleActive = () => {
        const hamburgerMenu = document.querySelector('.hamburger-menu')
        hamburgerMenu.classList.toggle('active')
    }

    const changePrice = () => {
        setPriceRange({
            min: minPriceRef.current.value ? minPriceRef.current.value : 0,
            max: maxPriceRef.current.value ? maxPriceRef.current.value : 0,
            isSet: (maxPriceRef.current.value && maxPriceRef.current.value !== 0) ? true : false
          })
        const rangeElement = document.querySelector('.price-range')
        rangeElement.classList.toggle('active')
    }

  return (
    <>
      <div className='container'>
        <Image alt='logo' src={logo} width={60} height={60}/>
        <Filter />
        <div className='price-range'>
            <div>
                <input placeholder='Insert minimum' type="number" ref={minPriceRef}/>
                -
                <input placeholder='Insert maximum' type="number" ref={maxPriceRef}/>
            </div>
            <button onClick={changePrice}>OK</button> 
        </div>
        <DateRange
            className="calendar"
            editableDateInputs={true}
            onChange={item => setDateRange([{...item.selection, isSet: true}])}
            moveRangeOnFirstSelection={false}
            ranges={dateRange}
            />
        <div className='user-container'>
          <div className='sublet'>Sublet</div>
          <div className='profile-picture'>
            TV
          </div>
          <div className='hamburger-menu' onClick={toggleActive}>
            <span></span>
            <span></span>
            <span></span>
            <div className='dropdown'>
            <p>Listings</p>
            <p>Profile</p>
            <p>Settings</p>
            <p>Logout</p>
            </div> 
          </div>
        </div> 
      </div>
    </>
  )
}

export default Navbar;