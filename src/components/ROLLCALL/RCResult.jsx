import React from 'react'

const RollCallResult = () => {
  return (
    <>
      <div class="bg-white h-[90vh] relative   border-t-[3vh] border-[#F0F0F0] border-t-[#181818] text-center   rounded-3xl w-2/5 p-4">
        <h1 className='text-2xl text-white font-semibold absolute top-0 left-0 right-0 mx-auto bg-[#181818] pb-6 '>Roll Call Result</h1>
        <div class="flex mx-10 mt-28">
          <div class="w-8 h-8 bg-blue-500 rounded-lg "></div>
          <span class="ml-4 text-lg text-[#555555] font-semibold">Present</span>
        </div>
        <div className="flex justify-center items-center mt-8">
          <div class="flex w-2/3 h-10 bg-white border border-[#ADADAD] rounded-xl overflow-hidden dark:bg-gray-700">
            <div
              class="flex  flex-col justify-center overflow-hidden bg-blue-500"
              role="progressbar"
              style={{ width: "75%" }}
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <span class="text-white text-md ml-4 font-semibold">
                4 / 10 ~ 45%
              </span>
            </div>
          </div>
        </div>
        <div class="flex mx-10 mt-10">
          <div class="w-8 h-8 bg-[#37D3AD]  rounded-lg "></div>
          <span class="ml-4 text-lg text-[#555555] font-semibold">Present & Voting</span>
        </div>
        <div className="flex justify-center items-center mt-8">
          <div class="flex w-2/3 h-10 bg-white border border-[#ADADAD] rounded-xl overflow-hidden dark:bg-gray-700">
            <div
              class="flex  flex-col justify-center overflow-hidden bg-[#37D3AD]"
              role="progressbar"
              style={{ width: "75%" }}
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <span class="text-white text-md ml-4 font-semibold">
                4 / 10 ~ 45%
              </span>
            </div>
          </div>
        </div>
        <div class="flex mx-10 mt-10">
          <div class="w-8 h-8 bg-[#6F6F6F] rounded-lg "></div>
          <span class="ml-4 text-lg text-[#555555] font-semibold">Absent</span>
        </div>
        <div className="flex justify-center items-center mt-8">
          <div class="flex w-2/3 h-10 bg-white border border-[#ADADAD] rounded-xl overflow-hidden dark:bg-gray-700">
            <div
              class="flex  flex-col justify-center overflow-hidden bg-[#6F6F6F]"
              role="progressbar"
              style={{ width: "75%" }}
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <span class="text-white text-md ml-4 font-semibold">
                4 / 10 ~ 45%
              </span>
            </div>
          </div>
        </div>
        <div className='mt-28'>
        <button type="button" class="text-white bg-[#2194FF] hover:bg-blue-800 focus:ring-4  font-bold rounded-lg text-lg px-8 py-2 mr-2 mb-2 ">Submit</button>
        </div>
      </div>
    </>
  )
}

export default RollCallResult
