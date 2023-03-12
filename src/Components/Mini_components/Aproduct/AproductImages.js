import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'

const AproductImages = ({image}) => {
    const {head_img,banner_img}=image;
    const [imgUrl,setImgUrl]=useState(head_img[0])
  return (
    <Wrapper>
        <div className="img_arry">
         {head_img.map((img,i)=>{
            return (
                <div key={i} >
                    <figure>
                        <img style={{cursor: 'pointer'}}  src={img} alt={'img.name'} width="100px" onClick={()=>{setImgUrl(img)}} onMouseEnter={()=>{setImgUrl(img)}}/>
                    </figure>
                </div>
            )
         })}
        </div>
        <div className="main_img">
             <figure>
             <img src={imgUrl} alt={'imgAlt'} width="300px"/>
             </figure>
        </div>
    </Wrapper>
  )
}

const Wrapper=styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    gap:5px;
`

export default AproductImages
