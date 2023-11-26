import styled from "styled-components";


export const NavbarContainer = styled.div`

display: flex;
  justify-content: center;
  align-items: center;  


ul{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  font-size:0.9rem;
  @media (max-width: 768px) {
     
    display:none;
    
   
     }

  
}
 
.activo{ 

  @media (max-width: 768px) {
    
    display:flex;
    position:absolute;
    flex-direction: column;
    justify-content: start;
    align-items: center; 
   top:0;       
    left: 0;
    background-color: var(--colorverde);
    width:50%;
    height:100vh;
    padding: 30px 0;
    z-index: 7;
    gap:30px;
    
 
 
  li 
  {
    display:flex;

     a{
      color:white;
      &:after{
        content:none;
       }
     }

    
     }

     
  

  }

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

    
    
    
    




`




export const NavbarMenuButton = styled.div`
position: relative;
        display:none;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;        
        gap: 5px;
        cursor:pointer;
        border-radius: 5px;
        padding: 6px;
        
       
        span{

          width: 22px;
height: 2px;
background: var(--colorverde);
transition: transform 0.3s;

        }
        .span1{
          position:absolute;
          transform: rotate(135deg);
          
        }
        .span2{

         display:none;
        }

        .span3{
position:absolute;
          transform: rotate(-135deg);
         
        }

     


        @media (max-width: 768px) {
          display:flex;
            }
`



