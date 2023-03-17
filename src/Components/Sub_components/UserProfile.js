import React from 'react'
import { useAuthContext } from '../../Context/AuthContext'
import { useGlobleContext } from '../../Context/Globle_Context'

const UserProfile = () => {
    const {enabled}=useGlobleContext()
    const {user}=useAuthContext()
    console.log(user)
  return (
    <div className='w-[100%] flex flex-col justify-center items-center'>
        <div className={`w-[300px] md:w-[400px] lg:w-[500px] ${enabled?'text-white':'text-black'} `}>
      <div className='image w-[100%] h-5 bg-pink-800'>

      </div>
      <div className='w-[100%] '>
     <h5>User name :<span> {user.username}</span></h5>
     <h5>Email ID :<span> {user.email}</span></h5>
      </div>
      <div className=''>
     <h5>Description : </h5>
     <p>NA</p>
      </div>
    </div>
    </div>
  )
}

export default UserProfile
