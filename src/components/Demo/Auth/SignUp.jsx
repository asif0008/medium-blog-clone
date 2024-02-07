import React from 'react'
import Input from '../../../utils/Input'
import { GoChevronLeft } from "react-icons/go";

const SignUp = ({ setSignReq }) => {
  return (
    <div className='text-center'>
    <h2 className="text-3xl">Sign up with Email</h2>
    <p className='pt-[2.5rem] md:w-[70%] mx-auto'>
    Enter the email address associated with your account, and we’ll send a magic link to your inbox.
    </p>
    <form>
      <Input title={'username'} type={'text'} />
      <Input title={'Email'} type={'email'} />
      <Input title={'Password'} type={'password'} />
      <Input title={'Confirm Password'} type={'password'} />
      <button className="mt-[2.5rem] w-[50%] py-2 bg-black text-white rounded-full
      hover:bg-green-700 transition-all duration-300">Sign Up</button>
    </form>
    <button
     onClick={() => setSignReq("")}
     className='text-sm text-green-700 hover:text-green-600 flex items-center mt-[2.5rem] mx-auto'>
      <GoChevronLeft />
      All sign up options
    </button>
  </div>
  )
}

export default SignUp
