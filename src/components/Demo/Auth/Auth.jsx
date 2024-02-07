import React, { useState } from 'react'
import Modal from '../../../utils/Modal'
import { LiaTimesSolid } from "react-icons/lia"
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoMailOutline } from "react-icons/io5";
import SignIn from './SignIn';
import SignUp from './SignUp';


const Auth = ({ modal, setModal }) => {
    const [createUser, setCreateUser] = useState(false);
    const [signReq, setSignReq] = useState("");

    const hideModal = modal ? "visible opacity-100" : "invisible opacity-0";
  return (
    <Modal modal={modal} setModal={setModal} hideModal={hideModal}>
      <section className={`fixed z-50 inset-0 m-auto w-[90%] md:w-[50%] h-max 
      py-12 px-3 bg-white overflow-auto shadows text-center rounded transition-all duration-500 ${hideModal}`}
      >
        <button 
        onClick={() => setModal(false)}
        className='absolute top-4 right-4 text-xl hover:opacity-50 transition-all duration-500'>
            <LiaTimesSolid />
        </button>
        <div className="flex flex-col items-center gap-[3rem]">
            {signReq === "" ? (
                <>
                <h2 className="text-2xl pt-[0rem]">
                    { createUser ? 'Join Medium' : 'Welcome Back' }
                </h2>
                <div className='flex flex-col gap-3 w-fit mx-auto'>
                    <Button 
                    icon={ <FcGoogle className='text-xl' /> } 
                    text={`${createUser ? 'Sign up' : 'Sign in'} with Google`} 
                    />
                    <Button 
                    icon={ <FaFacebook className='text-xl text-blue-600' /> } 
                    text={`${createUser ? 'Sign up' : 'Sign in'} with Facebook`} 
                    />
                    <Button 
                    click={() => setSignReq(createUser ? "sign-up" : "sign-in")}
                    icon={ <IoMailOutline className='text-xl' /> } 
                    text={`${createUser ? 'Sign up' : 'Sign in'} with Email`} 
                    />
                </div>
                <p>
                    {createUser ? 'Already have an account?' : "No account?"} 
                    <button onClick={() => setCreateUser(!createUser)} className='text-green-600 font-bold hover:text-green-700 ml-1'>
                        {createUser ? "Sign in" : "Create one"}
                    </button>
                </p>
            </>
            ) : signReq === 'sign-in' ? (
                <SignIn setSignReq={setSignReq}/>
            ) : signReq === 'sign-up' ? (
                <SignUp setSignReq={setSignReq}/>
            ) : null }
            <p className='text-sm md:w-[75%] text-center'>
                    Click “Sign in” to agree to Medium’s Terms of Service and acknowledge that Medium’s Privacy Policy applies to you.
            </p>
        </div>
      </section>
    </Modal>
  )
}

export default Auth;


const Button = ({ icon, text, click }) => {
    return (
        <button onClick={click} className="flex items-center justify-center sm:justify-between gap-3 px-3 py-2 border border-black rounded-full sm:w-[20rem]">
            {icon} {text} <p className='hidden sm:block'></p>
        </button>
    )
}
