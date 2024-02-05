import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/medium_logo.png'
import { nav } from '../../data'

const DemoHeader = () => {
  return (
    <header className='border-b border-black sticky top-0 z-50'>
      <div className='size h-[70px] flex items-center justify-between'>
        <Link to={"/"}>
          <img className='h-[2.5rem]' 
          src={logo} 
          alt="logo" 
          />
        </Link>
        <div>
          <div>
            {nav.map((link, i) => (
              <Link to={link.path}>{link.title}</Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

export default DemoHeader
