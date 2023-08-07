import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleFavorite } from '../store/favoriteSlice';

const useFavorite = () => {
    const {favorites} = useSelector((state) => state.favorite);

    const dispatch = useDispatch();
    const handleAddFavorite = (drama) =>{
        dispatch(handleFavorite(drama));
    }
    const isFavorite = (movieId) => favorites.some((item) => item.id === movieId);
  return {
    handleAddFavorite,
    isFavorite
  }
}

export default useFavorite
