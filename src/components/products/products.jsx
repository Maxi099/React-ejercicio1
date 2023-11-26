import React from "react";
import {listaProductos} from "../../data/products.js"
import {ProductsContainer, CardsContainer } from "./styles"
import {Card} from "./card"

export const Products =()=>{
    
return(
    <ProductsContainer>
        <h2>PRODUCTOS DESTACADOS</h2>
        <CardsContainer>        
            {
                listaProductos.map ((item) => <Card key={item.id}  {...item} />)
            }                   
                
            </CardsContainer>
</ProductsContainer>
)
}
