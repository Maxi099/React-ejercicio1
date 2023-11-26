import React from "react";
import { ContactoContainer, ContactoInput,ContactoForm, ContactoBoton,ContactoTextArea } from "./styles";



export  const Contacto =()=>{
document.documentElement.scrollTop = 0;
return (   
  
<ContactoContainer>
<h2>CONTACTO</h2>
<ContactoForm action="" noValidate>
    <ContactoInput type="text" placeholder="Nombre" id="input--nombre"/>
    <ContactoInput type="text" placeholder="Apellido" id="input--nombre"/>
    <ContactoInput  type="email" placeholder="Email" id="input--mail"  />
    <ContactoTextArea name="" id="input--mensaje" cols="20" rows="8" placeholder="Mensaje (150 caracteres max.)"  maxLength="150"/>
    <ContactoBoton type="submit"value="Enviar" id="form--submit"  />
</ContactoForm>
</ContactoContainer>    
)

}


