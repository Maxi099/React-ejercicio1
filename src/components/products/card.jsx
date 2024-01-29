import React from "react";
import {CardContainer, CardInfo } from "./styles"
import { Boton } from "../boton/boton";
import {useDispatch, useSelector} from "react-redux"
import { addToCart } from "../../redux/cart/cartSlice.js";
import { setModal} from "../../redux/modal/modal.js";






export const Card=( {id, nombre,precio, stock,img} )=>{
const dispatch= useDispatch()
const Modal = useSelector (state=> state.modal)
const handleClick=()=>{
    dispatch(addToCart({id, nombre,precio,stock,img}))
    dispatch(setModal(1))
     setTimeout(() => {
        dispatch(setModal(1))
      }, "1000")
 
    
    
}

return(
   
        <CardContainer>                  
             <img src={img} alt=""/>
             <CardInfo>
             {stock > 0 ? <h4 style={{color:'green'}}>En stock</h4> : <h4 style={{color:'red'}}>Sin stock</h4>}
             <h4>{nombre}</h4>
             <span><h4>$ {precio}</h4></span>  
             </CardInfo>
             <Boton onClick= {handleClick} nombre={"Añadir al carrito"}></Boton>
        
          
    </CardContainer>

)
}