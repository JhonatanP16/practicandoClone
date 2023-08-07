import React from 'react'
import classes from './Home.module.css'
import Carrusel from '../../components/Carrusel/Carrusel'
import DramaList from '../../components/Dramas/DramaList'
import { dramas } from '../../data/data'
import useEmision from '../../hooks/useEmision'

const Home = () => {
  const {categorias,dramasFiltrado,changeCategoria,categoriaSelecionada} = useEmision();
  
  return (
    <>
    <Carrusel/>
    <div className={classes.section}>
      <div className={classes.container}>
        <DramaList dramas={dramas.popular} nameSection='Popular hoy'/>
        <DramaList dramas={dramas.romance} nameSection='Romance'/>
        <DramaList dramas={dramas.familia} nameSection='Familia'/>
        <DramaList 
        dramas={dramasFiltrado} 
        nameSection='Emision' 
        categorias={categorias} 
        changeCategoria={changeCategoria}
        categoriaSelecionada={categoriaSelecionada}/>
      </div>
    </div>
    </>
  )
}

export default Home
