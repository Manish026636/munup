import React from 'react'
import { Link } from 'react-router-dom'
const MRegister = () => {
  return (
    <div className='mt-60'>
      <h1 className='text-4xl text-center gslhead text-[#555555] font-extrabold '>Do you have any motions on the floor?</h1>
      <div className='mt-12 flex justify-center items-center text-center'>
      <Link to="/MDashboard"><button
      type="button"
      className="text-white  bg-[#343434] hover:bg-blue-800 focus:ring-4 font-bold rounded-xl text-lg px-8 py-3 mr-2 mt-20 mb-2 flex items-center"
    >
      <img src="folder.png" className='w-6 h-6 mr-2' alt="" />
      <span className='gslhead' >Register Motions</span>
    </button></Link>
        </div>
    </div>
    
  )
}

export default MRegister
