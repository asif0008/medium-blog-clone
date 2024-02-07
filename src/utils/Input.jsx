import React from 'react'

const Input = ({ type, title }) => {
  return (
    <div className='flex flex-col gap-2 mt-[1rem]'>
      <label className='text-sm capitalize'>{title}</label>
      <input
      className='text-center border-b border-black outline-none'
      type={type} 
      name={type}
      />
    </div>
  )
}

export default Input