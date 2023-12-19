import {createSlice} from '@reduxjs/toolkit'
const INITIAL_STATE = {
    msj: 1,
    modal:false
       
        }

export const modalSlice = createSlice({
    name: 'modal',
    initialState:INITIAL_STATE,
    reducers: {
        setModal: (state, action) => {
            return {
                ...state, 
                modal : !state.modal,
                msj : action.payload
            }
        }
     
     
      }
})

export const {setModal} = modalSlice.actions

export default modalSlice.reducer