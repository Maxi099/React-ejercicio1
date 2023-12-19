import {createSlice} from '@reduxjs/toolkit'
const INITIAL_STATE = {
    menu: false,
        }

export const menuSlice = createSlice({
    name: 'menu',
    initialState:INITIAL_STATE,
    reducers: {
        toggleMenu: state => {
            return {
                ...state,
               menu: !state.menu
            }
           
        },
        cerrarMenu: state => {
            return {
                ...state,
                menu: (state.menu) && !state.menu

            }
        },
          }
})

export const { toggleMenu, cerrarMenu} = menuSlice.actions

export default menuSlice.reducer