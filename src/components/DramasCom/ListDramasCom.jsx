import React from 'react'
import classes from './ListDramasCom.module.css'
import { Link, useLocation } from 'react-router-dom'
import { BsDownload, BsPlayCircle, BsStarFill } from 'react-icons/bs'
import { dowloadFile } from '../../helpers/Title'
const ListDramasCom = ({dramas}) => {
  const {pathname} = useLocation();

  return (
    <div className={classes.content}>
      {
        dramas.map((drama,index) => (
            <div className={classes.contentCard} key={index}>
                <Link
                className={classes.cardLink}
                style={{backgroundImage:`url(${drama.imgUrl})`}}
                title={`${drama.title}`}
                to={`/detalle/${(drama.titleUs).replace(/\s+/g, '-')}`}
                state={drama}
                >
                  {
                    pathname === '/favorites' && (
                      <BsDownload className={classes.iconoDown} onClick={(e) => dowloadFile(e,drama.imgUrl)}/>
                    )
                  }
                <div className={classes.play}>
                    <BsPlayCircle/>
                </div>
                <div className={classes.ribon}>
                    <p>{drama.status}</p>
                </div>
                <div className={classes.calificacion}>
                    <p>8.2</p><BsStarFill/>
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
  )
}

export default ListDramasCom
