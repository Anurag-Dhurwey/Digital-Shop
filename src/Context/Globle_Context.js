import { useState, createContext, useContext } from "react";

const Context = createContext()

export const GlobleContext=({children})=> {
  const [enabled, setEnabled] = useState(true)

  return (
    <Context.Provider value={{enabled,setEnabled}}>
      {children}
    </Context.Provider>
  );
}

export const useGlobleContext=()=>{
  return useContext(Context)
}

