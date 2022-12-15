import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { ImGithub } from "react-icons/im";
import { FaDribbbleSquare } from "react-icons/fa";
const headerSocial = () => {
  return (
    <div className="header_socials">
        <a href="https://linkedin.com" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com" target='_blank'><ImGithub/></a>
        <a href="https://dribbble.com" target='_blank'><FaDribbbleSquare/></a>
    </div>
  )
}

export default headerSocial