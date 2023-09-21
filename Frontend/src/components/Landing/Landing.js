"use client"

import './landing.css'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import LargeFilter from './LargeFilter'
import { useRef } from 'react'

function formatDateRangeForQuery(dateRange) {
  const [startStr, endStr] = dateRange.split(' - ');

  const [startDay, startMonth, startYear] = startStr.split('.');
  const [endDay, endMonth, endYear] = endStr.split('.');

  const startDate = new Date(`20${startYear}`, startMonth - 1, parseInt(startDay) + 1);
  const endDate = new Date(`20${endYear}`, endMonth - 1, parseInt(endDay) +1);

  const formattedStartDate = startDate.toISOString();
  const formattedEndDate = endDate.toISOString();

  const formattedQuery = `startDate=${formattedStartDate}&endDate=${formattedEndDate}`;

  return formattedQuery;
}

export default function Landing() {
  const router = useRouter()
  const cityRef = useRef(null)
  const priceRef = useRef(null)
  const dateRef = useRef(null)

  const handleClick = () => {
    const city = cityRef.current.value.toLowerCase() || ''
    const price = priceRef.current.value || ''
    const formattedDate = (dateRef.current.textContent !== 'Dates') ? formatDateRangeForQuery(dateRef.current.textContent) : 'startDate=now&endDate=temp'
    const params = `?minPrice=100&maxPrice=${price}&${formattedDate}`
    router.push(`/search${params}`)
  }

  return (
    <>
      <div className='landing-container'>
        <div className='slogan-container'> 
          <p>
            In need of a student apartment? <br/>
            <span> Start Searching</span> or sign up to
            <span> Sublet</span>!
          </p>
          <Image alt='landingImage' className='landing-image' src={'landing-image.png'} width={300} height={300} />
        </div>
        <LargeFilter cityRef={cityRef} priceRef={priceRef} dateRef={dateRef}/>
        <button onClick={handleClick} className='basic-button long'>Start Searching</button>
      </div>
    </>
  )
}
