import React, { useState, useRef } from 'react'
import logo from '../assets/logo.png';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import RidePanel from '../components/RidePanel';
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';

function Home() {

  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null)
  const buttonRef = useRef(null);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const vehiclePanelRef = useRef(null)
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const confirmRidePanelRef = useRef(null)
  const [lookingForDriverPanel, setLookingForDriverPanel] = useState(false);
  const lookingForDriverPanelRef = useRef(null)
  const [waitingForDriverPanel, setWaitingForDriverPanel] = useState(false);
  const waitingForDriverPanelRef = useRef(true)

  function submitHandler(e) {
    e.preventDefault();
  }

  useGSAP(function () {
    if (panelOpen == true) {
      gsap.to(panelRef.current, {
        height: '70%',
        onStart: () => {
          panelRef.current.style.display = "block";
        },
      })
      gsap.to(buttonRef.current, {
        opacity: '1',
      })
    }
    else {
      gsap.to(panelRef.current, {
        height: '0%',
        onComplete: () => {
          panelRef.current.style.display = "none";
        },
      })
      gsap.to(buttonRef.current, {
        opacity: '0',
      })
    }
  }, [panelOpen])

  useGSAP(function () {
    if (vehiclePanel == true) {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(0)',
      })
    }
    else {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(100%)',
      })
    }
  }, [vehiclePanel])

  useGSAP(function () {
    if (lookingForDriverPanel == true) {
      gsap.to(lookingForDriverPanelRef.current, {
        transform: 'translateY(0)',
      })
    }
    else {
      gsap.to(lookingForDriverPanelRef.current, {
        transform: 'translateY(100%)',
      })
    }
  }, [lookingForDriverPanel])

  useGSAP(function () {
    if (confirmRidePanel == true) {
      gsap.to(confirmRidePanelRef.current, {
        transform: 'translateY(0)',
      })
    }
    else {
      gsap.to(confirmRidePanelRef.current, {
        transform: 'translateY(100%)',
      })
    }
  }, [confirmRidePanel])

  // useGSAP(function () {
  //   if (waitingForDriverPanel == true) {
  //     gsap.to(waitingForDriverPanelRef.current, {
  //       transform: 'translateY(0)',
  //     })
  //   }
  //   else {
  //     gsap.to(waitingForDriverPanelRef.current, {
  //       transform: 'translateY(100%)',
  //     })
  //   }
  // }, [waitingForDriverPanel])

  return (
    <div className='h-screen relative overflow-hidden'>
      <img src={logo} alt="Uber Logo" className="w-24 ml-4 absolute" />

      <div className='h-screen w-screen'>
        <img className='h-full w-full object-cover' src="https://www.researchgate.net/publication/323759986/figure/fig3/AS:631576123682823@1527590890164/Map-in-Uber-application-tracking-user-in-a-Yellow-Cab.png" alt="" />
      </div>

      <div className='absolute top-0 h-screen flex flex-col justify-end '>
        <div className='p-5 h-[30%] bg-white rounded-t-lg relative'>

          <div className='flex justify-between items-center h-[40px]'>
            <h4 className='text-2xl font-semibold'>Find a trip</h4>
            <h5 ref={buttonRef} className='text-2xl font-semibold  opacity-0  '>
              <button onClick={() => setPanelOpen(false)}>
                <i class="ri-arrow-down-wide-fill"></i>
              </button>
            </h5>

          </div>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}>
            <div className='line absolute h-16 top-[45%] left-[10%] w-[2px] bg-gray-800 rounded-full '></div>
            <input type="text" placeholder="Add a pick-up location"
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value)
                setPanelOpen(true);
              }}
              className='bg-[#eee] px-8 py-2 text-md  rounded-md w-full mt-3' />
            <input type="text" placeholder="Enter your destination"
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value)
                setPanelOpen(true);
              }}
              className='bg-[#eee] px-8 py-2 text-md  rounded-md w-full mt-5' />
          </form>
        </div>
        <div ref={panelRef} className='h-[0%] hidden bg-white'>
          <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel} />
        </div>
      </div>

      <div ref={vehiclePanelRef} className='fixed z-10 bottom-0 bg-white w-full py-3 px-5 flex flex-col gap-2 items-start justify-start translate-y-full rounded-2xl overflow-hidden'>

        <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel} />


      </div>

      <div ref={confirmRidePanelRef} className=' fixed bottom-0 z-10 w-full bg-white translate-y-[100%] overflow-hidden rounded-2xl py-3 px-5'>

        <RidePanel setConfirmRidePanel={setConfirmRidePanel} setLookingForDriverPanel={setLookingForDriverPanel} />

      </div>

      <div ref={lookingForDriverPanelRef} className=' fixed bottom-0 z-10 w-full translate-y-[100%] bg-white overflow-hidden rounded-2xl py-3 px-5'>

        <LookingForDriver />
      </div>


      <div ref={waitingForDriverPanelRef} className=' fixed bottom-0 z-20 w-full translate-y-[100%] bg-white overflow-hidden rounded-2xl py-3 px-5'>

        <WaitingForDriver />
      </div>


    </div>
  )
}

export default Home