import React, { useState } from 'react'
import { BsMedium } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { LiaEditSolid } from "react-icons/lia";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from 'react-router-dom';
import Search from './Search';
import { HiOutlineUserCircle } from "react-icons/hi2";
import Modal from '../../../utils/Modal'
import UserModal from './UserModal';


const HomeHeader = () => {
  const [modal, setModal] = useState(false);

  const hideModal = `${modal ? "visible opacity-100" : "invisible opacity-0"}`;

  return (
    <header className='border-b border-gray-200'>
      <div className='container-size h-[60px] flex items-center justify-between'>
        {/* left side */}
        <div className="flex items-center gap-3">
          <Link to={'/'}>
            <span className='text-5xl'>
              <BsMedium />
            </span>
          </Link>
          <Search />
        </div>
        {/* right side */}
        <div className="flex items-center gap-3 sm:gap-7">
          <Link to={'/write'} className='hidden md:flex items-center gap-1 text-gray-500'>
            <span className="text-3xl">
              <LiaEditSolid />
            </span>
            <div className="text-sm mt-2">
              Write
            </div>
          </Link>
          <span className='text-3xl text-gray-500 cursor-pointer'>
            <IoMdNotificationsOutline />
          </span>
          <div className="relative">
            <div className='flex items-center'
            onClick={() => setModal(true)}>
              <img 
                src="/user-profile.webp" 
                alt="Profile image" 
                className="w-[2.3rem] h-[2.3rem] object-cover rounded-full cursor-pointer" 
              />
              <span className="text-lg text-gray-500 cursor-pointer">
                <MdKeyboardArrowDown />
              </span>
            </div>
            <Modal modal={modal} setModal={setModal} hideModal={hideModal}>
              <div className={`${hideModal} transition-all duration-100`}>
                <UserModal />
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HomeHeader
