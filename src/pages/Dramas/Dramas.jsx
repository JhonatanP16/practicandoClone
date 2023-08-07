import React, { useEffect } from 'react'
import classes from './Dramas.module.css'
import ListDramasCom from '../../components/DramasCom/ListDramasCom'
import Filter from '../../components/Common/Filter'
import { useDispatch, useSelector } from 'react-redux'
import { listKdramas } from '../../data/listKdrmas'
import { setDramas } from '../../store/fiterSlice'
import Paginate from '../../components/Common/Paginate'
import { useState } from 'react'
import NotFound from '../../assets/404re.png'
const Dramas = () => {
  const dispatch = useDispatch();
  const {generos,años,letras,paises} = useSelector((state) => state.filter.filters);
  const dramasList = useSelector((state) => state.filter.dramas);
  
  const counterPerPage = 12;
  const [currentPage,setCurrentPage] = useState(1);
  const [collection,setCollection] = useState(listKdramas.slice(0,counterPerPage));
  const updatePage = (page) =>{
    setCurrentPage(page);
  }
  useEffect(() => {
    if(!dramasList){
      dispatch(setDramas(listKdramas));
      return
    }
  },[dramasList,dispatch])

  useEffect(() => {
    let dramasFiltrados = listKdramas; 

    // Filtrar por generos
    dramasFiltrados = dramasFiltrados.filter((drama) => {
      if (generos.length === 0) return true;
      return generos.some((gen) => (Array.isArray(drama.generos) ? drama.generos.includes(gen) : drama.generos === gen));
    });

    // Filtrar por años
    dramasFiltrados = dramasFiltrados.filter((drama) => {
      if (años.length === 0) return true;
      return años.includes((drama.año).toString());
    });
    
    // Filtrar por paises
    dramasFiltrados = dramasFiltrados.filter((drama) => {
      if (paises.length === 0) return true;
      return paises.includes(drama.pais);
    });
    //Filtrar por letras
    dramasFiltrados = dramasFiltrados.filter((drama) => {
      if(letras.length === 0) return true;
      return letras.includes(drama.title.charAt(0)) || letras.includes(drama.titleUs.charAt(0));
    })

    const to = counterPerPage * currentPage;
    const from =  to - counterPerPage;
    setCollection(dramasFiltrados.length > 0 && dramasFiltrados.slice(from,to));

    dispatch(setDramas(dramasFiltrados)); 
  }, [generos, años, letras, paises, dispatch,currentPage]);
  

  return (
    <div className={classes.container}>
      <div className={classes.content}>
         <Filter/>
         {
          dramasList && (
            <div className={classes.results}>
              Total de titulos encontrados : <span>{dramasList.length}</span>
            </div>
          )
         }
         <ListDramasCom dramas={collection ?  collection : []}/>
         {
          dramasList && (
            dramasList.length !== 0 ?(
              <Paginate
              total={dramasList && dramasList.length}
              current={currentPage}
              pageSize={counterPerPage}
              onChange={updatePage}
           />
            ) :(
              <div className={classes.notFound}>
                <img src={NotFound} alt="" />
              </div>
            )
          ) 
         }
      </div>
    </div>
  )
}

export default Dramas
