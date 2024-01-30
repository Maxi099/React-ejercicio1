import styled from "styled-components";



export const CartContainer = styled.div`
position:absolute;
    top:0;
    right: 0;
    padding: 25px;
    padding-top: 85px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap:35px;
    align-items: center;
    z-index: 25;
    /*width: 35%;*/
    background-color: var(--colorverdegris);
     overflow-y: auto;     
    transition: transform 0.5s ease;   
      transform:  ${({ hidden }) =>
      hidden ? 'translate(300%);' : 'translate(0)'};    

      @media (max-width: 576px) {
        padding-left: 10px;
        padding-right: 10px;
      width: 100%;   
        
      }    

    >img{
position: absolute;
top: 20px;
left:30px;
cursor: pointer;



    }

    h2{
        font-family:"Lilita One";
        font-size:2rem;
        color: var(--colorverde);
        @media (max-width: 576px) {
        font-size: 1.6rem;
          }

         
      
`





export const ItemsCartContainer = styled.div`
display: flex;
flex-direction: column;
gap:10px;

}

`



export const CartBotons = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap:20px;
margin-top:20px;

`



export const CartAbajo = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap:10px;
width: 90%;

`



    export const CartLinea = styled.div`
    width: 100%;
    border: 1px solid var(--colorverde);

`


export const CartSubtotal = styled.div`
width: 60%;
display: flex;
align-items: center;
justify-content: space-between;

`

export const CartTotal = styled.div`
width: 60%;
font-size: 1.2rem;
font-weight: bold;
display: flex;
align-items: center;
justify-content: space-between;
`






export const CartItem = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 35px;
padding: 10px 15px;
>img {
    cursor: pointer;
    width:25px;

`

export const CartItemInfo = styled.div`

display: flex;
    align-items: center;
    gap: 15px;
    width: 40%;
    @media (max-width: 576px) {
        flex-direction: column;
    gap: 8px;
    text-align: center;

    
  }    


   

    >img{
        width: 60px;
        border-radius:10px;

        @media (max-width: 576px) {
            width: 50px;
        
      }    
    }

    
`

export const CartItemDesc = styled.div`

display: flex;
font-size: 0.9rem;

`
export const CartItemDer = styled.div`

display: flex;
align-items: center;
position:relative;
gap: 35px;
@media (max-width: 576px) {
    flex-direction: column;
    align-items: center;    
gap: 8px;    

    }


`


export const CartItemCant = styled.div`

display: flex;





`

export const CartItemMas = styled.div`

padding: 3px 6px;
background-color: var(--colorverde);
border-top-left-radius: 5px;
border-bottom-left-radius: 5px;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
font-weight: bold;



`

export const CartItemMenos = styled.div`

padding: 3px 6px;
background-color: var(--colorverde);
opacity:   ${({ selected }) =>
selected ? '1' : '0.4'};
border-top-right-radius: 5px;
border-bottom-right-radius: 5px;
cursor:  ${({ selected }) =>
selected ? 'pointer' : 'default'};
display: flex;
align-items: center;
justify-content: center;
font-weight: bold;
`

export const CartItemCantidad = styled.div`

padding: 3px 10px;
    display: flex;
    align-items: center;
    justify-content: center;



`


export const Message = styled.div`

    position:absolute;
    top:0;
    bottom:0;
    width:100%;
    height:100vh;
    background-color: white;
    opacity:0.9;
    z-index:100;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    gap:20px;
    text-align:center;
    padding:0 10px;
    @media (max-width: 768px) {
        height:100dvh;
      }

p{
    font-weight:bold;
}


`










