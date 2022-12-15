import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { BsAwardFill } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { GrProjects } from "react-icons/gr";
const about = () => {
  return (
    <section id='about'>
      <h5>Get to know me</h5>
      <h2>About me</h2>
      
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about-content">
          <div className="about-cards">
            <article className='about-card'>
              <BsAwardFill className='about-icon'/>
              <h5>Experiance</h5>
              <small>6 months</small>
            </article>
            <article className='about-card'>
              <FiUsers className='about-icon'/>
              <h5>Clients</h5>
              <small>Non</small>
            </article>
            <article className='about-card'>
              <GrProjects className='about-icon'/>
              <h5>Projects</h5>
              <small>50+</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias aliquam facilis amet voluptatem quidem eius obcaecati sunt illo quod laudantium. Vel eum obcaecati aliquam mollitia dolorum recusandae quasi velit consequatur?
          </p>
          <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default about