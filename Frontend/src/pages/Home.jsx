import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1557404763-69708cd8b9ce?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen w-full flex justify-between bg-slate-200 flex-col pt-3'>
      <img src={logo} alt="Uber Logo" className="w-24 ml-4" />

      <div className='bg-white py-2 px-3 flex flex-col gap-4 justify-evenly pb-6'>
        <h2 className='text-2xl font-bold'>Get Started with Uber</h2>
          <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded-md mt-2'>Continue</Link>
        </div>

    </div>
  )
}

export default Home