import React, { useEffect, useRef, useState } from 'react'
import classes from './Search.module.css'
import { FaAngleDown, FaSearch } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'
import { listKdramas } from '../../data/listKdrmas'

const Search = ({navTop}) => {
    const state = useLocation();
    const str = state.pathname.split('/');
    const refSelect = useRef(null);
    const [option,setOption] = useState('Videos');
    const [showSelect,setShowSelect] = useState(false);
    const handleShow = () => {
        setShowSelect((prev) => !prev);
    }
    useEffect(() => {
        const handleDocumentClick = (event) => {
            if(refSelect.current && !refSelect.current.contains(event.target)){
                setShowSelect(false)
            }
        }
        window.addEventListener('click',handleDocumentClick);
        return () => {
            document.removeEventListener('click',handleDocumentClick);
        }
    },[]);
    
    const [search ,setSearch] = useState('');
    const [data,setData] = useState([]);
    
    useEffect(() => {
        const dataFiltered = listKdramas.filter((drama) => {
            if(!(search.trim().length)) return;
            return (
                drama.title.toLowerCase().includes(search) || drama.titleUs.toLowerCase().includes(search)
            );
        });
        setData(dataFiltered.slice(0,6));
    },[search])

    const handleSubmit = () => {

    }
    const handleDeleteSearch = (e) => {
        e.preventDefault();
        setSearch('')
    }
    const handleClean = () => {
        setSearch('')
    }
  return (
   <div className={`${classes.content} ${(str[1] === 'detalle' && !navTop) ? classes.transparent : ''}`}>
    <div className={classes.selectionOption}>
        <button className={classes.select} ref={refSelect} onClick={handleShow}>
            {option} <FaAngleDown/>
        </button>
        {
            showSelect && (
                <div className={classes.options}>
                    <button onClick={() => setOption('Videos')}>Videos</button>
                    <button onClick={() => setOption('Actores')}>Actores</button>
                </div>
            )
        }
    </div>
    <form action="" className={(str[1] === 'detalle') ? classes.formDetails : ''} onSubmit={handleSubmit}>
        <input 
        type="text"
        placeholder='¿Qué buscas?'
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        {
            search.length > 0 && (
                <button onClick={(e) => handleDeleteSearch(e)} className={classes.cleanSearch}>
                    X
                </button>
            )
        }
       {
        data && data.length > 0 && (
            <div className={classes.results}>
             {
                data.map((drama) => (
                    <Link 
                    className={classes.cardResults} 
                    to={`/detalle/${(drama.titleUs).replace(/\s+/g, '-')}`
                    }
                    state={drama}
                    onClick={handleClean}
                    >
                        <div className={classes.imgItem} style={{backgroundImage:`url(${drama.imgUrl})`}}></div>
                        <div className={classes.resultsDetails}>
                            <p>{drama.title}</p>
                            <p>{drama.titleUs}</p>
                        </div>
                    </Link>
                ))
            }
            </div>
        )
       }
        <div>
            <button type='submit' className={classes.btnSubmit}>
            <FaSearch/> Buscar
            </button>
        </div>
    </form>
   </div>
  )
}

export default Search
