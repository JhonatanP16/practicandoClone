import React from 'react'
import classes from './Filter.module.css'
import { countries, generosList } from '../../data/filtros'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { setAñosFilter, setGenerosFilter, setLetrasFilter, setPaisesFilter } from '../../store/fiterSlice';
import Tags from './Tags';
const Filter = () => {
  let years = [];
  let abc = [];

  const codigoA = 'A'.charCodeAt(0);
  const codigoZ = 'Z'.charCodeAt(0);

  for(let i = 2023; i >= 2005; i--){
    years.push(i)
  }
  
  for(let codigo = codigoA; codigo <= codigoZ; codigo++){
    const letra = String.fromCharCode(codigo);
    abc.push(letra);
  }
 /* Onchange */

 const dispatch = useDispatch();
 
 const [generosSelected,setGenerosSelected] = useState([]);

 const handleGenerosChange = ({target}) => {
    if(target.checked){
        setGenerosSelected([...generosSelected,target.value])
    }else{
        setGenerosSelected((prevValue) => {
            return prevValue.filter((item) => item !=target.value);
        });
    }
 };


 const [countrySelected,setCountrySelected] = useState([]);

 const handleCountryChange = ({target}) => {
    if(target.checked){
        setCountrySelected([...countrySelected,target.value]);
    }else{
        setCountrySelected((prev) => { return prev.filter((item) => item != target.value);});
    }
 }

const [añoSelected,setAñoSelected] = useState([]);

const handleAñoSelected = ({target}) => {
    if(target.checked){
        setAñoSelected([...añoSelected,target.value]);
    }else{
        setAñoSelected((prev) => {
            return prev.filter((item) => item != target.value);
        });
    }
}

const [letterSelected,setLetterSelected] = useState([]);

const handleLetterChange = ({target}) => {
    if(target.checked){
        setLetterSelected([...letterSelected,target.value]);
    }else{
        setLetterSelected((prev) => {
            return prev.filter((item) => item !== target.value);
        })
    }
};

useEffect(() => {
    dispatch(setGenerosFilter(generosSelected))
},[generosSelected])

useEffect(() => {
    dispatch(setPaisesFilter(countrySelected))
},[countrySelected])

useEffect(() => {
    dispatch(setAñosFilter(añoSelected))
},[añoSelected])

useEffect(() => {
    dispatch(setLetrasFilter(letterSelected))
},[letterSelected])

  return (
    <div className={classes.content}>
      <div className={classes.typeFilter}>
        <div className={classes.itemFilter}>
            Filtros
        </div>
        <div className={classes.itemsFilter}>
            <Tags 
            generos={generosSelected}
            años={añoSelected}
            paises={countrySelected}
            letras={letterSelected}
            setGeneros={setGenerosSelected}
            setAños={setAñoSelected}
            setPaises={setCountrySelected}
            setLetras={setLetterSelected}
            />
        </div>
      </div>
      <div className={classes.typeFilter}>
        <div className={classes.itemFilter}>
            Género
        </div>
        <div className={classes.itemsFilter}>
            {
                generosList.map((genre) => (
                    <div className={classes.divInput} key={genre}>
                        <input 
                        type="checkbox"
                        name='generos'
                        id={genre}
                        value={genre}
                        className={classes.input}
                        style={{display:'none'}}
                        onChange={handleGenerosChange}
                        checked={generosSelected.includes(genre)}
                        />
                        <label htmlFor={genre}>{genre}</label>
                    </div>
                ))
            }
        </div>
      </div>
      <div className={classes.typeFilter}>
        <div className={classes.itemFilter}>
            País
        </div>
        <div className={classes.itemsFilter}>
            {
                countries.map((country) => (
                    <div className={classes.divInput} key={country}>
                        <input 
                        type="checkbox"
                        name='paises'
                        id={country}
                        value={country}
                        className={classes.input}
                        style={{display:'none'}}
                        checked={countrySelected.includes(country)}
                        onChange={handleCountryChange}
                        />
                        <label htmlFor={country}>{country}</label>
                    </div>
                ))
            }
        </div>
      </div>
      <div className={classes.typeFilter}>
        <div className={classes.itemFilter}>
            Año
        </div>
        <div className={classes.itemsFilter}>
            {
                years.map((year) => (
                    <div className={classes.divInput} key={year}>
                        <input 
                        type="checkbox"
                        name='años'
                        id={year}
                        value={year}
                        className={classes.input}
                        style={{display:'none'}}
                        checked={añoSelected.includes(year.toString())}
                        onChange={handleAñoSelected}
                        />
                        <label htmlFor={year}>{year}</label>
                    </div>
                ))
            }
        </div>
      </div>
      <div className={classes.typeFilter}>
        <div className={classes.itemFilter}>
            Letra
        </div>
        <div className={classes.itemsFilter}>
            {
                abc.map((letter) => (
                    <div className={classes.divInput} key={letter}>
                        <input 
                        type="checkbox"
                        name='letras'
                        id={letter}
                        value={letter}
                        className={classes.input}
                        style={{display:'none'}}
                        onChange={handleLetterChange}
                        checked={letterSelected.includes(letter)}
                        />
                        <label htmlFor={letter}>{letter}</label>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default Filter
