import React from "react";
import { HeroContainer, HeroItems, HeroText} from "./styles";

export const Hero =()=>{
return(
    <HeroContainer>
        <HeroItems>        
            <HeroText>
                <h1>Bienvenido a Tienda Musica</h1>
                <p>Somos una casa de música líder en instrumentos musicales y equipamiento de audio profesional. Disponemos de una amplia variedad de productos en nuestro catálogo, desde instrumentos de orquesta y estudio, hasta guitarras, baterías, pianos digitales, saxofones y ukeleles, además de equipos de grabación y microfonía líderes en el mercado.</p>
             </HeroText>
            <img src="assets/img/portada2.png"/>
        </HeroItems>
    </HeroContainer>
)
    
}