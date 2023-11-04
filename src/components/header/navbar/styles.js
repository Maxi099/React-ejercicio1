import styled from "styled-components";


export const NavbarContainer = styled.div`
ul{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    font-size:0.9rem;
    

    }
    
   li{
        a{
      color: var(--colorverde); 
        position:relative;
        &:after{            
        content: '';
        width: 100%;  
        position: absolute;
        height: 2px;
        bottom: -2px;
        left: 0;
        background-color: var(--colorverdegris); 
        transition: width 0.5s ease-out;
        }
        &:hover::after{            
           
            width: 0;  
        
            }

    }


@media (max-width: 768px) {
  display:none;
    }

`
