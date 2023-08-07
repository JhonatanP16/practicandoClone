import React, { useState } from 'react'
import classes from './Portada.module.css'
import { BsHandThumbsUp, BsHeart, BsHeartFill, BsPlayCircle, BsStarFill } from "react-icons/bs";
import useFavorite from '../../hooks/useFavorite';
const Portada = ({drama}) => {
    const [calificacion,setCalificacion] = useState(1);
    const {handleAddFavorite, isFavorite} = useFavorite();
  return (
    <div className={classes.container}>
        <div className={classes.topBg} style={{backgroundImage:`url(${drama.imgUrl})`}}>
            <span className={classes.fondoUno}></span>
            <span className={classes.fondo}></span>
        </div>
      <div className={classes.content}>
            <div className={classes.img} style={{backgroundImage:`url(${drama.imgUrl})`}}>
                <div className={classes.ribon} style={(drama.status  == 'En emision') ? {backgroundColor: 'green'} : {backgroundColor: 'orange'}}>
                  {drama.status}
                </div>
            </div>
            <div className={classes.details}>
              <div>
                <h1>{drama.title}</h1>
                <p>{drama.titleUs}</p>
              </div>
              <div className={classes.info}>

              </div>
              <div className={classes.actions}>
                <div>
                  <button></button>
                </div>
                <div className={classes.icons}>
                  <div>
                  <button className={classes.trailer}>
                    <BsPlayCircle/>Trailer
                  </button>
                  </div>
                  <div className={classes.favorite}>
                    <button onClick={() => handleAddFavorite(drama)}>
                      {isFavorite(drama.id) ? <BsHeartFill className={classes.heartFill} title='Quitar de favoritos'/>  : <BsHeart title='añadir a favoritos'/> } 
                    </button>
                    <button className={classes.like}>
                      <BsHandThumbsUp/>
                      <span>1220</span>
                    </button> 
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.card}>
                <div className={classes.header}>
                  <span className={classes.rating}>{drama.rating}</span>
                  <div className={classes.calificacion}>
                    <p>Calificaciones</p>
                    <BsStarFill/>
                  </div>
                  <span className={classes.votos}>1048 votas</span>
                </div>
                <div className={classes.stars}>
                  <div className={classes.starsMark}>
                  {
                        Array.apply(null,{length:5}).map((e,i) => (
                          <BsStarFill
                          key={i}
                          onMouseEnter={() => setCalificacion(i+1)} 
                          className={`${(calificacion > i) ? classes.yellow : ''}`}/>
                        ))
                  }
                  </div>
                  <span>
                    {calificacion} estrella
                  </span>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Portada
