import React from 'react'
import {Link} from 'react-router-dom'
import { useGlobleContext } from '../../../Context/Globle_Context'
const LgDisclouserPanel = (props) => {
  const {enabled}=useGlobleContext()
    const {classNames,navigation,setNavigation}=props.class
    // const setCurrent=(item)=>{
    //   setNavigation((pre)=>{
    //        let newNav=pre.map((currItm)=>{
    //           if(item.name===currItm.name){
    //           return  {...currItm,current:true}
    //           }else{
    //             return {...currItm,current:false}
    //           }   
    //        })
    //        return newNav
    //   })
    //   console.log(item)
    // }
  return (
    <>
     <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={()=>{setNavigation({type:"setCurrent",payload:item})}}
                        className={classNames(
                          item.current ? enabled?'bg-pink-700 text-white':'bg-gray-900 text-white' : enabled?'text-white hover:bg-pink-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium':'text-black hover:bg-pink-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
    </>
  )
}

export default LgDisclouserPanel
