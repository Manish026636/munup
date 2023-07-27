import React from 'react'
import RollCallCheck from './RollCallCheck'
import RollCallResult from './RCResult'

const RCDashboard = () => {
    return (
        <div>
        <div className="flex p-2  flex-col lg:mt-10 lg:mx-40   lg:p-0 md:flex-row gap-4">
                <RollCallCheck/>
                <RollCallResult/>
            </div>



        </div>
    )
}

export default RCDashboard
