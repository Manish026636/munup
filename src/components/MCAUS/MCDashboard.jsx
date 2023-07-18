import React from 'react'
import MCCountry from './MCCountry'
import MCSearch from './MCSearch'
const MCDashboard = () => {
    return (
        <div className='mx-28'>
            <div className="flex flex-wrap gap-8 mt-6 mx-6 ">
                <div className="w-full  bg-[#E7EBEA] h-40 rounded-xl ">

                    <h1 className='ml-4 text-center mt-4  text-4xl gslhead text-[#343434] font-extrabold'>India the new Super Power</h1>
                    <p className='ml-4 text-center mt-4  text-lg  text-[#343434] font-bold'>Proposed by : <span className='font-extrabold text-[#2194FF]'>USA</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Total time : <span className='font-extrabold text-[#2194FF]'>18 minutes</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Delegate : <span className='font-extrabold text-[#2194FF]'>2 minutes </span></p>

                    <div className='text-center mt-2 '>
                    <button class="h-10 px-5 text-black font-semibold bg-[#F7F7F7] border border-[#9F9F9F] rounded-xl hover:bg-gray-100">Add</button>
                    </div>
                </div>

            </div>
            <div class="flex flex-col gap-8 mt-6 mx-6 md:flex-row">
                <div class="w-full md:w-4/12">
                    <button class="h-10 px-5 m-2 text-white font-semibold bg-[#2194FF] rounded-xl hover:bg-blue-700">Upcoming</button>
                    <button class="h-10 px-5 m-2 text-white font-semibold bg-[#37D3AD] rounded-xl hover:bg-gray-700">Completed</button>

                </div>
                <div class="w-full md:w-7/12 m-2">
                    <MCSearch />
                </div>
            </div>
            <div class="mx-6 mt-6">
                <MCCountry />
            </div>


        </div>
    )
}

export default MCDashboard
