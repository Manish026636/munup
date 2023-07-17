import React from 'react'
import RollCallCheck from './RollCallCheck'
import RollCallResult from './RCResult'

const RCDashboard = () => {
    return (
        <div>
            <div class="flex flex-col gap-8 h-auto w-auto rounded-3xl mx-28 bg-[#F7F7F7] mt-8 p-4  md:flex-row justify-center items-center">
                <RollCallCheck/>
                <RollCallResult/>
            </div>



        </div>
    )
}

export default RCDashboard
