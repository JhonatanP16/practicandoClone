import React from 'react'
import classes from './FavoritePage.module.css'
import ListDramasCom from '../../components/DramasCom/ListDramasCom'
import { useSelector } from 'react-redux'
import Paginate from '../../components/Common/Paginate'
import NotFoundImg from '../../assets/404re.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const FavoritesPage = () => {
    const {favorites} = useSelector((state) => state.favorite);
    const counterPerPage = 6;
    const [currentPage,setCurrentPage] = useState(1);
    const [collection,setCollection] = useState(favorites.length > 0 ? favorites.slice(0,counterPerPage) : []);
    
    const updatePage = (page) => {
        setCurrentPage(page);
        const to = counterPerPage * page;
        const from = to - counterPerPage;
        setCollection(favorites.slice(from,to));
    }
  return (
    <div className={classes.container}>
      <div className={classes.content}>
       <h2>Mis doramas Favoritos</h2>
        {
            favorites && (
            <div className={classes.results}>
                Total de titulos encontrados : <span>{favorites.length > 0 ? favorites.length : <Link to={'/dramas'}>Agregue algunos dramas a esta sección</Link>}</span>
            </div>
            )
        }
        <ListDramasCom dramas={ collection && collection}/>
        {
            favorites && (
                favorites.length > 0 ? (
                    <Paginate
                    total={favorites && favorites.length}
                    current={currentPage}
                    pageSize={counterPerPage}
                    onChange={updatePage}
                 />
                ): (
                    <div className={classes.notFound}>
                        <img src={NotFoundImg} alt="" />
                    </div>
                )
            )
        }
      </div>
    </div>
  )
}

export default FavoritesPage
