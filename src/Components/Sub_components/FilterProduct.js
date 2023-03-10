import React from 'react'
import { useFilterContext } from '../../Context/FilterContext'
import Category from '../Mini_components/FilterProducts/Category'
import Search from '../Mini_components/FilterProducts/Search'
import SortProducts from '../Mini_components/FilterProducts/SortProducts'

const FilterProduct = () => {
    const {filterMethod,sortMethod,category}=useFilterContext()
  return (
    <>
     <div className='flex justify-center align-middle'>
        <Search search={filterMethod}/> 
        <SortProducts sort={sortMethod}/>
        <Category category={category} sort={sortMethod} />
        </div> 
    </>
  )
}

export default FilterProduct
