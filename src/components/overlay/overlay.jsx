import React,{ useContext }  from "react";
import {OverlayContainer} from "./styles"
import {useDispatch, useSelector} from "react-redux"
import { cerrarMenu } from "../../redux/menu/menuSlice.js";
import { closeCart } from "../../redux/cart/cartSlice.js";
export const Overlay =()=>{
    const setMenu = useSelector (state=> state.menu)
    const dispatch = useDispatch()

    const handleClick=()=>{

       dispatch(closeCart())
       dispatch(cerrarMenu())
    }
return(
    
<OverlayContainer onClick = {handleClick}></OverlayContainer>   

)
    
}