import React from "react";
import { ContactoContainer, ContactoInput,ContactoForm, ContactoBoton,ContactoTextArea, Error } from "./styles";
import{ErrorMessage, Field,  Formik} from "formik"
import * as Yup from 'yup'
import {useDispatch, useSelector} from "react-redux"
import { setModal} from "../../redux/modal/modal.js";


export  const Contacto =()=>{
document.documentElement.scrollTop = 0;
const initialValues = {
    name:"",
    surname:"",
    email:"",
    text:""
}

const validateSchema = Yup.object({
    name: Yup.string().matches(/^[a-zA-Z ]{2,254}$/, "Formato Invalido (solo letras)").required("El nombre es requerido"),
    surname: Yup.string().matches(/^[a-zA-Z ]{2,254}$/, "Formato Invalido (solo letras)").required("El apellido es requerido"),
    email: Yup.string().email("Formato de email invalido").required("El email es requerido"),
    text: Yup.string().required("Texto requerido")
}

)
const dispatch= useDispatch()
const Modal = useSelector (state=> state.modal)



return (  
    
 <ContactoContainer>
<h2>CONTACTO</h2>
<Formik
initialValues={initialValues}
validationSchema={validateSchema}
onSubmit={(values, {resetForm})=>{
    console.log(values)
    resetForm()
    dispatch(setModal(3))
    setTimeout(() => {
       dispatch(setModal(3))
     }, "2000")

    
}}
>

{(formikProps) => (
<ContactoForm  noValidate onSubmit={formikProps.handleSubmit}  >
    <Field as={ContactoInput} name="name"  placeholder="Nombre"/>
   <ErrorMessage name="name" component={Error} />  
    <Field as={ContactoInput} name="surname"  placeholder="Apellido"/>
    <ErrorMessage name="surname" component={Error}/>  
    <Field as={ContactoInput} name="email"  placeholder="Email"/>
    <ErrorMessage name="email" component={Error}/>
    <Field as={ContactoTextArea} name="text"  placeholder="Mensaje (150 caracteres max.)" rows="8" maxLength="150" />
    <ErrorMessage name="text" component={Error}/>
    <ContactoBoton type="submit"value="Enviar" />
</ContactoForm>
)}
</Formik>
</ContactoContainer>    

)


}


