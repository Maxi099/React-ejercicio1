import styled from "styled-components";





export const ProductosContainer = styled.div`
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

export const CategoryContainer = styled.div`
display:flex;
align-items:center;
flex-wrap: wrap;
gap:20px;
justify-content:center;
padding:30px 0;
width:90%;
max-width:1000px;


}


`

export const CategoryItem = styled.div`
display:flex;
align-items:center;
justify-content:center;
padding:10px;
width: 220px;
cursor:pointer;
background:  ${({ selected }) =>
selected ? 'white;' : 'var(--colorverde);'};
color:  ${({ selected }) =>
selected ? 'var(--colorverde)' : 'white'};

backgrobox-shadow: 1px 2px 15px   gray;
-moz-box-shadow: 1px 2px 15px  gray;
-webkit-box-shadow: 1px 2px 15px  gray;und: white;
border-radius:10px;

&:hover{
    transform:scale(1.05)

}



}


`

