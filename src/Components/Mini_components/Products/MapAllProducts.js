import React from 'react'
import { useGlobleContext } from '../../../Context/Globle_Context'

const MapAllProducts = (props) => {
   const {enabled}=useGlobleContext()
    const {products}=props
  return (
    <>
      {products?.map((item,i)=>{
            // eslint-disable-next-line
            const {title,price,local_price,slug,qty,description,category,size,colour,required_metadata,metadata,rating,image,hero_image,box_item,publishedAt
            }=item.attributes;
            // eslint-disable-next-line
            const {head_img,banner_img}=image;
             return (
                <div className={`flex justify-center lg:gap-5  gap-1  my-3 ${enabled?'text-white':''} `}  key={item.id}>
                 <div >
                    <figure className='lg:h-[300px] lg:w-[300px] md:h-[300px] md:w-[300px] w-[145px]  overflow-hidden'>
                        <img  src={head_img[1]} alt='product_Img' />
                    </figure>
                 </div>
                 <div>
                    <h2 className='font-bold  text-xs lg:text-base  lg:w-[600px] md:text-base  '>{ window.innerWidth>640?title:title.slice(0,50)}</h2>
                    <div className='review text-xs lg:text-base'><p className='text-pink-800'>{!rating?'No reviews':'true'}</p> </div>
                    <ul className='text-xs lg:text-base' >{required_metadata.meta.map((item,i)=>{
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
                    <p className='text-sm'><span className='line-through'>&#x20B9;{local_price}</span> <span className={`font-semibold ${enabled?'text-[#00ff7f]':'text-green-900'}`}>{Math.ceil(100-(price*100/local_price))}% Off </span></p>
                 </div>
                </div>
             )
         })}
    </>
  )
}

export default MapAllProducts
