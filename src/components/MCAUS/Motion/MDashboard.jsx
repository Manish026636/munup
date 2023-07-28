import React from 'react'
import MForm from './MForm'
import MPTopics from './MPTopics'
const MDashboard = () => {
    return (
        <div>
        <div className="flex  p-2  flex-col lg:mt-10 lg:mx-48   lg:p-0 md:flex-row gap-4">
                <MForm/>
                <MPTopics/>
            </div>



        </div>
    )
}

export default MDashboard
