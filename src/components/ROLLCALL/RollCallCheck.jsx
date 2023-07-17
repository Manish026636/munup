import React from 'react'
import { Checkbox } from '@material-tailwind/react'
import RCSearch from './RCSearch'
import RCCountry from './RCCountry'
import RCPagination from './RCPagination'

const RollCallCheck = () => {
    return (
        <>
            <div class="bg-white h-[90vh] relative   border-t-[3vh] border-[#F0F0F0] border-t-[#181818] text-center   rounded-3xl w-2/5 p-4">
                <h1 className='text-2xl text-white font-semibold absolute top-0 left-0 right-0 mx-auto bg-[#181818] pb-6 '>Roll Call</h1>

                <div className='flex justify-center gap-4 mt-16 items-center'>
                    <div className='lg:mt'>
                        <Checkbox id="ripple-on" className="border-blue-500 bg-[#FFFFFF]" style={{ transform: 'scale(1.4)' }} />
                        <label className='text-lg text-[#555555] font-semibold'>All Present</label>
                    </div>
                    <div className='lg:mt'>
                        <Checkbox id="ripple-off" className="border-[#00bcd4] bg-[#FFFFFF]" color="cyan" style={{ transform: 'scale(1.4)' }} />
                        <label className='text-lg text-[#555555] font-semibold'>All Present & Voting</label>

                    </div>
                </div>
                <div className='mx-4 mt-4'>
                <RCSearch/>
                </div>
                <div className='mx-4 mt-2'>
                <RCCountry/>
                </div>
                <div className='mx-4 mt-6'>
                <RCPagination/>
                </div>

            </div>
        </>
    )
}

export default RollCallCheck
