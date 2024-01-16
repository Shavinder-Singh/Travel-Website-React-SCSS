import React,{useEffect} from 'react'
import './Footer.css'
import { ImFacebook } from 'react-icons/im'
import { BiLogoMediumOld } from 'react-icons/bi'
import { BsTwitter } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
import Aos from 'aos'
import 'aos/dist/aos.css'


const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div className='footer'>
      <div className='secContainer container grid'>
        <div className='logoDiv'>
          <div className='footerLogo'  data-Aos="fade-up">
            <BiLogoMediumOld className="icon" />
            <span>OU-Trips</span>
          </div>
          <div className='socials flex'  data-Aos="fade-up">
            <ImFacebook className='icon' />
            <BsTwitter className='icon' />
            <AiFillInstagram className='icon' />
          </div>
        </div>

        <div className='footerLinks'  data-Aos="fade-up">
          <span className="linkTitle">
            Information
          </span>
          <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Explore</a></li>
            <li><a href='#'>Travel</a></li>
            <li><a href='#'>Blog</a></li>
          </ul>

        </div>
        <div className='footerLinks'  data-Aos="fade-up">
          <span className="linkTitle">
            Helpful Links
          </span>
          <ul>
            <li><a href='#'>Destination</a></li>
            <li><a href='#'>Support</a></li>
            <li><a href='#'>Travel & Condition</a></li>
            <li><a href='#'>Privacy</a></li>
          </ul>
        </div>
        <div className='footerLinks'  data-Aos="fade-up">
          <span className='linkTitle'>Contact Details</span>
          <span className='phone'>+651 125 658</span>
          <span className='email'> singhshub3004@gmail.com</span>
        </div>
      </div>
    </div>
  )
}

export default Footer
