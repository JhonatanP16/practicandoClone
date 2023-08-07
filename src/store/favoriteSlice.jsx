import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

const initialState = {
    favorites: [],
}

export const favoriteSlice = createSlice({
    name:'favorite',
    initialState,
    reducers:{
        handleFavorite:(state,action) => {
           const {id,title} = action.payload;
           const alreadyFavorite = state.favorites.find((item) => item.id === id);
           if(alreadyFavorite){
            const updatedFavorites = state.favorites.filter((item) => item.id !== id);
            state.favorites = updatedFavorites;
            toast.success(`${title} - quitado de favoritos`,{
                icon: "👀",
                progressStyle:{background:'var(--cor-gradient)'},
                style:{background:'var(--cor-bg)',color:'var(--title-kdrama)',fontSize:'15px'}
            })
           }else{
            state.favorites.push(action.payload);
            toast.success(`${title} - añadido a favoritos`,{
                icon: "🚀",
                progressStyle:{background:'var(--cor-gradient)'},
                style:{background:'var(--cor-bg)',color:'var(--title-kdrama)',fontSize:'15px'}
            })
           }
        },
    }
});
export const {handleFavorite} = favoriteSlice.actions;

export default favoriteSlice.reducer;
