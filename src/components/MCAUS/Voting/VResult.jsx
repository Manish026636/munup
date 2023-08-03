import React from 'react'
import { Link } from 'react-router-dom'
const VResult = () => {
  return (
    <>
    <div className="bg-white pb-4   shadow-lg rounded-3xl  w-full lg:w-[50vh]">
    <div className="flex items-center justify-center h-20 bg-[#181818] rounded-t-3xl mb-4">
        <h2 className="text-2xl text-white font-semibold">Voting Result</h2>
    </div>


    <div class="flex mx-10 mt-10 lg:mt-28">
        <div class="w-8 h-8 bg-[#37D3AD] rounded-lg "></div>
        <span class="ml-4 text-lg text-[#555555] font-semibold">Favor</span>
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
        <div class="w-8 h-8 bg-[#FF6868]  rounded-lg "></div>
        <span class="ml-4 text-lg text-[#555555] font-semibold">Against</span>
    </div>
    <div className="flex justify-center items-center mt-8">
        <div class="flex w-2/3 h-10 bg-white border border-[#ADADAD] rounded-xl overflow-hidden dark:bg-gray-700">
            <div
                class="flex  flex-col justify-center overflow-hidden bg-[#FF6868] "
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
        <span class="ml-4 text-lg text-[#555555] font-semibold">Abstain</span>
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

</div>
    </>
  )
}

export default VResult
