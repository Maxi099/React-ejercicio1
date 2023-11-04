import React from "react";
import {ContactContainer, ContactInfo,ContactText,ContactSucursal ,ContactSucursalItem ,ContactMapa, ContactRedSocial} from "./styles"
import { FaFacebook,FaInstagramSquare, FaTwitterSquare,FaYoutube} from "react-icons/fa";


export const Contact =()=>{
    
return(
    <ContactContainer id="contacto">
      
<ContactInfo>

    <ContactText>
        <h2>Contactenos</h2>
        
        <ContactSucursal>
                <h3>Buenos Aires</h3>
                <ContactSucursalItem ><img src="assets/img/ubi.png" alt=""/><span>Direccion 1234 - Argentina</span></ContactSucursalItem >
                <ContactSucursalItem ><img src="assets/img/mail.png" alt=""/><span>mail@mail.com.ar</span></ContactSucursalItem >
                <ContactSucursalItem ><img src="assets/img/tel.png" alt=""/><span>11 1111-1111</span></ContactSucursalItem>                  
                                                                           
                
        </ContactSucursal>   

        <ContactRedSocial>
        <li><a href="https://www.facebook.com" target="_blank"><FaFacebook/></a></li>
                    <li><a href="https://www.instagram.com" target="_blank"><FaInstagramSquare/></a></li>
                    <li><a href="https://www.twitter.com" target="_blank"><FaTwitterSquare/></a></li>
                    <li><a href="https://www.youtube.com" target="_blank"><FaYoutube/></a></li>
        </ContactRedSocial>


</ContactText>
      <ContactMapa>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.1130572201077!2d-58.481271023445615!3d-34.55069275470129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb696ab5cb4ed%3A0x887c745720a0e9b6!2sParque%20Saavedra!5e0!3m2!1ses-419!2sar!4v1683392521864!5m2!1ses-419!2sar"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </ContactMapa>
</ContactInfo>

</ContactContainer>
)
}