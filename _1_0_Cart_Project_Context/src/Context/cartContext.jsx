import { createContext, useState } from "react";

export const cartContext = createContext(null);

export const CartContextProvider = ({children}) => {

  const [items,setItems] = useState([]);

  return <cartContext.Provider value={{items,setItems}}>
    {children}
  </cartContext.Provider>
}

