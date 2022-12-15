import React from 'react'
import './nav.css'
import { AiTwotoneHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BsBook } from 'react-icons/bs';
import { MdMiscellaneousServices } from 'react-icons/md';
import { GrContact } from 'react-icons/gr';
import { useState } from "react";
const Nav = () => {
  const [activeNav,setActiveNav] =useState('#')
  return (
    <nav>
      <a href="#" onClick={()=>setActiveNav('#')} className={activeNav==='#' ? 'active' : ''}><AiTwotoneHome/></a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav==='#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experiance" onClick={()=>setActiveNav('#experiance')} className={activeNav==='#experiance' ? 'active' : ''}><BsBook/></a>
      <a href="#service" onClick={()=>setActiveNav('#service')} className={activeNav==='#service' ? 'active' : ''}><MdMiscellaneousServices/></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact' ? 'active' : ''}><GrContact/></a>
    </nav>
  )
}

export default Nav