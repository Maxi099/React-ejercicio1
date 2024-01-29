import React from "react";
import { Message } from "./styles"
import { Boton } from "../boton/boton";
import {useSelector} from "react-redux"
import {useDispatch} from "react-redux"
import { setCartMessage } from "../../redux/cartmessage/cartmessage.js";
import { closeCart } from "../../redux/cart/cartSlice.js";
import { clearCart } from "../../redux/cart/cartSlice.js";
import { setModal} from "../../redux/modal/modal.js";
import { removeBotFromCart } from "../../redux/cart/cartSlice.js"; 

export const MessageContainer =(props)=>{
    const dispatch= useDispatch()
    const cartItems = useSelector(state=>state.cart1.cartItems)   
    const handleClickVaciar=()=>{
        dispatch(setCartMessage(0))
        dispatch(clearCart())
        dispatch(closeCart())
    }
    const handleClickComprar=()=>{
        dispatch(setCartMessage(0))
        dispatch(clearCart())
        dispatch(closeCart())
        dispatch(setModal(4))
        setTimeout(() => {
           dispatch(setModal(4))
         }, "2000")
    }

    const handleClickItem=()=>{

        dispatch(setCartMessage(0))
        dispatch(removeBotFromCart(props.numero-3 ))
        if (cartItems.length<=1)
        dispatch(closeCart())
    }




    if(props.numero===1)
{

    return(

        <Message>
       ¿Esta seguro que desea vaciar el carrito?
        <Boton onClick={handleClickVaciar}  nombre="Si"/>
        <Boton onClick={()=>dispatch(setCartMessage(0))} nombre="NO"/>        
        </Message>  
)
}

if(props.numero===2)
{

    return(

        <Message>
       ¿Esta seguro que desea realizar la compra?
        <Boton onClick={handleClickComprar}  nombre="Si"/>
        <Boton onClick={()=>dispatch(setCartMessage(0))}  nombre="NO"/>        
        </Message>  
)
}
  

if(props.numero>=3)
{

    const item = cartItems.findIndex((e)=> e.id === props.numero-3)
   
    return(

        <Message>
       ¿Esta seguro que desea eliminar este item?:
       <p>{cartItems[item].nombre}</p>
        <Boton onClick={handleClickItem}  nombre="Si"/>
        <Boton onClick={()=>dispatch(setCartMessage(0))}  nombre="NO"/>        
        </Message>  
)
}
  




}