import {createSlice} from '@reduxjs/toolkit'
const INITIAL_STATE = {
    menu: false,
        }

export const menuSlice = createSlice({
    name: 'menuhamburg',
    initialState:INITIAL_STATE,
    reducers: {
        toggleMenu: state => {
            return !state;
        },
        cerrarMenu: state => {
            return (state) && !state;
        },
          }
})

export const { toggleMenu, cerrarMenu} = menuSlice.actions

export default menuSlice.reducer