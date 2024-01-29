import styled from "styled-components";

export const Modal = styled.div`
display: block;
    position: absolute;
    width: 100%;
    
    

background: ${props => (props.$numero!=2) ? '#99cc99' : '#F88379'};

    color: black;
    text-align: center;
    padding: 8px 0;
    top: 82px;

`