import React, { useState } from 'react'
import Input from '../../../utils/Input'
import { GoChevronLeft } from "react-icons/go";
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import { doc, getDoc, setDoc } from 'firebase/firestore';

const SignUp = ({ setSignReq, setModal }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    user_name: '',
    email: '',
    password: '',
    confirm_password: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(form[('user_name', 'email', 'password', 'confirm_password')] === '') {
      toast.error('All fields are required!');
    }else if(form[('password')] !== form[('confirm_password')]) {
      toast.error('Your password are not matching eact other!!');
      return;
    } else {
      setLoading(true);
      const user = await createUserWithEmailAndPassword(auth, form.email, form.password);

      const ref = doc(db, 'users', user.uid);
          const userDoc = await getDoc(ref);

          if(!userDoc.exists()) {
              await setDoc(ref, {
                  userId: user.uid,
                  username: form.user_name,
                  email: form.email,
                  userImg: '', 
                  bio: '',
              });
              navigate('/');
              toast.success('User has been created!!');
              setModal(false);
              setLoading(false)
          }
    }
  }
  
  return (
    <div className='text-center'>
    <h2 className="text-3xl">Sign up with Email</h2>
    <p className='pt-[2.5rem] md:w-[70%] mx-auto'>
    Enter the email address associated with your account, and we’ll send a magic link to your inbox.
    </p>
    <form onSubmit={handleSubmit}>
      <Input form={form} setForm={setForm} title={'user_name'} type={'text'} />
      <Input form={form} setForm={setForm} title={'email'} type={'email'} />
      <Input form={form} setForm={setForm} title={'password'} type={'password'} />
      <Input form={form} setForm={setForm} title={'confirm_password'} type={'password'} />
      <button className={`mt-[2.5rem] w-[50%] py-2 bg-black text-white rounded-full
      hover:bg-green-700 transition-all duration-300
      ${loading ? 'opacity-50 pointer-events-none' : ''}`}>Sign Up</button>
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
