import React from 'react';

const Dashboard = () => {


    return (
        <div className="flex justify-center items-center p-2  flex-col lg:mt-48 mt-10   lg:p-0 md:flex-row gap-4">
            <div className="bg-[#f4f6f9] lg:w-2/6 w-full h-60 lg:h-80  pb-4  shadow-lg rounded-3xl   ">
                <div className="flex items-center justify-center h-16 lg:h-20 bg-[#181818] rounded-t-3xl mb-4">
                    <h2 className="text-xl lg:text-2xl text-white font-semibold">Committee Name</h2>
                </div>

                <h1 className='text-center text-[#2194FF] mt-16 lg:mt-24 font-extrabold lg:text-5xl text-4xl'>UNHRC</h1>
            </div>
            <div className="bg-[#f4f6f9] lg:w-2/6 w-full h-60 lg:h-80  pb-4  shadow-lg rounded-3xl  ">
                <div className="flex items-center justify-center h-16 lg:h-20 bg-[#181818] rounded-t-3xl mb-4">
                    <h2 className="text-xl lg:text-2xl text-white font-semibold">Total Members</h2>
                </div>

                <h1 className='text-center text-[#2194FF] mt-16 lg:mt-24 lg:text-5xl font-extrabold text-4xl'>25</h1>
            </div>
           
        </div>
    )
}

export default Dashboard
