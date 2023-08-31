import React, { useEffect } from 'react'
import classes from './Sidebar.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { menuClosed } from '../../store/themeSlice';
import { NavLink, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const dispatch = useDispatch();
    const enlaces = [
        { link: 'Dramas', path: '/dramas' },
        { link: 'Peliculas', path: '/dramas' },
        { link: 'Actores', path: '/dramas' },
        { link: 'Favoritos', path: '/favorites' },
        { link: 'Historial', path: '/dramas' },
        { link: 'Top dramas', path: '/dramas' },
      ];
  return (
    <>
    <div className={classes.sidebar}>
        <h2>Pandrama</h2>
        <form>
            <input type="text" placeholder='Search Drama'/>
        </form>
        <ul className={classes.ul}>
            {
                enlaces.map((link,index) =>(
                    <li key={index} onClick={() => dispatch(menuClosed())}><NavLink to={link.path}>{link.link}</NavLink></li>
                ))
            }
        </ul>
    </div>
    <div className={classes.content} onClick={() => dispatch(menuClosed())}></div>
    </>
  )
}

export default Sidebar
