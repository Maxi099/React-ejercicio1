import styled from "styled-components";


export const ContactoContainer = styled.div`

display:flex;
flex-direction:column;
align-items:center;
gap:80px;

padding:60px 0;
width:100%;

background: var(--colorverdegris);


h2{
    font-family:"Lilita One";
    font-size:2.5rem;
    color: var(--colorverde);
    margin: 0 15px;
    @media (max-width: 576px) {
        font-size: 2rem;
      }
 
     }

`


export const ContactoInput = styled.input`



padding: 12px 12px 12px 12px;
border-radius: 8px;
max-width: 250px;
width:100%;
background-color:white;
color: black;
outline: none;
border: none;



`
export const ContactoForm = styled.form`




display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
 gap:20px;
 background-color:var(--colorverde);
 padding: 30px; 
 border-radius: 20px;
 max-width:310px;
 width:90%;
 

`

export const ContactoBoton = styled.input`




border: 1px solid var(--colorverdegris);
cursor:pointer;
font-size:15px;
border-radius: 5px;
color: var(--colorverde);
padding: 10px 20px;


`

export const ContactoTextArea = styled.textarea`



padding: 12px 12px 12px 12px;
border-radius: 8px;
max-width: 250px;
width:100%;
background-color:white;
color: black;
outline: none;
border: none;



`