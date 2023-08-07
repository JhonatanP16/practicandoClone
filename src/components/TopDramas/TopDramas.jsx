import React, { useEffect, useState } from 'react'
import classes from './TopDramas.module.css'

const dramasTop = [
    "La realidad esta aqui",
    "Por favor, sé mi familia",
    "La buena  mala madre",
    "La mejor lee son Shin",
    "Papa te extraño",
    "El hombre vive en nuestra casa",
    "Eres la mejor, Lee Soon Shin"
  ]
const TopDramas = () => {
  const [show,setShow] = useState(false);
  useEffect(() => {
    const scrollPage = () => {
        if(window.scrollY > 800){
            setShow(true);
        }else{  
            setShow(false);
        }
    }
    window.addEventListener('scroll',scrollPage);
    return () =>{
        window.removeEventListener('scroll',scrollPage);
    }
  },[])
  return (
    <div className={`${classes.container} ${show ? classes.stick : ''}`}>
      <h2>TOP en Familia</h2>
      <div className={classes.content}>
        {
            dramasTop.map((drama,index) => (
                <div className={classes.cardList}>
                    <span>{index+1}</span>
                    <p>{drama}</p>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default TopDramas
