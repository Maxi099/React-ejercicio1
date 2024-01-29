import styled from "styled-components";

export const NosotrosContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
gap:50px;
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


export const Section = styled.div`
display:flex;
justify-content:center;
align-items:center;
gap:50px;
max-width: var(--max_width);
margin: 0 15px;

p{
    width:30%;
    text-align:center;
    color: black;
    @media (max-width: 992px){
        width:90%;
    }
    
}
img{
    width:45%;
    border-radius:15px;
    @media (max-width: 992px){
        display:none;
    }
}


`