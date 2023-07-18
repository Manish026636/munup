import React from 'react'

const MRegister = () => {
  return (
    <div className='mt-60'>
      <h1 className='text-4xl text-center text-[#555555] font-extrabold '>Do you have any motions on the floor?</h1>
      <div className='mt-12 flex justify-center items-center text-center'>
      <button
      type="button"
      className="text-white  bg-[#343434] hover:bg-blue-800 focus:ring-4 font-bold rounded-xl text-lg px-8 py-3 mr-2 mt-20 mb-2 flex items-center"
    >
      <img src="folder.png" className='w-6 h-6 mr-2' alt="" />
      <span >Register Motions</span>
    </button>
        </div>
    </div>
    
  )
}

export default MRegister
