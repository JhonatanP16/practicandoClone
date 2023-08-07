import React, { useCallback, useEffect, useState } from 'react'
import { dramas } from '../data/data'

const useEmision = () => {
  const [categoriaSelecionada,setCategoriaSeleccionada] = useState('lunes');
  const categorias = Object.keys(dramas.emision);
  
 
  
  const changeCategoria = useCallback((categoria) => {
    setCategoriaSeleccionada(categoria);
  },[])

  
  let dramasFiltrado = dramas.emision[categoriaSelecionada];
  return (
    {
        categorias,
        changeCategoria,
        dramasFiltrado,
        categoriaSelecionada
    }
  )
}

export default useEmision
