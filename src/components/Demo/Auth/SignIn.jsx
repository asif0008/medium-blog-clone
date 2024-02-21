import React, { useState } from 'react'
import Input from '../../../utils/Input'
import { GoChevronLeft } from "react-icons/go";
import { toast } from 'react-toastify';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase/firebase';
import { useNavigate } from 'react-router-dom';


const SignIn = ({ setSignReq }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(form[('email', 'password')] === '') {
      toast.error('All fields are required!!');
    }

    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, form.email, form.password);
      navigate('/');
      toast.success('User has been logged in');
      setLoading(false);
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  }


  return (
    <div className='text-center'>
      <h2 className="text-3xl">Sign in with Email</h2>
      <p className='pt-[2.5rem] md:w-[70%] mx-auto'>
      Enter the email address associated with your account, and we’ll send a magic link to your inbox.
      </p>
      <form onSubmit={handleSubmit}>
        <Input form={form} setForm={setForm} title={'email'} type={'email'} />
        <Input form={form} setForm={setForm} title={'password'} type={'password'} />
        <button className={`mt-[2.5rem] w-[50%] py-2 bg-black text-white rounded-full
        hover:bg-green-700 transition-all duration-300
        ${loading ? "opacity-50 pointer-events-none" : ""}`}>Sign In</button>
      </form>
      <button
       onClick={() => setSignReq("")}
       className='text-sm text-green-700 hover:text-green-600 flex items-center mt-[2.5rem] mx-auto'>
        <GoChevronLeft />
        All sign in options
      </button>
    </div>
  )
}

export default SignIn
