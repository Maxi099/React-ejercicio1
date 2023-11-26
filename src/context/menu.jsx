import React, {createContext, useState} from "react";

export const MenuContext = createContext ();

export const ContextMenu = ({children})=>{

    const [menu, setMenu] = useState(false)

    const menuSwitch = ()=>{

        if (menu ===false)
        setMenu (true)
        if (menu ===true)
        setMenu (false)
    }

    const menuCerrar = ()=>{

        if (menu ===true)
        setMenu (false)
    }

    return(

        <MenuContext.Provider value={{menu, menuSwitch, menuCerrar}}>
            {children}
        </MenuContext.Provider>
    )

}
