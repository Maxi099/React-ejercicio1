import React from "react";
import {listaProductos} from "../../data/products.js"
import {ProductsContainer, CardsContainer } from "./styles"
import {Card} from "./card"
import { Boton } from "../boton/boton.jsx";
import  {Link } from 'react-router-dom';
import {useDispatch} from "react-redux"
import { selectCategory } from "../../redux/categories/categoriesSlice.js";

export const Products =()=>{
    let n1 = Math.floor(Math.random() * listaProductos.length)
    let n2=0
    let n3=0
    do{ n2 = Math.floor(Math.random() * listaProductos.length)  
    }while (n2===n1)
    do{ 
        n3 = Math.floor(Math.random() * listaProductos.length) 
    }while (n3===n1 || n3===n2)
    const dispatch = useDispatch()
 
    
return(
    <ProductsContainer>
        <h2>PRODUCTOS DESTACADOS</h2>
        <CardsContainer> 
            {
                <>
                <Card key={listaProductos[n1].id}   {...listaProductos[n1]}/> 
                <Card key={listaProductos[n2].id}   {...listaProductos[n2]}/> 
                <Card key={listaProductos[n3].id}   {...listaProductos[n3]}/> 
                </>
            }        
                   
                
            </CardsContainer>
            <Link to="productos" onClick={()=>dispatch(selectCategory(null))}> <Boton nombre={"Ver más productos"}></Boton></Link>
           
</ProductsContainer>
)
}
