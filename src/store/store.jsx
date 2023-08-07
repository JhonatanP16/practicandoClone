import { configureStore } from "@reduxjs/toolkit";
import themeReducer from './themeSlice';
import filterReducer from './fiterSlice';
import favoriteReducer from "./favoriteSlice";

export const store = configureStore({
    reducer:{
        theme: themeReducer,
        filter: filterReducer,
        favorite: favoriteReducer,
    },
})

