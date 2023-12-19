import React from 'react'
import './App.css'
import { ContainerRoutes } from "./routes/routes";
import { Provider } from 'react-redux';
import {persistor, store} from "./redux/store"
import { PersistGate } from 'redux-persist/integration/react';


function App() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>      
      <ContainerRoutes/>       
        </PersistGate>
        </Provider>

    )
  
}

export default App
