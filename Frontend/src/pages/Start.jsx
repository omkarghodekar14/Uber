import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import frontpage from '../assets/frontpage.avif'

function Start() {
  return (
    <div className='h-screen w-full flex justify-between bg-slate-200 flex-col pt-3'
      style={{
        backgroundImage: `url(${frontpage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      <img src={logo} alt="Uber Logo" className="w-24 ml-4" />

      <div className='bg-white py-2 px-3 flex flex-col gap-4 justify-evenly pb-6'>
        <h2 className='text-2xl font-bold'>Get Started with Uber</h2>
        <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded-md mt-2'>Continue</Link>
      </div>

    </div>
  )
}

export default Start