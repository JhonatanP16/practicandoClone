import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    dark:  false,
    menuOpen: false,
    searchOpen: false,
}

export const themeSlice = createSlice({
    name:'theme',
    initialState,
    reducers:{
        changeTheme: (state) => {
            state.dark = !state.dark;
        },
        menuOpened:(state) =>{
            state.menuOpen = true;
        },
        menuClosed:(state) =>{
            state.menuOpen = false;
        },
        searchOpened:(state) =>{
            state.searchOpen = true;
        },
        searchClosed:(state) =>{
            state.searchOpen = false;
        },
    }
})

export const {changeTheme,menuOpened,menuClosed,searchOpened,searchClosed} = themeSlice.actions;


export default themeSlice.reducer;