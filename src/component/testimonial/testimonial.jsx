import React from 'react'
import './testimonial.css'
import AVA1 from '../../assets/avatar1.jpg'
import AVA2 from '../../assets/avatar2.jpg'
import AVA3 from '../../assets/avatar3.jpg'
import AVA4 from '../../assets/avatar4.jpg'
import {  Pagination,Navigation   } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';


const data=[
  {
    id:1,
    avatar:AVA1,
    name:'John Maharjan',
    review:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti incidunt distinctio hic libero cupiditate excepturi, saepe, odio non delectus iste dolores at, dolor iusto et?'
  },
  {
    id:2,
    avatar:AVA2,
    name:'Jenish Vai',
    review:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti incidunt distinctio hic libero cupiditate excepturi, saepe, odio non delectus iste dolores at, dolor iusto et?'
  },
  {
    id:3,
    avatar:AVA3,
    name:'Jeen Maharjan',
    review:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti incidunt distinctio hic libero cupiditate excepturi, saepe, odio non delectus iste dolores at, dolor iusto et?'
  },
  {
    id:4,
    avatar:AVA4,
    name:'Jenny Maharjan',
    review:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti incidunt distinctio hic libero cupiditate excepturi, saepe, odio non delectus iste dolores at, dolor iusto et?'
  },
]

const testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Review From Client</h5>
      <h2>Testimonial</h2>

      <Swiper className="container testimonial-container"
      modules={[  Pagination,Navigation  ]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      >
        {
          data.map((test)=>{
            const{id,avatar,name,review}=test
            return(
              <SwiperSlide key={id} className='testimonial'>
          <div className="client-avatar">
            <img src={avatar} alt={name} />
            
          </div>
          <h5 className='client-name'>{name}</h5>
            <small className='client-review'>
              {review}
            </small>
        </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default testimonial