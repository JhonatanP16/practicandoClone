import classes from './ListActors.module.css';
import { actors } from '../../data/actors';
import { Link } from 'react-router-dom';
import { BsLink } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from 'react';
const ListActors = () => {
  const [slidesToShow,setSlidesToShow] = useState(6);
  useEffect(() => {
    const updatedSlidesShow = () => {
      if(window.innerWidth >= 1280){
        setSlidesToShow(6);
      }else if(window.innerWidth >= 1024){
        setSlidesToShow(5);
      }else if(window.innerWidth >= 640){
        setSlidesToShow(4);
      }else if(window.innerWidth >= 0){
        setSlidesToShow(3);
      }
    }
    updatedSlidesShow();
    window.addEventListener('resize',updatedSlidesShow);
    return () => window.removeEventListener('resize',updatedSlidesShow);
  },[])
  return (
    <div className={classes.container}>
      <h2>Reparto principal</h2>
      <div className={classes.actors}>
        <Swiper
         slidesPerView={slidesToShow}
        >
          {
            actors.map((item,index) => (
              <SwiperSlide key={index} >
              <div className={classes.cardActor}>
                <Link
                className={classes.imgActor}
                style={{backgroundImage:`url(${item.imgActor})`}}
                >
                  <div className={classes.contentIcon}>
                    <BsLink/>
                  </div>
                </Link>
                <div className={classes.detailsActors}>
                  <span>{item.nombre}</span>
                </div>
              </div>
             </SwiperSlide>
            ))
          }
        </Swiper>
        </div>
    </div>
  )
}

export default ListActors
