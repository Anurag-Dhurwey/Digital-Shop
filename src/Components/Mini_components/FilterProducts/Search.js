import React from 'react'

const Search = (props) => {
    const {search}=props
  return (
    <>
     <form onSubmit={(e)=>{e.preventDefault()}}>
        <label htmlFor="search" > Search</label>
        <input type="name" id='search' name='search' onChange={(e)=>{search(e)}} />
      </form> 
    </>
  )
}

export default Search
