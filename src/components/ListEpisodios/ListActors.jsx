import classes from './ListActors.module.css';
import { actors } from '../../data/actors';
import { Link } from 'react-router-dom';
import { BsLink } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
const ListActors = () => {
 
  return (
    <div className={classes.container}>
      <h2>Reparto principal</h2>
      <div className={classes.actors}>
        <Swiper
         slidesPerView={6}
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
