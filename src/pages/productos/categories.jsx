import React from "react";
import { CategoryItem} from "./styles";
import {useDispatch, useSelector} from "react-redux"
import { selectCategory } from "../../redux/categories/categoriesSlice.js";

export  const ItemCategory =( {category} )=>{
const selectedCategory = useSelector (state=> state.categories.selectedCategory)
const dispatch = useDispatch()
return (   
  

        <CategoryItem 
        selected={category === selectedCategory} 
        onClick = {()=> dispatch(selectCategory(category))}>
            {category}
        </CategoryItem> 
)

}
