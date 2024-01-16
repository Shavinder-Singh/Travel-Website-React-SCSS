import React,{useEffect} from 'react'
import './Reviews.css'
import { AiFillStar } from 'react-icons/ai';
import review1 from '../../assets/images/review1.jpeg'
import review2 from '../../assets/images/review2.jpg'
import review3 from '../../assets/images/review3.jpeg'
import review5 from '../../assets/images/review5.jpeg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Reviews = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div className='review section container'>
      <div className='secContainer grid'>
        <div className='textDiv'>
          <span className='redText' data-Aos="fade-up">FROM OUR CLIENTS</span>
          <h3  data-Aos="fade-up">Real Travel History From Our Beloved Clients</h3>
          <p  data-Aos="fade-up">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, maxime. Soluta, voluptates facere esse minima, architecto impedit error officia odit, vel blanditiis tempore perferendis perspiciatis accusantium do
            lorem reprehenderit nulla incidunt?</p>
          <span className='stars flex'  data-Aos="fade-up">
            <AiFillStar className='icon' />
            <AiFillStar className='icon' />
            <AiFillStar className='icon' />
            <AiFillStar className='icon' />
            <AiFillStar className='icon' />
            <AiFillStar className='icon' />
          </span>
          <div className='clientsImages flex'  data-Aos="fade-up">
            <img src={review1} alt="image"  data-Aos="fade-up"/>
            <img src={review2} alt="image"  data-Aos="fade-up"/>
            <img src={review3} alt="image"  data-Aos="fade-up"/>
            <img src={review5} alt="image"  data-Aos="fade-up"/>
          </div>
        </div>
        <div className='imgDiv'  data-Aos="fade-up">
          <img src={review2} alt='divImage'/>
        </div>
      </div>
    </div>
  )
}

export default Reviews
