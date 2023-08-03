import React from 'react'
import { Checkbox } from '@material-tailwind/react'
import RCSearch from './RCSearch'
import RCCountry from './RCCountry'
import RCPagination from './RCPagination'

const RollCallCheck = () => {
    return (
        <>
        <div className="bg-white pb-4  shadow-lg rounded-3xl w-full   lg:w-[50vh] ">
                <div className="flex items-center justify-center h-20 bg-[#181818] rounded-t-3xl mb-4">
                    <h2 className="text-2xl text-white font-semibold">Roll Call</h2>
                </div>
                <div className="flex items-center justify-center  mt-4">
                    <Checkbox id="ripple-on" className="border-blue-500 bg-[#FFFFFF]" style={{ transform: 'scale(1.2)' }} />
                    <label htmlFor="check1" className='mr-4 text-md lg:text-lg text-[#555555] font-semibold'>All Present</label>
                    <Checkbox id="ripple-off" className="border-[#00bcd4] bg-[#FFFFFF]" color="cyan" style={{ transform: 'scale(1.2)' }} />
                    <label htmlFor="check2" className='text-md lg:text-lg text-[#555555] font-semibold'>All P & V</label>
                </div>
                <div className="relative mx-4 flex items-center justify-center mt-4">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input
                        type="text"
                        placeholder="Search Delegates "
                        className="block p-2 pl-10 border border-gray-300 text-md rounded-2xl px-4 py-2 bg-white w-full "

                    />
                    <button type="submit" class="text-white  absolute right-2.5 bottom-1.5 bg-[#4D4D4D] hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm px-2 lg:px-4 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>


                </div>
                <div className='mt-4 mx-6 lg:mx-10'>
                    <RCCountry />
                </div>
                <div className='mt-4'>
                    <RCPagination />
                </div>

            </div>

        </>
    )
}

export default RollCallCheck
