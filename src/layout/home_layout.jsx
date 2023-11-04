import React from "react";
import { Hero } from "../components/hero/hero";
import { LayoutContainer } from "./styles";
import { About } from "../components/about/about";
import { Products } from "../components/products/products";
import { Contact } from "../components/contact/contact";


export  const HomeLayout =()=>{
return (
<LayoutContainer id="inicio">
<Hero/>
<About/>
<Products/>
<Contact/>
</LayoutContainer>
)

}