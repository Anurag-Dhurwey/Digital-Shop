import React from 'react'

const SortProducts = (props) => {
    const {sort}=props
  return (
    <>
      <div > 
          <form action="#">
            <label htmlFor="sort">Sort by</label>
            <select name="sort" id="sort" onChange={sort}>
              <option value="featured">Select</option>
              <option value="higest">High to Low</option>
              <option value="lowest"> Low to High </option>
              <option value="a_z">A to Z</option>
              <option value="z_a">Z to A</option>
            </select>
          </form>
         </div>
    </>
  )
}

export default SortProducts