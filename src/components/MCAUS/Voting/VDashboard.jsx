import React from 'react'
import VCheck from './VCheck'
import VResult from './VResult'
const VDashboard = () => {
    return (
        <div>
        <div className="flex flex-col  p-2 lg:mx-60 lg:mt-10 lg:p-0 md:flex-row gap-4">
                <VCheck/>
                <VResult/>
            </div>



        </div>
    )
}

export default VDashboard
