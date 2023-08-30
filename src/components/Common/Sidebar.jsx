import React from 'react'
import classes from './Sidebar.module.css'
import { useDispatch } from 'react-redux'
import { menuClosed } from '../../store/themeSlice';

const Sidebar = () => {
    const dispatch = useDispatch();
    const links = ['Dramas','Peliculas','Actores', 'Favoritos', 'Histotial','Top Dramas']
  return (
    <>
    <div className={classes.sidebar}>
        <h2>Pandrama</h2>
        <form>
            <input type="text" placeholder='Search Drama'/>
        </form>
        <ul className={classes.ul}>
            {
                links.map((link,index) =>(
                    <li key={index}><a href="/dramas">{link}</a></li>
                ))
            }
        </ul>
    </div>
    <div className={classes.content} onClick={() => dispatch(menuClosed())}></div>
    </>
  )
}

export default Sidebar
