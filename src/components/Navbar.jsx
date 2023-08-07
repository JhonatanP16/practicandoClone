import React, { useEffect, useState } from 'react'
import classes from './Navbar.module.css'
import Logo from '../assets/logo.png'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { BiAlarm, BiGridAlt, BiHeart, BiUser } from "react-icons/bi";
import { BsChevronLeft } from "react-icons/bs";
import Search from './Common/Search';
const Navbar = () => {
    const classIsActive = ({isActive}) => isActive ? classes.linkActivo : ''; 
    const state = useLocation();
    const str = state.pathname.split('/');
    const navigate = useNavigate();
    const [navTop,setNavTop] = useState(false);
    useEffect(() => {
        window.scrollTo(0,0)
    },[state]);
    useEffect(() => {
        const handleNav = () => {
            if(window.scrollY > 100){
                setNavTop(true);
            }else{
                setNavTop(false);
            }
        }
        window.addEventListener('scroll',handleNav);
        return () => {
            window.removeEventListener('scroll',handleNav);
        }
    },[])
  return (
    <nav className={`${classes.nav} ${(str[1] === 'detalle' && !navTop) ? classes.navDetails : '' } ${navTop ? classes.navFixed : ''}`}>
        <div className={classes.container}>
            {
                (str[1] == 'detalle') ? (
                    <BsChevronLeft className={classes.back} onClick={() => navigate(-1)}/>
                ) : ''
            }
            <Link to='/' className={classes.imgContainer}>
                <img src={Logo} alt="" />
            </Link>
            <div className={classes.list}>
                <NavLink to='/dramas' className={classIsActive}>Dramas</NavLink>
                <NavLink to='/peliculas' className={classIsActive}>Peliculas</NavLink>
                <NavLink to='/actores' className={classIsActive}>Actores</NavLink>
            </div>
            <div className={classes.search}>
               <Search navTop={navTop}/>
            </div>
            <div className={classes.actions}>
                <BiAlarm title='Historial'/>
                <Link to='/topic'><BiGridAlt title='Tematicas'/></Link>
                <Link to='/favorites'><BiHeart title='Ranking'/></Link>
                <div className={classes.user}>
                    <BiUser/>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
