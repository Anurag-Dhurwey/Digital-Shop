import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../Reducer/cartReducer";
const Context=createContext();



export const CartContext=({children})=>{
    const initialCart={
        cartItems:[],
        totalQty:0,
        totalPrice:0

    }

   
    const [cart,setCart]=useReducer(cartReducer,initialCart)
    console.log(cart)
    const addToCart=(product,qty)=>{
        setCart({type:'ADD_TO_CART',payload:{product,qty}})
    }



    return <Context.Provider value={{cart,addToCart}}>{children}</Context.Provider>
}

export const useCartContext=()=>{
    return useContext(Context)
}