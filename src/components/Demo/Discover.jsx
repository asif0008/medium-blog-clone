import React from 'react'
import { discover } from '../../data'
import { discoverActions } from '../../data'

const Discover = () => {
  return (
    <div className='sticky top-[6rem]'>
      <div className="border-b border-gray-200 pb-7">
        <h2 className="font-semibold">Discover more of what matters to you</h2>
        <div className="flex items-center flex-wrap gap-3 my-4 mb-2">
           {discover
           .sort((a, b) => a.localeCompare(b))
           .map((item, i) => (
            <button 
                className='bg-gray-100 px-4 py-2 rounded-full text-sm' 
                key={i}>
                {item}
            </button>
            ))}
        </div>
        <button className='text-green-600 text-sm hover:text-black1 py-3'>See more topics</button>
      </div>
      <div className="flex items-center flex-wrap gap-5 mt-5">
            {discoverActions.map((item, i) => (
                <button className='text-sm text-black1'>
                    {item}
                </button>
            ))}
      </div>
    </div>
  )
}

export default Discover
