import React from 'react'
import classes from './Tags.module.css'
import { BsUbuntu } from "react-icons/bs";
const Tags = ({generos,años,paises,letras,setGeneros,setAños,setPaises,setLetras}) => {

  const handleResetFilters = () => {
    setGeneros([]);
    setAños([]);
    setPaises([]);
    setLetras([]);
  }
  return (
    <>
    <button className={classes.reload} title='resetear' onClick={handleResetFilters}>
         Reload <BsUbuntu/>
    </button>
    {
        generos.length !== 0 && (
                generos.map((genero) => (
                    <div className={classes.tagItem} key={genero}>
                        <span>{genero}</span>
                        <button onClick={() => setGeneros((prev) => { return prev.filter((item) => item !== genero)})}>
                            X
                        </button>
                    </div>
                ))
            
        )
    }
    {
        años.length !== 0 && (
                años.map((año) => (
                    <div className={classes.tagItem} key={año}>
                        <span>{año}</span>
                        <button onClick={() => setAños((prev) => { return prev.filter((item) => item !== año)})}>
                            X
                        </button>
                    </div>
                ))
            
        )
    }
    {
        paises.length !== 0 && (
                paises.map((pais) => (
                    <div className={classes.tagItem} key={pais}>
                        <span>{pais}</span>
                        <button onClick={() => setPaises((prev) => { return prev.filter((item) => item !== pais)})}>
                            X
                        </button>
                    </div>
                ))
            
        )
    }
    {
        letras.length !== 0 && (
                letras.map((letra) => (
                    <div className={classes.tagItem} key={letra}>
                        <span>{letra}</span>
                        <button onClick={() => setLetras((prev) => { return prev.filter((item) => item !== letra)})}>
                            X
                        </button>
                    </div>
                ))
            
        )
    }
    </>
  )
}

export default Tags
