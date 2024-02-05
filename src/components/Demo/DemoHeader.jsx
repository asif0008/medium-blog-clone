import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/medium_logo.png'
import { nav } from '../../data'

const DemoHeader = () => {

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const scrollMe = () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    }

    window.addEventListener('scroll', scrollMe);

  }, [])

  return (
    <header className={`${isActive ? "bg-white" : "bg-banner"} 
    border-b border-black sticky top-0 z-50 transition-all duration-500`}>
      <div className='size h-[70px] flex items-center justify-between'>
        <Link to={"/"}>
          <img className='h-[2.5rem]' 
          src={logo} 
          alt="logo" 
          />
        </Link>
        <div className='flex items-center gap-5'>
          <div className='hidden text-sm sm:flex items-center gap-5'>
            {nav.map((link, i) => (
              <Link key={i} to={link.path}>{link.title}</Link>
            ))}
          </div>
          <div className="relative">
            <button className='hidden text-sm sm:flex items-center gap-5'>Sign In</button>
          </div>
          <button className={`${isActive ? "bg-green-700" : "bg-black"} 
          transition-all duration-500 text-white rounded-full px-3 p-2 text-sm font-medium`}>Get Started</button>
        </div>
      </div>
    </header>
  )
}

export default DemoHeader
