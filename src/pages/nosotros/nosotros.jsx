import React from "react";
import { NosotrosContainer, Section } from "./styles";

export  const Nosotros =()=>{
document.documentElement.scrollTop = 0;
return (    
<NosotrosContainer>
<h2>SOBRE NOSOTROS</h2>
<Section>
<p>¡Bienvenidos a nuestra tienda de instrumentos musicales!
Somos una empresa con años de experiencia en la venta de todo tipo de instrumentos y accesorios musicales. Nos enorgullece poder ofrecer a nuestros clientes una amplia gama de productos de alta calidad que satisfacen las necesidades de músicos de todos los niveles.</p>
<img src="assets/img/nosotros1.jpg" alt="" />
</Section>
<Section>
<img  src="assets/img/nosotros2.gif" alt="" />
    <p>Lo que nos distingue de otras tiendas es nuestro conocimiento y pasión por la música. Ofrecemos un servicio personalizado y asesoramiento experto para que nuestros clientes encuentren el instrumento que mejor se adapte a sus necesidades.

Nos preocupamos profundamente por la satisfacción del cliente. Además, ofrecemos servicios de reparación y mantenimiento de instrumentos, garantizando que nuestros clientes puedan disfrutar de su música sin preocupaciones.

En resumen, en nuestra tienda encontrará no solo una amplia variedad de instrumentos y accesorios, sino también un equipo de expertos en música que se esfuerzan por garantizar la satisfacción de nuestros clientes. ¡Esperamos poder ayudarte a encontrar el instrumento perfecto para ti!</p>
</Section>
</NosotrosContainer>
)

}