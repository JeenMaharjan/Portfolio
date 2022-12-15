import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './headerSocial'
const header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'M</h5>
        <h1>Jeen Maharjan</h1>
        <h5 className="text-light">Web Developer</h5>
        <CTA/>
        <HeaderSocial/>
        <div className="me">
          <img src={ME} alt="" />
        </div>
        <a href="#contact" className='scroll_down'>scroll down</a>
      </div>
    </header>
  )
}

export default header