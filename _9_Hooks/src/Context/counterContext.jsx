import { useState } from "react";
import { Children, createContext } from "react";

export const counterContext = createContext(null);

export const CounterProvider = ({children})=>{
  const [Counter,setCounter] = useState(0);
  return <counterContext.Provider value={{Counter,setCounter,"name" : "Vraj Test"}}>
    {children}
  </counterContext.Provider>
}