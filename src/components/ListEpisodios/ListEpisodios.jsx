import React from 'react'
import classes from './ListEpisodios.module.css'
import Episodios from './Episodios'
import ListActors from './ListActors'
import ListRecomendados from '../Recomendados/ListRecomendados'
import TopDramas from '../TopDramas/TopDramas'
const ListEpisodios = ({drama}) => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.infoDrama}>
            <Episodios drama={drama}/>
            <ListActors/>
            <ListRecomendados/>
        </div>
        <div className={classes.topDrama}>
            <TopDramas/>
        </div>
      </div>
    </div>
  )
}

export default ListEpisodios
