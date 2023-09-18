"use client"

import './landing.css'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import LargeFilter from './LargeFilter'

export default function Landing() {
  const router = useRouter()

  const handleClick = () => {
    router.push('/search')
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
          <Image className='landing-image' src={'landing-image.png'} width={300} height={300} />
        </div>
        <LargeFilter />
        <button onClick={handleClick} className='basic-button long'>Start Searching</button>
      </div>
    </>
  )
}
