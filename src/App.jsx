import React from 'react'
import './App.css'
import {  ContextMenu } from "./context/menu";
import { ContainerRoutes } from "./routes/routes";


function App() {
    return (
        <ContextMenu>
      <ContainerRoutes/>
        </ContextMenu>
       

    )
  
}

export default App
