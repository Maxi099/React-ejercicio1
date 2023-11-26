import React,{ useContext }  from "react";
import {OverlayContainer} from "./styles"
import {  MenuContext } from "../../context/menu";


export const Overlay =()=>{

    const menuValue= useContext(MenuContext)      
return(
    
<OverlayContainer onClick={menuValue.menuCerrar}></OverlayContainer>   

)
    
}