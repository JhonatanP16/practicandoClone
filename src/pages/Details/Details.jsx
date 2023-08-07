import React from 'react'
import './Details.css'
import { useLocation } from 'react-router-dom'
import Portada from '../../components/Portada/Portada';
import ListEpisodios from '../../components/ListEpisodios/ListEpisodios';
import ListActors from '../../components/ListEpisodios/ListActors';
const Details = () => {
    const {state} = useLocation();
  return (
    <>
      <Portada drama={state}/>
      <ListEpisodios drama={state}/>
    </>
  )
}

export default Details
