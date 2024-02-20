import React from 'react'
import './style.css'

const Loader = () => {
  return (
    <div className='fixed inset-0 bg-white grid place-items-center z-30'>
      <span className='loader'></span>
    </div>
  )
}

export default Loader
