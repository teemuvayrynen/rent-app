"use client"

import { useState, useRef, useEffect } from 'react'
import './navbar.css'
import Image from 'next/image'
import Filter from './Filter'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGears, faArrowRightFromBracket, faUser, faList } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import useDateRange from '@/hooks/useDateRange'

function Navbar() {
    const pathname = usePathname()
    const [dateRange, setDateRange, formatDateToCustomString] = useDateRange()
       
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

    // väliaikainen
    const user = false

  return (
    <>
      <div className='container'>
        <Link href="/">
          <Image alt='logo' src={'logo.svg'} width={60} height={60}/>
        </Link>
        {pathname === "/" ? null : (
          <>
            <Filter />
          </>
        )}
        
        {user ? (
          <div className='user-container'>
            <button className='basic-button'>Sublet</button>
            <div className='profile-picture'>
              TV
            </div>
            <div className='hamburger-menu' onClick={toggleActive}>
              <span></span>
              <span></span>
              <span></span>
              <div className='dropdown'>
              <p>
                <span className='dropdown-icons'>
                  <FontAwesomeIcon icon={faList} />
                </span>  
                Listings
              </p>
              <p>
                <span className='dropdown-icons'>
                  <FontAwesomeIcon icon={faUser} />
                </span> 
                Profile
              </p>
              <p>
                <span className='dropdown-icons'>
                  <FontAwesomeIcon icon={faGears} />
                </span> 
                Settings
              </p>
              <p>
                <span className='dropdown-icons'>
                  <FontAwesomeIcon icon={faArrowRightFromBracket} />
                </span> 
                Logout
              </p>
              </div> 
            </div>
          </div> 
        ) : (
          <div className='login-container'>
            <div className='login'>Log in</div>
            <button className='basic-button'>Sign up</button>
          </div>
        )}
      </div>
    </>
  )
}

export default Navbar;