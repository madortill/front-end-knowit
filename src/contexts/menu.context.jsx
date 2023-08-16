import { createContext, useState } from "react";

export const MenuContext = createContext({
    currentMenu: false,
    setCurrMenu: () => "",
});
export const MenuProvider = ({children}) => {
    const [currentMenu, setCurrMenu] = useState(false);
    const value = {currentMenu, setCurrMenu};
    return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
} 

export default MenuContext;