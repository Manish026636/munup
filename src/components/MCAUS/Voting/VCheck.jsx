import React from 'react'
import { Checkbox } from '@material-tailwind/react'
import VSearch from './VSearch'
import VCountry from './VCountry'
import VPagination from './VPagination'

const VCheck = () => {
    return (
        <>
            <div class="bg-white h-[90vh] relative   border-t-[3vh] border-[#F0F0F0] border-t-[#181818] text-center   rounded-3xl w-2/5 p-4">
                <h1 className='text-2xl text-white font-semibold absolute top-0 left-0 right-0 mx-auto bg-[#181818] pb-6 '>Voting</h1>

                <div className='flex justify-center gap-4 mt-16 items-center'>
                    <div className='lg:mt'>
                        <Checkbox id="ripple-on" className="border-blue-500 bg-[#FFFFFF]" style={{ transform: 'scale(1.4)' }} />
                        <label className='text-lg text-[#555555] font-semibold'>All Favor</label>
                    </div>
                    <div className='lg:mt'>
                        <Checkbox id="ripple-off" className="border-[#00bcd4] bg-[#FFFFFF]" color="cyan" style={{ transform: 'scale(1.4)' }} />
                        <label className='text-lg text-[#555555] font-semibold'>All Against</label>

                    </div>
                    <div className='lg:mt'>
                        <Checkbox  className="border-gray-600 bg-[#FFFFFF]" color="gray" style={{ transform: 'scale(1.4)' }} />
                        <label className='text-lg text-[#555555] font-semibold'>All Abstain</label>

                    </div>
                </div>
                <div className='mx-4 mt-4'>
                <VSearch/>
                </div>
                <div className='mx-4 mt-2'>
                <VCountry/>
                </div>
                <div className='mx-4 mt-6'>
                <VPagination/>
                </div>

            </div>
        </>
    )
}

export default VCheck
