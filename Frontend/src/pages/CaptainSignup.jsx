import React from 'react'
import logo from '../assets/logod.png'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';

function CaptainSignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [vehicleColor, setVehicleColor] = useState("")
  const [vehicleType, setVehicleType] = useState("")
  const [vehiclePlate, setVehiclePlate] = useState("")
  const [vehicleCapacity, setVehicleCapacity] = useState("")
  const navigate = useNavigate();

  const { captain, setCaptain } = React.useContext(CaptainDataContext);


  async function submitHandler(e) {
    e.preventDefault();

    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/register`, captainData);

    if(response.status === 201) {
      const data = response.data;
      setCaptain(data.captain);  
      localStorage.setItem('token', data.token);
      navigate('/captain-home');
    }


    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setVehicleCapacity("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleType("");

  }
  return (
    <div className='flex flex-col justify-between h-screen'>
      <div>
        <img src={logo} alt="Uber Logo" className="w-20 ml-7 mt-5" />
        <form className='p-7 pt-5 pb-0' onSubmit={(e) => submitHandler(e)}>
          <h3 className='text-base mb-2 font-medium'>What's your Name</h3>
          <div className='flex gap-2 w-full mb-3'>
            <input
              type="text"
              className='bg-[#eeeeee] w-1/2 rounded px-4 py-1 border text-base placeholder:text-base'
              required
              placeholder='First name'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              className='bg-[#eeeeee] w-1/2 rounded px-4 py-1 border text-base placeholder:text-base '
              required
              placeholder='Last name'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <h3 className='text-base mb-2 font-medium'>What's your email</h3>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-[#eeeeee] rounded px-4 py-1 border w-full text-base placeholder:text-base mb-3 '
            required
            placeholder='email@example.com'
          />

          <h3 className='text-base mb-2 font-medium'>Enter Password</h3>

          <input
            type='password'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='bg-[#eeeeee] rounded px-4 py-1 border w-full text-base placeholder:text-base mb-3 '
            placeholder='password'
          />

          <h3 className='text-base mb-2 font-medium'>Vehicle Information</h3>

          <div className='flex flex-col'>
            <div className='flex gap-2 w-full mb-5'>
              <input
                type="text"
                className='bg-[#eeeeee] w-1/2 rounded px-4 py-1 border text-base placeholder:text-base'
                required
                placeholder='Vehicle Color'
                value={vehicleColor}
                onChange={(e) => setVehicleColor(e.target.value)}
              />
              <input
                type="text"
                className='bg-[#eeeeee] w-1/2 rounded px-4 py-1 border text-base placeholder:text-base '
                required
                placeholder='Vehicle Plate'
                value={vehiclePlate}
                onChange={(e) => setVehiclePlate(e.target.value)}
              />
            </div>
            <div className='flex gap-2 w-full mb-5'>
              <input
                type="number"
                className='bg-[#eeeeee] w-1/2 rounded px-4 py-1 border text-base placeholder:text-base'
                required
                placeholder='Vechicle Capacity'
                value={vehicleCapacity}
                onChange={(e) => setVehicleCapacity(e.target.value)}
              />
              <select
                className='bg-[#eeeeee] w-1/2 rounded px-4 py-1 border text-base placeholder:text-base'
                onChange={(e)=> setVehicleType(e.target.value)}
                value={vehicleType} // Set the value to reflect the current state
              >
                <option value="">Select Vehicle Type</option>
                <option value="car">Car</option>
                <option value="motorcycle">Motorcycle</option>
                <option value="auto">Auto</option>
              </select>
            </div>
          </div>

          <button className='bg-black text-white w-full py-2 rounded-md font-semibold'>Create Captain Account</button>


          <p className='my-2 text-sm'>Already have a account? <Link to={"/captain-login"} className='text-blue-600'>Login here</Link></p>
        </form>
      </div>
      <div className='p-5 pt-0'>
        <p className='text-[10px] leading-tight '>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service</span> apply.</p>
      </div>
    </div>
  )
}

export default CaptainSignup