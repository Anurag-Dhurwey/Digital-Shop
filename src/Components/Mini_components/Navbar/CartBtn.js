import React from 'react'
// eslint-disable-next-line
import {  BellIcon} from '@heroicons/react/24/outline'
import {Link} from 'react-router-dom'
import { BsMinecartLoaded } from 'react-icons/bs';
const CartBtn = () => {
  return (
    <>
     <Link to={'/cart'}>
     <button
                  type="button"
                  className={`rounded-full bg-gray-800 sm:p-1 lg:p-8 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800`}
                >
                  <span className="sr-only">View notifications</span>
                  {/* <BellIcon className="h-6 w-6" aria-hidden="true" /> */}
                  <BsMinecartLoaded className='h-6 w-6' aria-hidden="true"/>
                </button> 
     </Link>
    </>
  )
}

export default CartBtn
