import React, { useState } from 'react';

const Sidebar = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };
  return (
    <>
    <aside
                className={`w-64 bg-white border border-r-gray-300 text-white ${showSidebar ? 'block' : 'hidden'
                    } md:block md:static absolute inset-y-0 left-0 z-50`}
            >
                {/* Sidebar content goes here */}
                <div className="py-4 px-6 h-screen flex flex-col justify-between">
                    <div>
                        <div className="flex justify-center items-center mb-6">
                            <img
                                className="w-auto h-10"
                                src="MunLogo.png"
                                alt="MUN Logo"
                            />
                        </div>
                        <div class="flex flex-col justify-between flex-1 mt-6">
                            <nav class="flex-1 -mx-3 space-y-3 ">
                                <div className='flex justify-center items-center'>
                                    <div class="p-3 w-2/3  bg-[#FBFBFB] border border-[#F0F0F0] rounded-lg dark:bg-gray-800">
                                        <h2 class="text-sm font-bold text-center text-[#5E5E5E] dark:text-white">Committee Name</h2>
                                        <h1 class="text-lg font-extrabold text-center text-[#2194FF] dark:text-white py-2">UNHRC</h1>
                                        <h2 class="text-sm font-bold text-center text-[#5E5E5E] dark:text-white">Session ID</h2>
                                        <h1 class="text-lg font-extrabold text-center text-[#2194FF] dark:text-white py-2"># 1</h1>

                                    </div>
                                </div>
                                <button class="flex items-center border border-[#F0F0F0] px-3 mt-2 py-2 w-full text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                    </svg>

                                    <span class="mx-2 text-md font-medium">Home</span>
                                </button>
                                <button class="flex items-center mt-2 border border-[#F0F0F0] w-full px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                                    </svg>

                                    <span class="mx-2 text-md font-medium">Roll Call</span>
                                </button>

                                <button class="flex items-center mt-2 border border-[#F0F0F0] w-full px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
                                    </svg>

                                    <span class="mx-2 text-md font-medium">GSL</span>
                                </button>
                                <button class="flex items-center mt-2 border border-[#F0F0F0] w-full px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" />
                                    </svg>

                                    <span class="mx-2 text-md font-medium">Moderated Cocus</span>
                                </button>

                                <button class="flex items-center border border-[#F0F0F0] w-full px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                                    </svg>

                                    <span class="mx-2 text-md font-medium">Unmoderated Cocus</span>
                                </button>
                                <button class="flex items-center border  border-[#F0F0F0] w-full px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                    </svg>

                                    <span class="mx-2 text-md font-medium">Report</span>
                                </button>

                            </nav>
                        </div>

                    </div>
                    <div>
                        <button class="flex justify-center items-center  border border-[#FF6868] w-full px-3 py-2   text-gray-600 transition-colors duration-300 transform rounded-lg  hover:bg-gray-100  hover:text-white" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <rect width="20" height="20" x="2" y="2" rx="4" ry="4" fill="#FF0000" />
                                <line x1="6" y1="6" x2="18" y2="18" stroke="#FFFFFF" stroke-width="2" />
                                <line x1="6" y1="18" x2="18" y2="6" stroke="#FFFFFF" stroke-width="2" />
                            </svg>


                            <span class="mx-2 text-md text-[#FF6868] font-medium">End Session</span>
                        </button>
                        <div class="mt-6">


                        <div class="flex items-center justify-between mt-6">
                            <a href="#" class="flex items-center gap-x-2">
                                <img class="object-cover rounded-full h-7 w-7" src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="avatar" />
                                <span class="text-sm font-medium text-gray-700 dark:text-gray-200">Manish Kumar</span>
                            </a>

                            <a href="#" class="text-gray-500 transition-colors duration-200 rotate-180 dark:text-gray-400 rtl:rotate-0 hover:text-blue-500 dark:hover:text-blue-400">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    </div>
                </div>
            </aside>
            <button
                className="md:hidden fixed bottom-4 right-4 bg-blue-500 text-white p-2 rounded"
                onClick={toggleSidebar}
            >
                {showSidebar ? 'Hide Sidebar' : 'Show Sidebar'}
            </button>
            </>
            
  )
}

export default Sidebar
