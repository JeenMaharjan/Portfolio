import React from 'react'
import './experiance.css'
import { AiFillCheckCircle } from "react-icons/ai";
const experiance = () => {
  return (
    <section id='experiance'>
      <h5>What skills I have</h5>
      <h2>My Experiance</h2>

      <div className="container experiance-container">
        <div className="experiance-frontend">
          <h3>FrontEnd Development</h3>
          <div className="experiance-content">
            <article className='experiance-details'>
            <AiFillCheckCircle className="experiance-icon"/>
            <div>
              <h4>HTML</h4>
            <small className='text-light'>Experiance</small>
            </div>

            </article>
            <article className='experiance-details'>
            <AiFillCheckCircle className="experiance-icon"/>
            <div>
              <h4>CSS</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            
            </article>
            <article className='experiance-details'>
            <AiFillCheckCircle className="experiance-icon"/>
            <div>
              <h4>Bootstrap</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            
            </article>
            <article className='experiance-details'>
            <AiFillCheckCircle className="experiance-icon"/>
            <div>
              <h4>JavaScript</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            
            </article>
            <article className='experiance-details'>
            <AiFillCheckCircle className="experiance-icon"/>
            <div>
              <h4>React</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default experiance