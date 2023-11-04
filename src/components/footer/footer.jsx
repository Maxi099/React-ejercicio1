import React from "react";
import { FooterContainer,FooterCopyright } from "./styles";


export const Footer =()=>{
    
return(
    <FooterContainer>
        <ul>
            <li><a href="#">Ayuda</a></li>
            <li><a href="#">Terminos y condiciones</a></li>
            <li><a href="#">Politicas de Privacidad</a></li>

    </ul>
    <FooterCopyright>
        <span>Copyright © 2023</span>
        <img src="assets/img/LOGO_C.svg" alt=""/>
    </FooterCopyright>
    

    </FooterContainer>

)
}
