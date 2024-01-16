import React,{useEffect} from 'react'
import './Portfolio.css'
import portfolio1 from '../../assets/images/portfolioreal1.png'
import portfolio2 from '../../assets/images/portfolioreal2.png'
import portfolio3 from '../../assets/images/portfloreal3.png'
import portfolioRightimage from '../../assets/images/portfolioRightimageReal.png'


import Aos from 'aos'
import 'aos/dist/aos.css'



const Portfolio = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div className='portfolio section container'>
      <div className='secContainer grid'>
        <div className='leftContent'>
          <div className='secHeading'>
            <h3 data-Aos="fade-up">Why Shuld You Choose US</h3>
            <p data-Aos="fade-up">We have extensive Knowledge and experience in the travel industry.</p>
          </div>
          <div className='grid'>
            <div className='singlePortfolio flex'>
              <div className='iconDiv'>
                <img src={portfolio1} alt='image' />
              </div>
              <div className='info' data-Aos="fade-up">
                <h4>Safety and support</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse maxime nostrum omnis est culpa aliquid veritatis? Autem natus libero sunt quas iusto optio
                  voluptate nihil vitae! Minus harum at sequi.</p>
              </div>
            </div>
            <div className='singlePortfolio flex' data-Aos="fade-up">
              <div className='iconDiv'>
                <img src={portfolio2} alt='image' />
              </div>
              <div className='info'>
                <h4>Safety and support</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse maxime nostrum omnis est culpa aliquid veritatis? Autem natus libero sunt quas iusto optio
                  voluptate nihil vitae! Minus harum at sequi.</p>
              </div>
            </div>
            <div className='singlePortfolio flex' data-Aos="fade-up">
              <div className='iconDiv' >
                <img src={portfolio3} alt='image'  />
              </div>
              <div className='info'>
                <h4>Safety and support</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse maxime nostrum omnis est culpa aliquid veritatis? Autem natus libero sunt quas iusto optio
                  voluptate nihil vitae! Minus harum at sequi.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='rightContent' data-Aos="fade-up">
          <img src={portfolioRightimage} alt='image' />

        </div>
      </div>
    </div>
  )
}

export default Portfolio
