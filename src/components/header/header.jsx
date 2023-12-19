import React from "react";
import {HeaderContainer, HeaderItems} from "./styles"
import {Navbar} from  '../header/navbar/navbar'
import { Cart } from "../Cart/cart";
import { ModalContainer } from "../modal/modal.jsx";
import { useSelector} from "react-redux"


export const Header =()=>{
   
 const Modal = useSelector (state=> state.modal)
 let msj="";
  if (Modal.msj===1)
msj="El item se agrego al carrito"
if (Modal.msj===2)
msj="El carrito esta vacio"

return(
<HeaderContainer>
    <Cart></Cart>
    <HeaderItems>
    <img src="/assets/img/logo.svg" alt=""/>
    <Navbar/>
    </HeaderItems>
    {
 Modal.modal && <ModalContainer>{msj} </ModalContainer>
    }
  
</HeaderContainer>

   
)
    
}










