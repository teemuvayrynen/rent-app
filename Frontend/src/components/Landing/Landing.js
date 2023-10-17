"use client"

import './landing.css'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import LargeFilter from './LargeFilter'
import { useRef } from 'react'
import { formatDateRangeForQuery } from '@/hooks/useDateRange'

export default function Landing() {
  const router = useRouter()
  const cityRef = useRef(null)
  const priceRef = useRef(null)
  const dateRef = useRef(null)

  const handleClick = () => {
    const priceQuery = (priceRef.current.value) ? `price=${priceRef.current.value}` : ''
    let formattedDate = ''
    if(dateRef.current && dateRef.current.textContent !== 'Dates'){
      formattedDate =formatDateRangeForQuery(dateRef.current.textContent)
    }
    if(priceQuery !== '' || formattedDate !== ''){
      const params = `?${priceQuery}&${formattedDate}`
      router.push(`/search${params}`)
    }
    else{
      router.push('/search')
    }
  }

  return (
    <>
      <section className='landing-container'>
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
      </section>
    </>
  )
}
