import React, { useEffect } from 'react'
import './Destination.css'
import { MdLocationPin } from 'react-icons/md'
import { BsFillCalendarDateFill } from 'react-icons/bs'
import { BsFillCreditCardFill } from 'react-icons/bs'
import { BiSearchAlt } from 'react-icons/bi'
import image1 from '../../assets/images/img1main.jpg'
import image2 from '../../assets/images/img2main.jpg'
import image3 from '../../assets/images/img3main.jpg'
import image4 from '../../assets/images/img4main.jpg'
import image5 from '../../assets/images/img5main.jpg'
import image6 from '../../assets/images/img6main.jpg'
import image7 from '../../assets/images/img7main.jpg'
import image8 from '../../assets/images/img8main.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'

import { TiLocation } from "react-icons/ti"


const destinations = [
  {
    id: 1,
    img: image1,
    name: 'Seychelles Island',
    location: 'Indian Ocean',
    rating: 4.9,
  },
  {
    id: 2,
    img: image2,
    name: 'Maldives',
    location: 'Indian Ocean',
    rating: 4.9,
  }, {
    id: 3,
    img: image3,
    name: 'Jeju',
    location: 'South Korea',
    rating: 4.9,
  }, {
    id: 4,
    img: image4,
    name: 'Sicily',
    location: 'Italy ',
    rating: 1.9,
  }, {
    id: 5,
    img: image5,
    name: 'Cuba',
    location: 'cuba',
    rating: 3.9,
  }, {
    id: 6,
    img: image6,
    name: ' Fiji',
    location: ' Fiji Island',
    rating: 5,
  },
  {
    id: 7,
    img: image7,
    name: 'Borneo',
    location: ' Malaysia',
    rating: 4.1,
  }, {
    id: 8,
    img: image8,
    name: 'Maui',
    location: ' Hawaii',
    rating: 2.9,
  },
]
const Destination = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div className='destination section container'>
      <div className='secContainer'>
        <div className='secTitle'>
          <span className='redText'>
            EXPLORE NOW
          </span>
          <h3 data-aos="fade-up">
            Find Your Dream Destination
          </h3>
          <p data-aos="fade-up">
            Fill in the fields below to find the best spot for your next tour.
          </p>
        </div>
        <div className="searchField grid ">
          <div className="inputField flex" data-aos="fade-up">
            <MdLocationPin className='icon' />
            <input type='text' placeholder='Location' />
          </div>
          <div className="inputField flex" data-aos="fade-up">
            <BsFillCreditCardFill className='icon' />
            <input type='text' placeholder='Budget' />
          </div>
          <div className="inputField flex" data-aos="fade-up">
            <BsFillCalendarDateFill className='icon' />
            <input type='date' placeholder='Date' />
          </div>
          <button className='btn flex' data-aos="fade-up"><BiSearchAlt className="icon" />Search</button>
        </div>
        {/*  */}
        <div className='secMenu'>
          <ul className='flex' data-aos="fade-up">
            <li className='active'>All</li>
            <li>Recommended</li>
            <li>Beach</li>
            <li>Park</li>
            <li>Nature</li>
            <li>Mountain</li>
          </ul>
        </div>
        <div className="destinationContainer grid" data-aos="fade-up">
          {
            destinations.map(destination => {
              return (
                <div className='singleDestination' key={destination.id} data-aos="fade-up">
                  <div className='imgDiv'>
                    <img src={destination.img} alt='Image' />
                    <div className="descInfo flex">
                      <div className="text">
                        <span className="name">{destination.name}</span>
                        <p className='flex'>
                          <TiLocation className="icon" />
                          {destination.location}
                        </p>
                      </div>
                      <span className='rating'>{destination.rating}</span>
                    </div>
                  </div>
                </div>
              )
            })
          }

        </div>
      </div>
    </div>
  )
}

export default Destination
