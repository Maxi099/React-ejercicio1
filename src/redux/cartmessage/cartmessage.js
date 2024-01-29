import {createSlice} from '@reduxjs/toolkit'
const INITIAL_STATE = {
    msj: 0,
    message:false
       
        }

export const cartmessageSlice = createSlice({
    name: 'cartmessage1',
    initialState:INITIAL_STATE,
    reducers: {
        setCartMessage: (state, action) => {
            return {
                ...state, 
                message : !state.message,
                msj : action.payload
            }
        }
     
     
      }
})

export const {setCartMessage} = cartmessageSlice.actions

export default cartmessageSlice.reducer