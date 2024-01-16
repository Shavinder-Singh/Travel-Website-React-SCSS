import React, { useState } from 'react'
import './Navbar.css'
import { IoLogoBuffer } from "react-icons/io";
import { IoCloseCircle } from "react-icons/io5";
import { PiDotsNineBold } from "react-icons/pi";
const Navbar = () => {
  const [navbar, setnavbar] = useState('menu');
  // function to show a navbar
  const showNavBar = () => {
    setnavbar("menu shownavbar")
  }

  return (
    <div className='navBar'>
      <div className='logoDiv'>
        <IoLogoBuffer />
        <span>Tor-Trips</span>
      </div>
      <div className={navbar}>
        <ul>
          <li className='navlist'>
            Destination
          </li>
          <li className='navlist'>
            About Us
          </li>
          <li className='navlist'>
            Testimonial
          </li>
          <li className='navlist'>
            Gallery
          </li>
        </ul>
        <IoCloseCircle className='icon closeIcon' />
      </div>
      <button className='signInBtn btn'>Sign Up</button>
      <PiDotsNineBold className='menuIcon' onClick={showNavBar} />
    </div>
  )
}

export default Navbar
