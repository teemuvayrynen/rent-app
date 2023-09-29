"use client"

import { useState, useRef, useEffect, useContext } from 'react'
import './navbar.css'
import Image from 'next/image'
import Filter from './Filter'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGears, faArrowRightFromBracket, faUser, faList } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import Login from '@/components/Auth/Login'
import Signup from '@/components/Auth/Signup'
import { usePathname } from 'next/navigation'
import useDateRange from '@/hooks/useDateRange'
import { AccountContext } from '@/context/Account'


function Navbar() {
    const pathname = usePathname()
    const { getSession, logout } = useContext(AccountContext)
    const [user, setUser] = useState(null)
    const [dateRange, setDateRange, formatDateToCustomString] = useDateRange()
    const [showAuthForm, setShowAuthForm] = useState({
      login: false,
      signup: false
    })
       
    const [priceRange, setPriceRange] = useState({min: 0,max: 0, isSet: false})

    useEffect(() => {
      getSession().then((session) => {
        setUser({ name: session.idToken.payload.name })
      })
    }, [])

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
      {showAuthForm.login ? <Login setVisible={setShowAuthForm} /> : null}
      {showAuthForm.signup ? <Signup setVisible={setShowAuthForm} /> : null}
      <div className='container'>
        <Link href="/">
          <Image alt='logo' src={'logo.svg'} width={60} height={60}/>
        </Link>
        {(pathname === "/" || pathname === "/addApartment" || pathname === "/apartment")? null : (
          <>
            <Filter />
          </>
        )}
        
        {user !== null ? (
          <div className='user-container'>
            <button className='basic-button' onClick={() => window.location.href = "/addApartment"}>Sublet</button>
            <div className='profile-picture'>
              {(user.name).charAt(0)}
            </div>
            <div className='hamburger-menu' onClick={toggleActive}>
              <span></span>
              <span></span>
              <span></span>
              <div className='dropdown'>
              <p className='dropdown-item'>
                <span className='dropdown-icons'>
                  <FontAwesomeIcon icon={faList} />
                </span>  
                Listings
              </p>
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
              <p className='dropdown-item' onClick={() => {
                logout()
                window.location.reload()
              }}>
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