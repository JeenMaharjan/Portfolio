import React from 'react'
import './contact.css'
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gbcjvld', 'template_bfwrfdv', form.current, 'tK3zoe1e___rTmCRA')
      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact ME</h2>
      <div className="container contact-container">
        <div className="contact-options">
          <article className='contact-option'>
            <MdEmail className='contact-icon'/>
            <h4>Email</h4>
            <h5>jeenmaharjan08@gmail.com</h5>
            <a href="mailto:jeenmaharjan08@gmail.com" target='_blank'>Send a message</a>

          </article>
          <article className='contact-option'>
            <BsMessenger className='contact-icon'/>
            <h4>Messenger</h4>
            <h5>Jeen Maharjan</h5>
            <a href="https://m.me/shadowfiend6" target='_blank'>Send a message</a>

          </article>
          
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Enter Your Full Name' required />
          <input type="email" name='email' placeholder='Enter Your Full Email' required />
          <textarea name="message"  rows="10" placeholder='Enter your message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact