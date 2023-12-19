export const addItemToCart = (cartItems, product)=>
{
    
   
const productInCart = cartItems.find((item) => item.id === product.id )

                if (productInCart)
                {
                   
                   
                        return cartItems.map((item)=>

                            item.id === productInCart.id ? {...item, cantidad: item.cantidad + 1} : item 

                        )                       

                                                         
                  
                    
                    
                }                
                 else
                 {
                    return [...cartItems, {...product,cantidad:1}  ]
                   
                 }

}

export const removeItemFromCart = (cartItems, id)=>
{
   

    const productInCart = cartItems.find((item) => item.id === id )
                       
                    
       if (productInCart.cantidad > 1)
      
        return cartItems.map((item)=>item.id === productInCart.id ? {...item, cantidad: item.cantidad - 1} : item)   
             
    
    return  cartItems.filter(item => item.id !== id)  

    
                     

}



export const removeBotCart = (cartItems, id)=>
{
                
   
             
    
    return cartItems.filter(item => item.id !== id)              
                    
           

}


