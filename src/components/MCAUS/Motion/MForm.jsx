import React from 'react'


const MForm = () => {
    return (
        <>
            <div class="bg-white h-[90vh] relative   border-t-[3vh] border-[#F0F0F0] border-t-[#181818]   rounded-3xl w-2/5 p-4">
                <h1 className='text-2xl text-center text-white font-semibold absolute top-0 left-0 right-0 mx-auto bg-[#181818] pb-6 '>Motion Form</h1>
                <div class="mt-28 mx-4">
                    <label for="base-input" class="block mb-2 text-md font-bold text-[#555555] dark:text-white">Topic Name</label>
                    <input type="text" id="base-input" placeholder='Enter Topic Name' class="bg-white border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="mt-10 mx-4">
                        <label for="base-input" class="block mb-2 text-md font-bold text-[#555555] dark:text-white">Total Time</label>
                        <input type="number" id="base-input" placeholder='Enter Minutes' class="bg-white border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div class="mt-10 mx-4">
                        <label for="base-input" class="block mb-2 text-md font-bold text-[#555555] dark:text-white">&nbsp;</label>
                        <input type="number" id="base-input" placeholder='Enter Seconds' class="bg-white border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="mt-10 mx-4">
                        <label for="base-input" class="block mb-2 text-md font-bold text-[#555555] dark:text-white">Delegate Time</label>
                        <input type="number" id="base-input" placeholder='Enter Minutes' class="bg-white border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div class="mt-10 mx-4">
                        <label for="base-input" class="block mb-2 text-md font-bold text-[#555555] dark:text-white">&nbsp;</label>
                        <input type="number" id="base-input" placeholder='Enter Seconds' class="bg-white border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                </div>
                <div class="mt-10 mx-4">
                    <label for="base-input" class="block mb-2 text-md font-bold text-[#555555] dark:text-white">Proposing Country</label>
                    <input type="text" id="base-input" placeholder='Enter the Country name' class="bg-white border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div className=' text-center mt-20'>
        <button type="button" class="text-white bg-[#2194FF] hover:bg-blue-800 focus:ring-4  font-bold rounded-lg text-lg px-8 py-2 mr-2 mb-2 ">Submit</button>
        </div>

            </div>

        </>
    )
}

export default MForm
