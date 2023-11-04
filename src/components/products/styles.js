import styled from "styled-components";


export const ProductsContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align:center;
padding: 80px 0;
gap: 60px;
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

export const CardsContainer = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
gap:50px;
max-width: var(--max_width);
margin: 0 20px;

`


export const CardContainer = styled.div`

    border: 1px solid gray;
    padding: 17px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
     gap: 12px;
    width:300px;
     box-shadow: 3px 4px 4px grey;
    -moz-box-shadow: 3px 4px 4px grey;
    -webkit-box-shadow:3px 4px 4px grey;
    @media (max-width: 360px) {
        width:90%;
      }

`

export const CardInfo = styled.div`

display: flex;
flex-direction: column;
gap: 15px;
justify-content:space-between;
height:138px;
align-items:center;
text-align:center;
 span{
    padding:10px 15px;
    background-color:black;
    border-radius:10px;
    h4{
        color:white;
    }
 }
 @media (max-width: 360px) {
    height:unset;
  }

`





