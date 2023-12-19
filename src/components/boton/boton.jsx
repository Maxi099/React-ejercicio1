import React from "react";
import {BotonContainer} from "./styles"




export const Boton =({nombre, onClick})=>{


    return(

        <BotonContainer onClick={onClick}>{nombre}</BotonContainer>
    )
    
    
}