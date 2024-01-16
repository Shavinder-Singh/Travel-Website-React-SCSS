import React, { useEffect } from 'react'
import './Middle.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Middle = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div className='middle section'>
      <div className='secContainer container'>
        <div className='grid'>
          <span className='flex' data-aos="fade-up">
            <h1>10</h1>
            <p>World of Experiences</p>
          </span>
          <span className='flex' data-aos="fade-up">
            <h1>2K+</h1>
            <p>Fine Destinations</p>
          </span>
          <span className='flex' data-aos="fade-up">
            <h1>10K+</h1>
            <p>Customer reviews</p>
          </span>
          <span className='flex' data-aos="fade-up">
            <h1>5</h1>
            <p> OverAll Ratings</p>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Middle
