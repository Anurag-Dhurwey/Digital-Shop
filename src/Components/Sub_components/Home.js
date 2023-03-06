import React from 'react'
import styled from 'styled-components'
import { useGlobleContext } from '../../Context/Globle_Context'

const Home = () => {

  const value=useGlobleContext()
  console.log(value)

  return (
    <>
      <Wrapper>
       <div className='container mx-auto text-center'>
        <h3>this is my home page</h3>
       </div>
      </Wrapper>
    </>
  )
}

export default Home

const Wrapper=styled.div`

`