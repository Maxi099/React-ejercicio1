import {createSlice} from '@reduxjs/toolkit'
import {listaProductos} from "../../data/products.js"
const INITIAL_STATE = {
    products: listaProductos,
    }

export const productsSlice = createSlice({
    name: 'products',
    initialState:INITIAL_STATE,
    reducers: {
        getProducts: state => {
            return state;
        },
          }
})

export const {getProducts} = productsSlice.actions

export default productsSlice.reducer