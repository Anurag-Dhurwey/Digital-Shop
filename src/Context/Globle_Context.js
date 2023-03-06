import React, {createContext, useContext } from 'react'
const Context=createContext()

const GlobleContext = ({Children}) => {
  return (
    <Context.Provider value={"hello"} >
      {Children}
    </Context.Provider>
  )
}

export default GlobleContext


export const useGlobleContext=()=>{
    return useContext(Context)
}