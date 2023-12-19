import React from "react";
import {NavbarContainer,NavbarMenuButton,CartMenuButton,LoginMenuButton, Burbuja} from "./styles"
import { Overlay } from "../../overlay/overlay";
import  {Link } from 'react-router-dom';
import { FaUser,FaShoppingCart } from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux"
import { toggleMenu, cerrarMenu } from "../../../redux/menu/menuSlice.js";
import { toggleCart } from "../../../redux/cart/cartSlice.js";
import { setModal} from "../../../redux/modal/modal.js";
import { selectCategory } from "../../../redux/categories/categoriesSlice.js";


export const Navbar =()=>{
  
const setMenu = useSelector (state=> state.menu.menu)
const setCart = useSelector (state=> state.cart1.hidden)
const cartItems = useSelector (state=> state.cart1.cartItems)
const dispatch = useDispatch()
if (setMenu || !setCart)
document.body.style.overflow ="hidden";
else
document.body.style.overflow ="auto";
let total = cartItems.reduce((acc, curr) => acc + curr.cantidad,0);


const handleClickCart = () =>{

if (cartItems.length)
{
  dispatch(toggleCart())
  dispatch(cerrarMenu())
}
else
{
  dispatch(setModal(2))
       setTimeout(() => {
        dispatch(setModal(2))
      }, "1000")
}
  

  }

  const handleClickProducts = () =>{
    dispatch(cerrarMenu())
    dispatch(selectCategory(null))
  }
  




return(
    
<NavbarContainer>

     <ul className={`${setMenu ? "activo": ""}`}>
        <li><Link to="/" onClick = {()=> dispatch(cerrarMenu())}>INICIO</Link></li>
        <li><Link to="nosotros" onClick = {()=> dispatch(cerrarMenu())} >NOSOTROS</Link></li>
        <li><Link to="productos" onClick = {handleClickProducts} >PRODUCTOS</Link></li>
        <li><Link  to="contacto" onClick = {()=> dispatch(cerrarMenu())}>CONTACTO</Link></li>
    </ul>  
    <LoginMenuButton><FaUser/></LoginMenuButton>
    <CartMenuButton onClick={handleClickCart}>
      {(cartItems.length) ? <Burbuja>{total}</Burbuja> : ""}
      <FaShoppingCart/>
      </CartMenuButton>
   
  <NavbarMenuButton onClick = {()=> dispatch(toggleMenu())}>
    <span className={`${setMenu ? "span1": ""}`}></span><span className={`${setMenu ? "span2": ""}`}></span><span className={`${setMenu ? "span3": ""}`} ></span>
    </NavbarMenuButton>   
     {setMenu && <Overlay/>}
     {!setCart && <Overlay/>}  
    
</NavbarContainer>   

)
    
}


