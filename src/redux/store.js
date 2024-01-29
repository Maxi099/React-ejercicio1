import {combineReducers, configureStore} from '@reduxjs/toolkit'
import persistReducer  from 'redux-persist/es/persistReducer'
import persistStore  from 'redux-persist/es/persistStore'
import storage from "redux-persist/lib/storage"


import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

import menuReducer from './menu/menuSlice'
import categoriesReducer from './categories/categoriesSlice'
import productsReducer from './products/productsSlice'
import cartReducer from './cart/cartSlice'
import modalReducer from './modal/modal'
import cartmessageReducer from './cartmessage/cartmessage'




const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['menu', 'cartmessage1'] 
}

const reducers = combineReducers({
      categories: categoriesReducer,
    cart1: cartReducer,
    modal: modalReducer,
    menu: menuReducer,
    cartmessage1: cartmessageReducer,  
   products: productsReducer
})

const persistedReducer = persistReducer(persistConfig, reducers)


export const store = configureStore({
    reducer: persistedReducer,
    
    
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),


})



export const persistor = persistStore(store)