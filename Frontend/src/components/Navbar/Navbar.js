"use client"

import { useState, useEffect } from 'react'
import './navbar.css'
import Image from 'next/image'
import Filter from './Filter'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGears, faArrowRightFromBracket, faUser, faList, faHeart } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import Login from '@/components/Auth/Login'
import Signup from '@/components/Auth/Signup'
import { usePathname } from 'next/navigation'
import useDateRange from '@/hooks/useDateRange'
import useUserData from '@/hooks/useUserData'
import { signOut } from "aws-amplify/auth"


function Navbar() {
  const pathname = usePathname()
  const { user } = useUserData()
  const [dateRange, setDateRange, formatDateToCustomString] = useDateRange()
  const [showAuthForm, setShowAuthForm] = useState({
    login: false,
    signup: false
  })
      
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
  
  const toggleActive = () => {
      const hamburgerMenu = document.querySelector('.hamburger-menu')
      hamburgerMenu.classList.toggle('active')
  }

  const logout = async () => {
    try {
      await signOut({ global: true })
      window.location.reload()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      {showAuthForm.login ? <Login setVisible={setShowAuthForm} /> : null}
      {showAuthForm.signup ? <Signup setVisible={setShowAuthForm} /> : null}
      <div className='container'>
        <Link href="/">
          <Image alt='logo' src={'logo.svg'} width={60} height={60}/>
        </Link>
        {(pathname === "/" || pathname === "/addApartment" || pathname === "/apartment"
        || pathname === "/account/settings" || pathname === "/account/apartments")? null : (
          <>
            <Filter />
          </>
        )}
        
        {user !== null ? (
          <div className='user-container'>
            <button className='basic-button' onClick={() => window.location.href = "/addApartment"}>Sublet</button>
            <div className='profile-picture'>
              {String((user.name).charAt(0)).toUpperCase()}
            </div>
            <div className='hamburger-menu' onClick={toggleActive}>
              <span></span>
              <span></span>
              <span></span>
              <div className='dropdown'>
              <Link href="/account/favorites" className='dropdown-item'>
                <span className='dropdown-icons'>
                  <FontAwesomeIcon icon={faHeart} />
                </span>  
                Favorites
              </Link>
              <Link href="/account/apartments" className='dropdown-item'>
                <span className='dropdown-icons'>
                  <FontAwesomeIcon icon={faList} />
                </span>  
                Listings
              </Link>
              <p className='dropdown-item'>
                <span className='dropdown-icons'>
                  <FontAwesomeIcon icon={faUser} />
                </span> 
                Profile
              </p>
              <Link href="/account/settings" className='dropdown-item'>
                <span className='dropdown-icons'>
                  <FontAwesomeIcon icon={faGears} />
                </span> 
                Settings
              </Link>
              <p className='dropdown-item' onClick={logout}>
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
            <div onClick={() => { setShowAuthForm({ signup: false, login: true }) }} className='login'>Log in</div>
            <button onClick={() => { setShowAuthForm({ signup: true, login: false }) }} className='basic-button'>Sign up</button>
          </div>
        )}
      </div>
    </>
  )
}

export default Navbar;