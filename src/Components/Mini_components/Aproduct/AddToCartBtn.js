import React from 'react'
import { useState } from 'react'

const AddToCartBtn = ({stock}) => {
    const [qty,setQty]=useState(1)
    const DecQty=()=>{
        qty >1? setQty(qty-1):setQty(1)
    }
    const IncQty=()=>{
        stock && stock >qty? setQty(qty+1):setQty(stock)
    }
  return (
    <div>
      <div className="quantity">
       <h3>
       <span style={{cursor:'pointer',margin:'10px'}} onClick={DecQty}>-</span><span>{qty}</span><span style={{cursor:'pointer',margin:'10px'}} onClick={IncQty}>+</span>
       </h3>
      </div>
      <div className="button">
        <button> Add to cart</button>
      </div>
    </div>
  )
}

export default AddToCartBtn
