import React from 'react'
import logo from '../assets/logod.png'
import { Link } from 'react-router-dom'
import { useState } from 'react';

function CaptainLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setCaptainData] = useState({});

  function submitHandler(e) {
    e.preventDefault();
    
    setCaptainData({
      email:email,
      password: password
    })
    console.log(captainData);

    setEmail("");
    setPassword("");
    
  }

  return (
    <div className='flex flex-col justify-between h-screen'>
      <div>
        <img src={logo} alt="Uber Logo" className="w-20 ml-7 mt-5" />
        <form className='p-7 pt-5 pb-0' onSubmit={ (e)=> submitHandler(e)}>
          <h3 className='text-lg mb-2 font-medium'>What's your email</h3>

          <input
            type="email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            className='bg-[#eeeeee] rounded px-4 py-1 border w-full text-lg placeholder:text-base mb-7 '
            required
            placeholder='email@example.com'
          />

          <h3 className='text-ls mb-2 font-medium'>Enter Password</h3>

          <input
            type='password'
            required
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            className='bg-[#eeeeee] rounded px-4 py-1 border w-full text-lg placeholder:text-base mb-7 '
            placeholder='password'
          />

          <button className='bg-black text-white w-full py-2 rounded-md font-semibold'>Login</button>

          <p className='my-2 text-sm'>New here? <Link to={"/captain-signup"} className='text-blue-600'>Register as a Captain</Link></p>
        </form>
      </div>
      <div className='p-7 pt-0'>
        <Link to="/login" className='bg-green-600 flex item-center justify-center text-white w-full py-2 rounded-md font-semibold'>Sign in as User</Link>
      </div>
    </div>
  )
}

export default CaptainLogin