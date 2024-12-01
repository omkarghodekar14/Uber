import React from 'react'
import car from '../assets/car.png'

function RidePanel({setConfirmRidePanel, setLookingForDriverPanel}) {
  return (
    <div>
      <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => {
        setConfirmRidePanel(false)
      }}><i className="text-3xl text-gray-400 ri-arrow-down-wide-line"></i></h5>
      <h3 className='text-2xl font-semibold mt-6'>Confirm your Ride</h3>

      <div className='flex  justify-between flex-col items-center'>
        <img className='h-32 w-2/4' src={car} alt="" />
        <div className='w-full mt-5'>
          <div className='flex items-center gap-5 px-3 border-b-2'>
            <i className="ri-map-pin-user-fill"></i>
            <div>
              <h3 className='text-lg font-medium'>562/11-A</h3>
              <p className='text-sm -mt-1 text-gray-600'>kankariya talha, bhopal</p>
            </div>
          </div>
          <div className='flex items-center gap-5 p-3 border-b-2'>
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className='text-lg font-medium'>562/11-A</h3>
              <p className='text-sm -mt-1 text-gray-600'>kankariya tabah bhopal</p>
            </div>
          </div>
          <div className='flex items-center gap-5 p-3'>
            <i className="ri-currency-line"></i>
            <div>
              <h3 className='text-lg font-medium'>₹193.20</h3>
              <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
            </div>
          </div>
        </div>
        <button className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg' onClick={()=>{
          setLookingForDriverPanel(true)
          setConfirmRidePanel(false)
        }}>Confirm</button>
      </div>
    </div>
  )
}

export default RidePanel