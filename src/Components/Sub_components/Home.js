import React from 'react'
import styled from 'styled-components'

const Home = () => {


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
margin-bottom: auto;
`