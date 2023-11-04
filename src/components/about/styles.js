import styled from "styled-components";


export const AboutContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
padding: 80px 0;
background-color: var(--colorverde);

`

export const AboutCards = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
gap:40px;
max-width: var(--max_width);
margin: 0px 20px;

`


export const AboutCard = styled.div`
display: flex;
    background-color: white;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    border-radius: 20px;
    text-align: center;
    gap:20px;
    padding: 30px;
    width: 300px;
    height: 280px;
    box-shadow: 5px 5px 10px  black;
    -moz-box-shadow: 5px 5px 10px  black;
    -webkit-box-shadow: 5px 5px 10px  black;
    @media (max-width: 360px) {
        width: 90%;
        height: unset;
      }

`

