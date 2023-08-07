import React from 'react'
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import classes from './Carrusel.module.css'
import {portada} from '../../data/data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from "swiper";
const Carrusel = () => {

  return (
    <div className={classes.section}>
      <div className={classes.container}>
      {
          portada.length === 0 ?(
            <div>
              Not items
            </div>
          ) : (
            <Swiper
            pagination={true}
            spaceBetween={10}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            speed={1000}
            
            navigation={true} 
            modules={[Navigation,Pagination,Autoplay]} 
            className="mySwiper"
            >
              {
                portada.map((item,index) => (
                  <SwiperSlide key={index}>
                      <img src={item.url} alt="" className={classes.img}/>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          )
        }
      </div>
       
    </div>
  )
}

export default Carrusel
