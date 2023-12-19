import {createSlice} from '@reduxjs/toolkit'
import {addItemToCart, removeItemFromCart, removeBotCart} from "./cart-utils"
const INITIAL_STATE = {
    cartItems: [],
    hidden:true,
    }

export const cartSlice = createSlice({
    name: 'cart1',
    initialState:INITIAL_STATE,
    reducers: {
        addToCart: (state, action) => {
           return{
            ...state,
            cartItems: addItemToCart(state.cartItems, action.payload)
           }
        },
        removeFromCart: (state, action) => {
            return{
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
               }
        },
        removeBotFromCart: (state, action) => {
            return{
                ...state,
                cartItems: removeBotCart(state.cartItems, action.payload)
               }
        },

        clearCart: state=> {
           return{
            ...state,
            cartItems: [],
            hidden:true

           }
        },
        toggleCart: state=> {
           return{
            ...state,
            hidden:!state.hidden
           }
        },
        closeCart: state=> {
            return{
                ...state,
                hidden:true
            }
         },
 

      
          }
})

export const { addToCart, clearCart,removeFromCart,toggleCart,removeBotFromCart, closeCart} = cartSlice.actions

export default cartSlice.reducer