import React from 'react'
import { Link } from 'react-router-dom'
const VResult = () => {
  return (
    <>
      <div class="bg-white h-[90vh] relative   border-t-[3vh] border-[#F0F0F0] border-t-[#181818] text-center   rounded-3xl w-2/5 p-4">
        <h1 className='text-2xl text-white font-semibold absolute top-0 left-0 right-0 mx-auto bg-[#181818] pb-6 '>Voting Result</h1>
        <div class="flex mx-10 mt-20">
          <div class="w-8 h-8 bg-[#37D3AD] rounded-lg "></div>
          <span class="ml-4 text-lg text-[#555555] font-semibold">Favor</span>
        </div>
        <div className="flex justify-center items-center mt-8">
          <div class="flex w-2/3 h-10 bg-white border border-[#ADADAD] rounded-xl overflow-hidden dark:bg-gray-700">
            <div
              class="flex  flex-col justify-center overflow-hidden bg-[#37D3AD]"
              role="progressbar"
              style={{ width: "57.14%" }}
              aria-valuenow="57.14"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <span class="text-white text-md ml-4 font-semibold">
                4 / 7 ~ 57.14 %
              </span>
            </div>
          </div>
        </div>
        <div class="flex mx-10 mt-10">
          <div class="w-8 h-8 bg-[#FF6868]  rounded-lg "></div>
          <span class="ml-4 text-lg text-[#555555] font-semibold">Against</span>
        </div>
        <div className="flex justify-center items-center mt-8">
          <div class="flex w-2/3 h-10 bg-white border border-[#ADADAD] rounded-xl overflow-hidden dark:bg-gray-700">
            <div
              class="flex  flex-col justify-center overflow-hidden bg-[#FF6868]"
              role="progressbar"
              style={{ width: "28.57%" }}
              aria-valuenow="28.57"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              
            </div>
            <span class="text-gray-600 py-2 text-md ml-4 font-semibold">
                2 / 7 ~ 28.57 %
              </span>
          </div>
        </div>
        <div class="flex mx-10 mt-10">
          <div class="w-8 h-8 bg-[#6F6F6F] rounded-lg "></div>
          <span class="ml-4 text-lg text-[#555555] font-semibold">Abstain</span>
        </div>
        <div className="flex justify-center items-center mt-8">
          <div class="flex w-2/3 h-10 bg-white border border-[#ADADAD] rounded-xl overflow-hidden dark:bg-gray-700">
            <div
              class="flex  flex-col justify-center overflow-hidden bg-[#6F6F6F]"
              role="progressbar"
              style={{ width: "14.28%" }}
              aria-valuenow="14.28"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              
            </div>
            <span class="text-gray-600 py-2 text-md ml-4 font-semibold">
                1 / 7 ~ 14.28 %
              </span>
          </div>
        </div>
        <div className="flex justify-center items-center mt-10">
          <div class="flex w-5/6 h-20 bg-white  rounded-xl overflow-hidden dark:bg-gray-700">
            <div
              class="flex  flex-col justify-center overflow-hidden bg-[#37D3AD]"
              role="progressbar"
              style={{ width: "100%" }}
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <span class="text-white text-xl ml-4 font-semibold">
              Voting Passed by 57.14 %
              </span>
            </div>
          </div>
        </div>
        <div className='mt-12'>
        
        <Link to="/MCDashboard"><button type="button" class="text-white bg-[#2194FF] hover:bg-blue-800 focus:ring-4  font-bold rounded-lg text-lg px-8 py-2 mr-2 mb-2 ">Proceed</button></Link>
        </div>
      </div>
    </>
  )
}

export default VResult
