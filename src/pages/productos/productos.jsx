import React from "react";
import {  CategoryContainer, ProductosContainer} from "./styles";
import { CardsContainer } from "../../components/products/styles";
import {listaProductos} from "../../data/products.js"
import { Card } from "../../components/products/card.jsx";


export  const Productos =()=>{
document.documentElement.scrollTop = 0;
return (   
  
<ProductosContainer>
<h2>PRODUCTOS</h2>
<CategoryContainer><h3>CATEGORIAS</h3></CategoryContainer>
<CardsContainer>        
            {
                listaProductos.map ((item) => <Card  key={item.id}  {...item} />)
            }                   
                
            </CardsContainer>
          

</ProductosContainer>    
)

}
