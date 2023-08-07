import React from 'react'
import classes from './Episodio.module.css'
import { useLocation } from 'react-router-dom'
import ButtonsActions from '../../components/Common/ButtonsActions';
import ListActors from '../../components/ListEpisodios/ListActors';
import ListRecomendados from '../../components/Recomendados/ListRecomendados';
import TopDramas from '../../components/TopDramas/TopDramas';

const Episodio = () => {
    const {state} = useLocation();
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.contentChild}>
          <div style={{width:'70%'}}>
            <iframe width="100%" height="450" src={state.link}  allow="autoplay" allowFullScreen></iframe>
            <ButtonsActions/>
          </div>
        </div>
      </div>
      <div className={classes.containerB}>
        <div className={classes.contentB}>
          <div className={classes.infoDrama}>
            <ListActors/>
            <ListRecomendados/>
          </div>
          <div className={classes.topDrama}>
            <TopDramas/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Episodio
