import React from 'react'
import './service.css'
import { BsCheck2All } from "react-icons/bs";
function service() {
  return (
    <section id='service'>
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container service-container">
        <article className='service'>
          <div className="service-head">
            <h3>UI/UX design</h3>
          </div>
          <ul className="service-list">
            <li>
              <BsCheck2All className='service-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BsCheck2All className='service-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BsCheck2All className='service-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BsCheck2All className='service-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BsCheck2All className='service-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className="service-head">
            <h3>Web Development</h3>
          </div>
          <ul className="service-list">
            <li>
              <BsCheck2All className='service-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BsCheck2All className='service-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BsCheck2All className='service-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BsCheck2All className='service-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BsCheck2All className='service-icon'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </article>
        
      </div>
    </section>
  )
}

export default service