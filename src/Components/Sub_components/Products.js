import React from 'react'
import { useGlobleContext } from '../../Context/Globle_Context'

const Products = () => {
    const {state}=useGlobleContext();
    const {products}=state
    console.log(products)
  return (
    <>
     <div className='container mx-auto'>
        <div>

        </div>
        <div className=''>
         {products?.map((item,i)=>{
            // eslint-disable-next-line
            const {title,price,local_price,slug,qty,description,category,size,colour,required_metadata,metadata,rating,image,hero_image,box_item,publishedAt
            }=item.attributes;
            // eslint-disable-next-line
            const {head_img,banner_img}=image;

             return (
                <div className='flex justify-center gap-5 my-4' key={item.id}>
                 <div className='h-[300px] w-[300px] overflow-hidden'>
                    <figure >
                        <img src={head_img[1]} alt='product_Img' />
                    </figure>
                 </div>
                 <div>
                    <h2 className='font-extrabold w-[600px]'>{title}</h2>
                    <div className='review'><p className='text-pink-800'>{!rating?'No reviews':'true'}</p> </div>
                    <ul>{required_metadata.meta.map((item,i)=>{
                     const {key,value}=item
                     return (
                        <li key={i}>
                        {key} : {value}
                        </li>
                     )
                    })}</ul>
                 </div>
                 <div>
                    <h2 className='font-extrabold'>&#x20B9;{price}</h2>
                    <p className='text-sm'><span className='line-through'>&#x20B9;{local_price}</span> <span className='font-semibold text-green-800'>{Math.ceil(100-(price*100/local_price))}% Off </span></p>
                 </div>
                </div>
             )
         })}
        </div>
        </div> 
    </>
  )
}

export default Products
