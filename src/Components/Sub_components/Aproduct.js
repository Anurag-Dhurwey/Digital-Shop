import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import { useGlobleContext } from '../../Context/Globle_Context';
const Aproduct = () => {
    const {state,get_A_product}=useGlobleContext()
    const {id}=useParams()
    const {aProduct}=state
     // eslint-disable-next-line
    const {title,price,local_price,slug,qty,description,category,size,colour,required_metadata,metadata,rating,image,hero_image,box_item,publishedAt
    }=aProduct.attributes;
    // eslint-disable-next-line
    const {head_img,banner_img}=image;
useEffect(()=>{
       get_A_product(id)
       // eslint-disable-next-line
},[id])

  return (
    <div className='container mx-auto mb-auto'>
      <h3>{title}</h3>
    </div>
  )
}

export default Aproduct
