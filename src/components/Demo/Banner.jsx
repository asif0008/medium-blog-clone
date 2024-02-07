import React from 'react'

const Banner = () => {
  return (
    <div className='bg-banner border-b border-black'>
      <div className="container-size py-[5rem] flex flex-col items-start gap-[2rem]">
        <h1 className='font-title text-[3rem] sm:text-[4rem] md:text-[6rem] leading-tight'>Stay curious.</h1>
        <p className='w-full lg:w-[50%] text-[1.3rem] md:text-[1.5rem] font-medium leading-7'>
            Discover stories, thinking, and expertise from writers on any topic.
        </p>
        <button className="btn !text-[1.2rem] !py-3 mt-2 bg-slate-950 hover:bg-black text-white rounded-full">
            Start Reading
        </button>
      </div>
    </div>
  )
}

export default Banner
