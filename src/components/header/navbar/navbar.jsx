import React, { useContext } from "react";
import {NavbarContainer,NavbarMenuButton} from "./styles"
import {  MenuContext } from "../../../context/menu";
import { Overlay } from "../../overlay/overlay";
import  {Link } from 'react-router-dom';

export const Navbar =()=>{
  
const menuValue= useContext(MenuContext)

if (menuValue.menu)
document.body.style.overflow ="hidden";
else
document.body.style.overflow ="auto";

return(
    
<NavbarContainer>
     <ul className={`${menuValue.menu ? "activo": ""}`}>
        <li><Link to="/" onClick={()=>menuValue.menuCerrar()}>INICIO</Link></li>
        <li><Link to="nosotros" onClick={()=>menuValue.menuCerrar()} >NOSOTROS</Link></li>
        <li><Link to="productos" onClick={()=>menuValue.menuCerrar()} >PRODUCTOS</Link></li>
        <li><Link  to="contacto" onClick={()=>menuValue.menuCerrar()}>CONTACTO</Link></li>
    </ul>   
  <NavbarMenuButton onClick={()=>menuValue.menuSwitch()}>
    <span className={`${menuValue.menu ? "span1": ""}`}></span><span className={`${menuValue.menu ? "span2": ""}`}></span><span className={`${menuValue.menu ? "span3": ""}`} ></span>
    </NavbarMenuButton>   
     {menuValue.menu && <Overlay/>}  
</NavbarContainer>   

)
    
}


