import React from "react";
import {  CategoryContainer, ProductosContainer, CategoryItem} from "./styles";
import { CardsContainer } from "../../components/products/styles";
import { Card } from "../../components/products/card.jsx";
import {useDispatch, useSelector} from "react-redux"
import { ItemCategory } from "./categories.jsx";



export  const Productos =()=>{
document.documentElement.scrollTop = 0;
const categories = useSelector(state=>state.categories.categories)
const productos = useSelector(state=>state.products.products)
const selectedCategory = useSelector (state=> state.categories.selectedCategory)


return (   
  
<ProductosContainer>
<h2>PRODUCTOS</h2>
<CategoryContainer>
    {
        categories.map((categoria) => <ItemCategory key ={categoria.id}{...categoria}/>)


    }
   

    
</CategoryContainer>
<CardsContainer>        
            {
                productos.map ((item) => 
                (selectedCategory == item.category ||selectedCategory == null)  &&
                    <Card  key={item.id} {...item} />
                    
                               

                )
            }                   
                
            </CardsContainer>
          

</ProductosContainer>    
)

}
