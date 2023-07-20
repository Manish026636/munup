import React from 'react'
import { Checkbox } from '@material-tailwind/react'
import GSLSearch from '../../GSLSearch'
import Country from './Country'
import Pagination from './Pagination'

const ModalCountry = () => {
    return (
        <>
            <div className="bg-white  relative mt-4  border-[#F0F0F0]  text-center rounded-3xl w-full  flex flex-col justify-center items-center">

                <div className='flex justify-center gap-4  items-center'>
                    <div className='lg:mt'>
                        <Checkbox id="ripple-on" className="border-blue-500 bg-[#FFFFFF]" style={{ transform: 'scale(1.4)' }} />
                        <label className='text-lg text-[#555555] font-semibold'>Select all</label>
                    </div>
                    <div className='lg:mt'>
                        <Checkbox id="ripple-off" className="border-[#00bcd4] bg-[#FFFFFF]" color="cyan" style={{ transform: 'scale(1.4)' }} />
                        <label className='text-lg text-[#555555] font-semibold'>Deselect all</label>
                    </div>
                </div>
                <div className='w-full mx-4 mt-4'>
                    <GSLSearch/>
                </div>
                <div className='mx-4 mt-2'>
                    <Country/>
                </div>
                <div className='mx-4 mt-4'>
                    <Pagination/>
                </div>
                
            </div>
        </>
    )
}

export default ModalCountry
