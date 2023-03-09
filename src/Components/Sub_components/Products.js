import React from 'react'
import { useGlobleContext } from '../../Context/Globle_Context'
import InternalError from '../InternalError';
import MapAllProducts from '../Mini_components/Products/MapAllProducts';

const Products = () => {
    const {state}=useGlobleContext();
    const {products,isError}=state
   //  console.log(products)
  return (
    <>
     <div className='container mx-auto '>
        <div className='px-2 lg:px-0 md:px-0'>
         {isError?<InternalError/>:<MapAllProducts products={products}/>}
        </div>
        </div> 
    </>
  )
}

export default Products
