import React, { useEffect } from 'react'
import './Home.css'
import AirBalloon from '../../assets/videos/pexels-grisha-grishkoff-6277475 (2160p).mp4'
import hero1 from '../../assets/images/hero1.jpg'
import hero2 from '../../assets/images/hero2.jpg'
import hero3 from '../../assets/images/hero3.jpg'
import hero4 from '../../assets/images/hero4.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'
import { AiOutlineSwapRight } from "react-icons/ai"



const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div className='Home'>
      <div className='videoBg'>
        <video src={AirBalloon} autoPlay muted loop>
        </video>
      </div>
      {/*  */}
      <div className='sectionText'>
        <h1 data-aos="fade-up">Unlock Your Travel Dreams With Us!</h1>
        <p data-aos="fade-up">
          Discover the World's most adventurous nature,life is so short for a trip.        </p>
        <button className='btn' data-aos="fade-up">GET STARTED<AiOutlineSwapRight className="icon" /></button>
      </div>
      {/*  */}
      <div className='popularPLaces'>
        <div className='content'>
          <h3 data-aos="fade-up">Popular Places</h3>
          <div className='images flex'>
            <img src={hero1} alt='image' data-aos="fade-up" />
            <img src={hero2} alt='image' data-aos="fade-up"/>
            <img src={hero3} alt='image' data-aos="fade-up"/>
            <img src={hero4} alt='image' data-aos="fade-up"/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home
