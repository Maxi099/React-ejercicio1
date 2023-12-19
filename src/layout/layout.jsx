import React from "react";
import { LayoutContainer,ContentContainer} from "./styles";
import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";


export  const Layout =({children})=>{
return (
<LayoutContainer>
<Header/>
<ContentContainer>
{children}
    </ContentContainer>   
<Footer/> 

</LayoutContainer>
)

}