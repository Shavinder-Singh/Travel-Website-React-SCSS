import React,{useEffect} from 'react'
import './Subscribe.css'
import subscribeImage from '../../assets/images/subscribe.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Subscribe = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
}, [])
  return (
    <div className='subscribe section container'>
      <div className='secContainer grid'>
        <img src={subscribeImage} alt='image' data-Aos="fade-up"/>
        <div className='textDiv'>
          <h4 data-Aos="fade-up">Best Way To Start Your Journey!</h4>
          <p data-Aos="fade-up">We offer Personalized itineraries tailored to individual preferences and interests</p>
          <button className='btn' data-Aos="fade-up">Start Here</button>
        </div>
      </div>
    </div>
  )
}

export default Subscribe