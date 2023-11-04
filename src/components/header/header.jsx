import React from "react";
import {HeaderContainer, HeaderItems} from "./styles"
import {Navbar} from  '../header/navbar/navbar'

export const Header =()=>{
return(
<HeaderContainer>
    <HeaderItems>
    <img src="/assets/img/logo.svg" alt=""/>
    <Navbar/>
    </HeaderItems>
</HeaderContainer>

   
)
    
}










