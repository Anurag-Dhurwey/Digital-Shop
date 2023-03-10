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
  useEffect(()=>{
    
     const getApi=async()=>{
     try {
      const api= await getProductApi()
      if(api.message){
        dispatch({type:"error"})
      }else{

        dispatch({type:"getAllProducts",payload:api.data})
      }
     } catch (error) {
      dispatch({type:"error"})
     }
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

