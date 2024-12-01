import React from 'react'
import 'remixicon/fonts/remixicon.css'


function LocationSearchPanel({setPanelOpen, setVehiclePanel}) {
    const locations = [
        "24B, near Kapoor Cafe, Sheryians Coding School, Bhopal",
        "12A, opposite Central Mall, MG Road, Indore",
        "45C, beside City Park, Rajendra Nagar, New Delhi",
        "78D, near Lotus Temple, Nehru Place, New Delhi",
        "16B, next to Green Valley School, Lake Road, Udaipur",
        "32E, behind Sunshine Plaza, Connaught Place, New Delhi",
        "9F, near Victoria Memorial, Park Street, Kolkata",
        "21G, opposite Infosys Campus, Electronic City, Bangalore",
        "88H, beside Shivaji Park, Dadar, Mumbai",
        "56I, near Gateway of India, Colaba, Mumbai"
    ];

    return (
        <div>
            {
                locations.map((location, index) => (
                    <div key={index} onClick={()=>{
                        setVehiclePanel(true)
                        setPanelOpen(false)
                    }} className='flex gap-4 p-3 border-[2px] border-white active:border-[#eee] rounded-xl items-center my-2 justify-start'>
                        <h2 className='bg-[#eee] flex items-center justify-center rounded-full px-2 py-1'><i className="ri-map-pin-fill"></i></h2>
                        <h4 className='font-medium text-sm'>{location}</h4>
                    </div>
                ))
            }

        </div>
    )
}

export default LocationSearchPanel