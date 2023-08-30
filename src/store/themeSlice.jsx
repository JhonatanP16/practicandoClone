import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    dark:  false,
    menuOpen: false,
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
        }
    }
})

export const {changeTheme,menuOpened,menuClosed} = themeSlice.actions;


export default themeSlice.reducer;