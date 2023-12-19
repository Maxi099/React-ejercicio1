import React from "react";

import {CartAbajo, CartBotons, CartContainer, CartLinea, CartSubtotal, CartTotal, ItemsCartContainer} from "./styles"
import { Boton } from "../boton/boton";
import { CartItemContainer } from "./cartitem";
import {useSelector} from "react-redux"
import { clearCart } from "../../redux/cart/cartSlice.js";
import {useDispatch} from "react-redux"
import { closeCart } from "../../redux/cart/cartSlice.js";
export const Cart =()=>{
    
 const cartItems = useSelector(state=>state.cart1.cartItems)   
 const dispatch= useDispatch()
 const setCart = useSelector (state=> state.cart1.hidden)
 let total = cartItems.reduce((acc, curr) => acc + curr.precio * curr.cantidad,0);


    return(

<CartContainer hidden={setCart} >

                    <img onClick={()=>dispatch(closeCart())} src="assets/img/cerrar.svg" alt=""/>
                    <h2>CARRITO DE COMPRAS</h2>
                    <ItemsCartContainer>                       
                              
                                {
                                    cartItems.length && cartItems.map((item)=> <CartItemContainer key={item.id}{...item}></CartItemContainer>)       
                                    

                                }     
                                
                                                   
                             
                                <CartLinea  ></CartLinea>   
                             
                    
                    </ItemsCartContainer>                
                             <CartAbajo>
                                     
                                     <CartSubtotal>
                                     <h4>Subtotal</h4>
                                     <h4>$ {total} </h4>                                                                     
                                     </CartSubtotal>
                                <CartTotal>
                                        <h3>Total</h3>
                                        <h3>$ {total} </h3>                              
                                        </CartTotal>
                                <CartBotons>
                                    <Boton onClick= {()=>dispatch(clearCart())}  nombre="Vaciar Carrito"/>
                                    <Boton nombre="Realizar Compra"/>                                     
                                    </CartBotons>
                                    </CartAbajo>                 
        
        
                             </CartContainer>


    )

}