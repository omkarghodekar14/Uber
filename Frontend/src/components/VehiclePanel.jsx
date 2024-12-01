import React from 'react'
import car from '../assets/car.png';
import bike from '../assets/bike.png';
import auto from '../assets/auto.png';

function VehiclePanel({setPanelOpen, setVehiclePanel, setConfirmRidePanel}) {
  return (
    <div className='overflow-hidden'>
        <div className='flex justify-between item w-full'><h3 className='text-2xl font-semibold mb-2 '>Choose a Vehicle</h3>
          <h3 onClick={()=>{
            setVehiclePanel(false)
            setPanelOpen(true)
          }}><i className="ri-arrow-down-wide-fill text-2xl font-semibold mb-2"></i></h3></div>



        <div className='flex items-center justify-between p-2 text-sm w-full border-[2px] border-white active:border-[#eee] rounded-2xl'>
          <img src={car} className='h-16' alt="" />
          <div onClick={()=> {
            setConfirmRidePanel(true)
            setVehiclePanel(false)
          }} className='w-1/2'>
            <h4 className='font-medium text-base flex items-center gap-2'>UberGO <span><i className="ri-user-fill">4</i></span></h4>
            <h5 className='text-sm'>2 mins away</h5>
            <p className='text-sm'>Affordable, compact rides</p>

          </div>
          <h2 className='text-xl font-semibold'>₹193.20</h2>
        </div>

        <div className='flex items-center justify-between p-2 text-sm w-full border-[2px] border-white active:border-[#eee] rounded-2xl'>
          <img src={bike} className='h-16' alt="" />
          <div className='w-1/2'>
            <h4 className='font-medium text-base flex items-center gap-2'>Moto <span><i className="ri-user-fill">1</i></span></h4>
            <h5 className='text-sm'>3 mins away</h5>
            <p className='text-sm'>Affordable, motorcycle rides</p>

          </div>
          <h2 className='text-xl font-semibold'>₹65</h2>
        </div>

        <div className='flex items-center justify-between p-2 text-sm w-full border-[2px] border-white active:border-[#eee] rounded-2xl'>
          <img src={auto} className='h-16' alt="" />
          <div className='w-1/2'>
            <h4 className='font-medium text-base flex items-center gap-2'>UberGO <span><i className="ri-user-fill">4</i></span></h4>
            <h5 className='text-sm'>2 mins away</h5>
            <p className='text-sm'>Affordable, Auto rides</p>

          </div>
          <h2 className='text-xl font-semibold'>₹118.40</h2>
        </div>
    </div>
  )
}

export default VehiclePanel