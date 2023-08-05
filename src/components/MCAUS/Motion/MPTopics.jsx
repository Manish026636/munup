import React from 'react';

const TopicCard = ({ imageSrc, proposedBy, topicName, totalTime, delegateTime }) => {
    return (
        <div className="mx-4 mt-4 flex flex-col h-auto bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            <div className="h-28 flex flex-col justify-center items-center bg-[#f4f6f9] rounded-t-xl">
                <img src={imageSrc} className="rounded-xl" alt={proposedBy} />
            </div>
            <div className="p-4 md:p-6">
                <span className="block mb-1 lg:text-lg text-xs font-semibold text-black dark:text-blue-500">
                    Proposed by : <span className='text-blue-600 font-extrabold'>{proposedBy}</span>
                </span>
                <h3 className="lg:text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
                    Topic Name : {topicName}
                </h3>
                <p className="mt-2 text-gray-700">Total time : {totalTime}</p>
                <p className="mt-2 text-gray-700">Delegate time : {delegateTime}</p>
            </div>
            <div className="flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
                <button className="w-full py-2 px-4 font-semibold inline-flex justify-center items-center gap-2 rounded-bl-xl bg-[#2194FF] text-white shadow-sm align-middle hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-lg sm:p-4 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" href="#">
                    Vote
                </button>
                <button className="w-full py-2 px-4 font-semibold inline-flex justify-center items-center gap-2 bg-[#37D3AD] text-white shadow-sm align-middle hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-lg sm:p-4 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" href="#">
                    Pass
                </button>
                <button className="w-full py-2 px-4 inline-flex justify-center items-center gap-2 rounded-br-xl font-semibold bg-[#FF6868] text-white shadow-sm align-middle hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-lg sm:p-4 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" href="#">
                    Fail
                </button>
            </div>
        </div>
    );
};

const RollCallResult = () => {
    return (
        <div className="bg-white overflow-hidden overflow-y-auto scrollbar-hide h-[80vh] pb-4 shadow-lg rounded-3xl w-full lg:w-[50vh]">
            <div className="flex sticky top-0 items-center justify-center h-20 bg-[#3C4048] rounded-t-3xl mb-4">
                <h2 className="text-2xl text-white font-semibold">Proposed Topics</h2>
            </div>

            <TopicCard imageSrc="india.png" proposedBy="INDIA" topicName="South China Sea" totalTime="20 minutes" delegateTime="2 minutes" />
            <TopicCard imageSrc="russia.png" proposedBy="RUSSIA" topicName="Kalingrad Crisis" totalTime="18 minutes" delegateTime="2 minutes" />
            <TopicCard imageSrc="usa.png" proposedBy="USA" topicName="Rising Tensions in the South China Sea" totalTime="16 minutes" delegateTime="2 minutes" />
            

        </div>
    );
};

export default RollCallResult;
