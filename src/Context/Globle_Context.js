import { useState, createContext, useContext, useEffect, useReducer } from "react";
import { getProductApi } from "./Mini_fuctions/GetProductApi";
import {getReducer} from "../Reducer/getReducer"
const Context = createContext()

export const GlobleContext=({children})=> {
  const [enabled, setEnabled] = useState(true)
  const initialState={
    products:[],
    aProduct:[],
    featuredProducts:[],
    isLoading:false,
    isError:false
  }
  const [state,dispatch]=useReducer(getReducer,initialState)
//  console.log(state)
  useEffect(()=>{
    
     const getApi=async()=>{
      const api= await getProductApi()
      dispatch({type:"getAllProducts",payload:api.data})
    }
    getApi()
  },[])


  return (
    <Context.Provider value={{enabled,setEnabled,state}}>
      {children}
    </Context.Provider>
  );
}

export const useGlobleContext=()=>{
  return useContext(Context)
}

