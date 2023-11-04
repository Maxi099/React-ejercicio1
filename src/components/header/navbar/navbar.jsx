import React from "react";
import {NavbarContainer} from "./styles"

export const Navbar =()=>{
return(
<NavbarContainer>
    <ul>
        <li><a href="#inicio">INICIO</a></li>
        <li><a href="#about">NOSOTROS</a></li>
        <li><a href="#productos">PRODUCTOS</a></li>
        <li><a href="#contacto">CONTACTO</a></li>
    </ul>    
</NavbarContainer>   
)
    
}