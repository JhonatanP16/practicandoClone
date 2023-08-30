import React, { useEffect, useState } from 'react'
import classes from './ListRecomendados.module.css'
import { BsPlayCircle, BsStarFill, BsUbuntu } from 'react-icons/bs'
import { recomendados } from '../../data/recomendados'
import { Link } from 'react-router-dom'
const ListRecomendados = () => {
  
  const [currPage,setCurrPage] = useState(1);
  const [data,setData] = useState([]);
  const itemsPerPage = 10;
  const totalPaginas = Math.ceil(recomendados.length / itemsPerPage);

  useEffect(() => {
    const indexPrev = itemsPerPage * (currPage - 1);
    const indexCurr = itemsPerPage * currPage;
    setData(recomendados.slice(indexPrev,indexCurr));
  },[currPage])

  const handlePaginate = (page) => {
    if(page > totalPaginas){
        return setCurrPage(1);
    }
    setCurrPage(page)
  }
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h2>Recomendados</h2>
        <BsUbuntu onClick={() =>handlePaginate(currPage+1)}/>
      </div>
      <div className={classes.content}>
        {
            data?.map((drama,index) => (
                <div className={classes.contentCard} key={index}>
                    <Link
                    className={classes.cardLink}
                    style={{backgroundImage:`url(${drama.imgUrl})`}}
                    title={`${drama.title}`}
                    to={`/detalle/${(drama.titleUs).replace(/\s+/g, '-')}`}
                    state={drama}
                    >
                    <div className={classes.play}>
                        <BsPlayCircle/>
                    </div>
                    <div className={classes.ribon}>
                        <p>{drama.status}</p>
                    </div>
                    <div className={classes.calificacion}>
                        <p>{drama.rating}</p><BsStarFill/>
                    </div>
                    </Link>
                    <div className={classes.textDrama}>
                      <span>{drama.title}</span>
                      <span>{drama.titleUs}</span>
                    </div>
              </div>
            ))
        }
      </div>
    </div>
  )
}

export default ListRecomendados
