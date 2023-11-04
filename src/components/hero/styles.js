import styled, {keyframes} from "styled-components";


export const HeroContainer = styled.div`
width: 100%;
background: var(--colorverdegris);
display: flex;
justify-content:center

`

const rotate = keyframes `
  form{
    transform: rotate(0deg);
  }
        to {
        transform: rotate(360deg);
      }
`

export const HeroItems = styled.div`
display: flex;
align-items: center;
justify-content:center;
max-width: var(--max_width);
padding: 50px 0;
margin: 0 40px;

img{
  width:40%;
  animation: ${rotate} infinite 60s linear;
  @media (max-width: 992px) {
    display:none
    
}
}

@media (max-width: 992px) {
  margin: 0 20px;
}

`


export const HeroText = styled.div`
display: flex;
flex-direction: column;
gap: 35px;
width: 55%; 
h1{
  background: linear-gradient(35deg, rgba(72,136,123,1) 25%, rgba(70,70,123,1) 50%, rgba(122,116,116,1) 75%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent; 
    font-family: "Lilita One";
    font-size: 3.8rem;
    max-width: 80%;  
    @media (max-width: 576px) {
      font-size: 2.8rem;
      
    }
    @media (max-width: 360px) {
      font-size: 2.8rem;
      max-width: 100%;  
    }
  
}

p{
    font-size: 1.2rem;
    max-width: 80%; 
    line-height: 0.8cm;
    @media (max-width: 576px) {
      font-size: 1rem;
      line-height: 0.6cm;
    }
}

@media (max-width: 992px) {
  width: 100%; 
  text-align:center;
  align-items:center;

}
`




