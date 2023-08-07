import React, { useEffect, useState } from 'react'
import { BsBrightnessHigh, BsChevronRight, BsMoon, BsMoonStars } from "react-icons/bs";
import classes from './Top.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../../store/themeSlice';
const Top = () => {
    const dispacth = useDispatch();
    const {dark} = useSelector((state) => state.theme);
    const [show,setShow] = useState(false);
    
    const handleTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
          });
    };
   
    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 300){
                setShow(true);
            }else{
                setShow(false);
            }
        }
        window.addEventListener('scroll',handleScroll);
        return () => {
            window.removeEventListener('scroll',handleScroll);
        };
    },[])
  return (
    <div className={classes.lista}>
        <button className={classes.theme} onClick={() => dispacth(changeTheme())}>
            {
                dark ? (
                <>
                <span>Modo Claro</span><BsBrightnessHigh/>
                </>
                ) :
                ( 
                <>
                <span>Modo Oscuro</span><BsMoonStars/>
                </>
                )
            }
        </button>
        {
            show && (
                <button className={classes.top} onClick={handleTop}>
                    <span>Subir</span><BsChevronRight/>
                </button>
            )
        }
    </div>
  )
}

export default Top
