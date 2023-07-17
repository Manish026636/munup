import React from 'react'
import VCheck from './VCheck'
import VResult from './VResult'
const VDashboard = () => {
    return (
        <div>
            <div class="flex flex-col gap-8 h-auto w-auto rounded-3xl mx-28 bg-[#F7F7F7] mt-8 p-4  md:flex-row justify-center items-center">
                <VCheck/>
                <VResult/>
            </div>



        </div>
    )
}

export default VDashboard
