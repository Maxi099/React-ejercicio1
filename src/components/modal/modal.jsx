import React from "react";
import { Modal } from "./modal";


export const ModalContainer = ( { numero,children}  )=>{


return(
   <Modal $numero={numero}>
{children}

   </Modal>   
     
)
}