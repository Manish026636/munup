import React from 'react'
const MPTopics = () => {
  return (
    <>
      <div class="bg-white h-[90vh] relative   border-t-[3vh] border-[#F0F0F0] border-t-[#181818] text-center   rounded-3xl w-2/5 p-4">
        <h1 className='text-2xl text-white font-semibold absolute top-0 left-0 right-0 mx-auto bg-[#181818] pb-6 '>Proposed Topics</h1>
        <div className='flex mt-10 justify-center items-center'>

          <div className="  lg:px-0 w-full mt-10 mx-auto">
            <div className=" overflow-hidden bg-white border-2 border-[#F0F0F0] p-4 rounded-xl  ">
              <div >
                <div className="flex items-center">
                  <img className="flex-shrink-0 w-12 rounded-lg border border-gray-300 h-auto" src="india.png" alt="" />
                  <div className="ml-5 mr-auto">
                    <p className="text-xl font-bold text-gray-600">Galwan Valley Issue</p>
                    <p className="mt-px text-md text-gray-600">Proposing Country : <span className="font-bold text-cyan-600 text-lg">INDIA</span></p>
                  </div>

                </div>
                <div className='flex justify-center gap-4 mt-4 items-center'>
                  <h1 className='bg-[#f4f6f9]   px-4 py-2  text-md rounded-lg text-gray-700  font-bold'>Total Time : 20 Min</h1>
                  <h1 className='bg-[#f4f6f9]  px-4 py-2  text-md rounded-lg  text-gray-700 font-bold'>Delegate Time : <span>2 Min</span></h1>

                </div>
                <div className='flex justify-center gap-6 mt-6 items-center'>
                  <button className='bg-[#2194FF] px-4 py-2  text-md rounded-lg text-white font-bold'>VOTE</button>
                  <button className='bg-[#37D3AD] px-4 py-2  text-md rounded-lg text-white font-bold'>PASS</button>
                  <button className='bg-[#FF6868] px-4 py-2  text-md rounded-lg text-white font-bold'>FAIL</button>


                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MPTopics
