import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react';

function UserSignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userData, setUserData] = useState({});

  function submitHandler(e) {
    e.preventDefault();

    setUserData({
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password
    })

    console.log(userData);

    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");

  }
  return (
    <div className='flex flex-col justify-between h-screen'>
      <div>
        <img src={logo} alt="Uber Logo" className="w-24 ml-4" />
        <form className='p-7 pt-5 pb-0' onSubmit={(e) => submitHandler(e)}>
          <h3 className='text-lg mb-2 font-medium'>What's your Name</h3>

          <div className='flex gap-2 w-full mb-5'>
            <input
              type="text"
              className='bg-[#eeeeee] w-1/2 rounded px-4 py-1 border text-lg placeholder:text-base'
              required
              placeholder='First name'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              className='bg-[#eeeeee] w-1/2 rounded px-4 py-1 border text-lg placeholder:text-base '
              required
              placeholder='Last name'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <h3 className='text-lg mb-2 font-medium'>What's your email</h3>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-[#eeeeee] rounded px-4 py-1 border w-full text-lg placeholder:text-base mb-7 '
            required
            placeholder='email@example.com'
          />

          <h3 className='text-lg mb-2 font-medium'>Enter Password</h3>

          <input
            type='password'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='bg-[#eeeeee] rounded px-4 py-1 border w-full text-lg placeholder:text-base mb-5 '
            placeholder='password'
          />

          <button className='bg-black text-white w-full py-2 rounded-md font-semibold'>Login</button>

          <p className='my-2 text-sm'>Already have a account? <Link to={"/login"} className='text-blue-600'>Login here</Link></p>
        </form>
      </div>
      <div className='p-5 pt-0'>
        <p className='text-[10px] leading-tight '>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service</span> apply.</p>
      </div>
    </div>
  )
}

export default UserSignup