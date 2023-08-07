import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    filters:{
        generos:[],
        años:[],
        letras:[],
        paises:[],
    },
    dramas: null,
}

export const filterSlice = createSlice({
    name:'filter',
    initialState,
    reducers:{
        setGenerosFilter:(state,action) =>{
            state.filters.generos = action.payload;
        },
        setAñosFilter:(state,action) => {
            state.filters.años = action.payload;
        },
        setLetrasFilter:(state,action) => {
            state.filters.letras = action.payload;
        },
        setPaisesFilter:(state,action) => {
            state.filters.paises = action.payload;
        },
        setDramas: (state, action) => {
            state.dramas = action.payload;
        },
        deleteGeneroValue:(state,action) =>{
            const filtered = state.filters.generos.filter((item) => item !== action.payload);
            state.filters.generos = filtered;
        },
        deleteAñoValue:(state,action) => {
            state.filters.años = state.filters.años.filter((item) => item !== action.payload);
        }
    }
});



export const {
    setAñosFilter,
    setGenerosFilter,
    setLetrasFilter,
    setPaisesFilter,
    setDramas,
    deleteGeneroValue,
    deleteAñoValue
    } = filterSlice.actions;

export default filterSlice.reducer;