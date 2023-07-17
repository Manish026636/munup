import React from 'react'

const Dashboard = () => {
    return (
        <div>
            <div className=" ml-16 flex justify-center items-center ">
                <h1 className="text-5xl mt-36  font-bold text-[#555555]">Greetings, Chairperson</h1>
            </div>
            <div className="flex gap-8 justify-center items-center">
                <div className='relative bg-[#f4f6f9]  border-t-[3vh] border-[#F0F0F0] border-t-[#181818] text-center mt-12 w-96 h-80 rounded-2xl '>
                    <h1 className='text-2xl text-white font-semibold absolute top-0 left-0 right-0 mx-auto bg-[#181818] pb-6 '>Committee Name</h1>
                    <h1 className='text-5xl text-[#2194FF] font-bold mt-36'>UNHRC</h1>
                </div>


                <div className='relative bg-[#f4f6f9]  border-t-[3vh] border-[#F0F0F0] border-t-[#181818] text-center mt-12 w-96 h-80 rounded-2xl '>
                    <h1 className='text-2xl text-white font-semibold absolute top-0 left-0 right-0 mx-auto bg-[#181818] pb-6 '>Total Members</h1>
                    <h1 className='text-5xl text-[#2194FF] font-bold mt-36'>25</h1>
                </div>

            </div>
        </div>
    )
}

export default Dashboard
