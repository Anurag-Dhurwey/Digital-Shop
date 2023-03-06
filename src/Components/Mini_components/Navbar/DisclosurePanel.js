import React from 'react'
import { Disclosure} from '@headlessui/react'
import {Link} from 'react-router-dom'
const DisclosurePanel = (props) => {
    const {classNames,navigation}= props.class
  return (
    <>
     <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  <Link to={`${item.href}`}>{item.name}</Link>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel> 
    </>
  )
}

export default DisclosurePanel
