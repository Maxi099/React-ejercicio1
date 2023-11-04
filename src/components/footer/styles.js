import styled from "styled-components";


export const FooterContainer = styled.div`
width: 100%;
background-color: var(--colorverde);
color: white;
display: flex;
flex-direction: column;
align-items: center;
gap:20px;
padding: 40px 0;
ul {
    @media (max-width: 576px) {
        text-align: center;
      
      }

li{
    display: inline;
    padding: 0 10px;
    @media (max-width: 576px) {
        display: block;
        padding: 5px 0;
      
      }
    &:nth-child(-n+2) {
        border-right: 1px solid white;
        @media (max-width: 576px) {
            border:none;
          
          }
    }
}
}

a{

    color: var(--blanco);
    font-family: arial;
}

@media (max-width: 576px) {
    padding: 20px 0;
  
  }


`

export const FooterCopyright = styled.div`
display: flex;
align-items:center;
gap: 10px;
`

