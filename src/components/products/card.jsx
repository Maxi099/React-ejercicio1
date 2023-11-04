import React from "react";
import {CardContainer, CardInfo } from "./styles"

export const Card=( {nombre,precio, stock,img} )=>{
    
return(
   
        <CardContainer>                  
             <img src={img} alt=""/>
             <CardInfo>
             {stock > 0 ? <h4 style={{color:'green'}}>En stock</h4> : <h4 style={{color:'red'}}>Sin stock</h4>}
             <h4>{nombre}</h4>
             <span><h4>$ {precio}</h4></span>  
             </CardInfo>
    </CardContainer>

)
}