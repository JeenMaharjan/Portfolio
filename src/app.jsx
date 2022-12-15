import React from 'react'
import Header from './component/header/header'
import Footer from './component/footer/footer'
import About from './component/about/about'
import Contact from './component/contact/Contact'
import Experiance from './component/experiance/experiance'
import Nav from './component/nav/Nav'
import Portfolio from './component/portfolio/portfolio'
import Testimonial from './component/testimonial/testimonial'
import Service from './component/service/service'
const app = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experiance/>
    <Service/>
    <Portfolio/>
    <Testimonial/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default app