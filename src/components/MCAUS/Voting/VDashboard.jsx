import React from 'react'
import VCheck from './VCheck'
import VResult from './VResult'
const VDashboard = () => {
    return (
        <div>
        <div className="flex p-2  flex-col lg:mt-10 lg:mx-40   lg:p-0 md:flex-row gap-4">
                <VCheck/>
                <VResult/>
            </div>



        </div>
    )
}

export default VDashboard
