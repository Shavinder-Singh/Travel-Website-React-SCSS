import React, { useState ,useEffect} from 'react'
import './Questions.css'
import Accordian from './Accordian'
import Aos from 'aos'
import 'aos/dist/aos.css'



const Question = () => {
  const [active, setActive] = useState('title')
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div className='questions section container'>
      <div className='secHeading'>
        <h3 data-Aos="fade-up">Frequently Asked Questions</h3>
      </div>
      <div className='secContainer grid'>
        <div className="accordian grid">
          <Accordian title="title1"
            desc="Lorem ipsum dolor sit amet consectetur a
                dipisicing elit. Incidunt, ullam  ullam  ullam id sapiente eaque laudantium, alias magnam architecto vitae doloribus hic consequuntur accusantium officia. Minus a distinctio, quibusdam quisquam incidunt ea."
            active={active}
            setActive={setActive}  data-Aos="fade-up"/>
          <Accordian title="title2"
            desc="Lorem ipsum dolor sit amet consectetur a
                dipisicing elit. Incidunt, ullam  ullam  ullam id sapiente eaque laudantium, alias magnam architecto vitae doloribus hic consequuntur accusantium officia. Minus a distinctio, quibusdam quisquam incidunt ea."
            active={active}
            setActive={setActive} data-Aos="fade-up"/>
        </div>
        <div className='form'>
          <div className='secHeading'>
            <h4 data-Aos="fade-up">Do You Have any Specific Question?</h4>
            <p data-Aos="fade-up">Please fill the form below and our dedicated team will get intouch with you as soon as possible.</p>
          </div>
          <div className='formContent grid'>
            <input type='email' placeholder='Enter Email Address' data-Aos="fade-up" />
            <textarea placeholder="Enter Your Question here" data-Aos="fade-up"></textarea>
            <button className='btn' data-Aos="fade-up">Submit Inquiry</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Question
