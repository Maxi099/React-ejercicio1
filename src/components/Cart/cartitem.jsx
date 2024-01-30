import React from "react";

import { CartItemCant, CartItemCantidad, CartItemDer,CartItem, CartItemDesc, CartItemInfo, CartItemMas, CartItemMenos} from "./styles"
import {useDispatch} from "react-redux"
import { addToCart } from "../../redux/cart/cartSlice.js";
import { removeFromCart } from "../../redux/cart/cartSlice.js";
import { removeBotFromCart } from "../../redux/cart/cartSlice.js";
import {useSelector} from "react-redux"
import { closeCart } from "../../redux/cart/cartSlice.js";
import { MessageContainer } from "./Message.jsx";
import { setCartMessage } from "../../redux/cartmessage/cartmessage.js";


export const CartItemContainer =({id,nombre,precio, stock,img,cantidad})=>{
    const dispatch= useDispatch()
    const cartItems = useSelector(state=>state.cart1.cartItems)   

    const handleClick=()=>{
        
        if (cantidad>1)
        dispatch(removeFromCart(id))
        
    }
    const handleClick2=()=>{
        document.querySelector('#cart').scrollTo(0,0)  
        dispatch(setCartMessage(3+id))
       /* dispatch(removeBotFromCart(id ))
        if (cartItems.length<=1)
        dispatch(closeCart())*/


    }

    return(
       
        <CartItem>
       <CartItemInfo>        
        <img src={img} alt=""/>
             <CartItemDesc>
                <h4>{nombre}{id}{stock}</h4>                
                </CartItemDesc>
             </CartItemInfo> 
             
            <CartItemDer>
                
            
                 <CartItemCant>
                        <CartItemMas onClick= {()=>dispatch(addToCart(  {id} ))}  >+</CartItemMas>
                        <CartItemCantidad>{cantidad}</CartItemCantidad>
                        <CartItemMenos onClick= {handleClick} selected={cantidad>1}>-</CartItemMenos>
                        </CartItemCant>
             <span>${precio}</span>                                                                                                                                                                
            
             </CartItemDer>
<img  onClick= {handleClick2}   src="assets/img/delete.svg" alt="" /> 


</CartItem> 

    )

}