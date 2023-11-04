
import React from "react";
import {AboutContainer, AboutCards, AboutCard} from "./styles"

export const About =()=>{
return(
    <AboutContainer id="about">
<AboutCards>
<AboutCard>
    <img src="assets/img/tarj.svg" alt=""/>
    <h3>Medios de Pago </h3>
    <p>Aceptamos todos los medios de pago. Efectivo, transferencia y todas las tarjetas de débito y crédito con cuotas sin interés.</p>

    
</AboutCard>
<AboutCard>
    <img src="assets/img/camion.svg" alt=""/>
    <h3>Envios a todo el pais</h3>
    <p>Enviamos a todo el país a través de Correo Argentino, OCA y Envío Cargo. Para  CABA y GBA, contamos con mensajería propia.</p>
    
    </AboutCard>
    <AboutCard>
    <img src="assets/img/escudo.svg" alt=""/>
    <h3>Compra protegida</h3>
    <p>Queremos que estés completamente satisfecho con cada compra que realices en nuestra tienda. Si no es así, te devolvemos el dinero.</p>
    
    </AboutCard>
</AboutCards>
</AboutContainer>
)
}









