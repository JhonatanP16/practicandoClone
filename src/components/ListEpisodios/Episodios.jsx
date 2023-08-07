import React, { useState } from 'react'
import classes from './Episodios.module.css'
import { Link } from 'react-router-dom';
import { BsFilterRight } from "react-icons/bs";
import NotFound from '../../assets/404re.png'
import { titleConvert } from '../../helpers/Title';

const Episodios = ({drama}) => {
  const [episodiosArray,setEpisodiosArray] = useState(drama?.episodios);
  const [ascending,setAscending] = useState(true);
  const [viewMore,setViewMore] = useState(true);
  const sortArray = () =>{
    if(!(episodiosArray.length > 0)) return;
    setAscending((prev) => !prev);
    if(ascending){
        setEpisodiosArray((prev) => setEpisodiosArray(prev.sort((a,b) => b.numero_episodio - a.numero_episodio)));
    }else{
        setEpisodiosArray((prev) => setEpisodiosArray(prev.sort((a,b) => a.numero_episodio - b.numero_episodio)));
    }
  }

  return (
    <div className={classes.container}>
        <div className={classes.header}>
            <h2>Episodios</h2>
            <button onClick={sortArray}>
                <BsFilterRight className={ascending ? '' : classes.ascending}/>
                <span>Reordenar</span>
            </button>
        </div>
        {
                episodiosArray == null && (
                    <div className={classes.notFound}>
                        <p>No hay capitulos por mostrar</p>
                        <img src={NotFound} alt="" />
                    </div>
                )
        }
        <div className={classes.numEpisodios}>
           
            {
                (episodiosArray?.length > 11 && viewMore) ? (
                    episodiosArray?.slice(0,11).map((episodio,index) => (
                        <Link key={index} state={episodio} className={classes.num} to={`/episodio/${titleConvert(drama.titleUs)}-${episodio.numero_episodio}`}>Ep.{episodio.numero_episodio}</Link>
                    ))
                ) : (
                    episodiosArray?.map((episodio,index) => (
                        <Link key={index} state={episodio} className={classes.num} to={`/episodio/${titleConvert(drama.titleUs)}-${episodio.numero_episodio}`}>Ep.{episodio.numero_episodio}</Link>
                    ))
                )
            }
            {
                episodiosArray?.length > 11 &&
                (
                    <button className={classes.num} onClick={() => setViewMore((prev) => !prev)}>
                        Ver {viewMore ? 'más' : 'menos'}
                    </button>
                ) 
            }
        </div>
    </div>
  )
}

export default Episodios
