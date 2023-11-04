
import styled from "styled-components";


export const HeaderContainer = styled.div`
     width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    position:-webkit-sticky;
    background-color: white;
    top: 0;
    z-index: 5;
    box-shadow: 1px 2px 5px  black;
    -moz-box-shadow: 1px 2px 5px  black;
    -webkit-box-shadow: 1px 2px 5px  black;

`

export const HeaderItems = styled.div`
width:100%;
     max-width: var(--max_width);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 15px;
    

`


