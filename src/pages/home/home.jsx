import React from "react";
import { Hero } from "../../components/hero/hero";
import { About } from "../../components/about/about";
import { Products } from "../../components/products/products";
import { Contact } from "../../components/contact/contact";


export  const Home =()=>{
document.documentElement.scrollTop = 0; 
return (
<>
<Hero/>
<About/>
<Products/>
<Contact/>
</>
)

}