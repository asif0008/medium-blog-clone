import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import logo from '../../assets/medium_logo.png'
import { nav } from '../../data'
import Auth from './Auth/Auth'

const DemoHeader = () => {

  const [isActive, setIsActive] = useState(false);
  const [modal, setModal] = useState(false);


  useEffect(() => {
    const scrollMe = () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    }

    window.addEventListener('scroll', scrollMe);

  }, [])

  return (
    <header className={`${isActive ? "bg-white" : "bg-banner"} 
    border-b border-black sticky top-0 z-50 transition-all duration-700`}>
      <div className='container-size h-[70px] flex items-center justify-between'>
        <Link to={"/"}>
          <img className='h-[2.5rem]' 
          src="/medium_logo.png" 
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
            <button
            onClick={() => setModal(true)}
            className='hidden text-sm sm:flex items-center gap-5'>Sign In</button>
            <Auth modal={modal} setModal={setModal} />
          </div>
          <button 
          onClick={() => setModal(true)}
          className={`${isActive ? "bg-green-700" : "bg-black"} 
          transition-all duration-700 text-white rounded-full px-3 p-2 text-sm font-medium`}>Get Started</button>
        </div>
      </div>
    </header>
  )
}

export default DemoHeader
