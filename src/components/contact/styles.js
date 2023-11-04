import styled from "styled-components";


export const ContactContainer = styled.div`
width: 100%;
background-color: var(--colorverdegris);
display: flex;
justify-content: center;
align-items: center;   

`


export const ContactInfo = styled.div`
display: flex;        
        justify-content: space-between;
        align-items:center ;
        width: 100%;
        max-width: var(--max_width);
        padding: 80px 0;
        margin: 0 30px;
        @media (max-width: 768px) {
            display: flex;   
            flex-direction: column;     
            justify-content: center;
            align-items:center ;
            gap: 20px;
          }

 

`

export const ContactText = styled.div`
display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 50px;
        h2{
            font-family:"Lilita One";
            font-size:2.5rem;
        }
        @media (max-width: 768px) {
            align-items: center;
            gap: 40px;
          }
 

`

export const ContactSucursal = styled.div`
display: flex;
            flex-direction: column;
            gap: 20px;
            h3{
                font-size: 25px;
            }
            @media (max-width: 768px) {
                align-items: center;
                
              }

`

export const ContactSucursalItem = styled.div`
display: flex;
align-items: center;
gap: 15px;

`

export const ContactMapa = styled.div`
border: 5px solid var(--colorverde);
            border-radius: 20px;
            height: 400px;
            width: 500px;

            iframe{
                border-radius: 15px;
                width:100%;
                height:100%;
                border:0;

            }

            @media (max-width: 992px) {
                width: 400px;
                  }
                  @media (max-width: 576px) {
                    width: 90%;
                      }


`

export const ContactRedSocial = styled.ul`
font-size: 25px;
        display: flex;
        gap: 20px;
        a{
            color: black;
        }

`




