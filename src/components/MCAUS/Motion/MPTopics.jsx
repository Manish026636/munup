import React from 'react';

const topics = [
  {
    imageSrc: 'india.png',
    title: 'Galwan Valley Issue',
    country: 'INDIA',
    totalTime: '20 Min',
    delegateTime: '2 Min',
  },
  {
    imageSrc: 'russia.png',
    title: 'NATO Issue',
    country: 'RUSSIA',
    totalTime: '18 Min',
    delegateTime: '2 Min',
  },{
    imageSrc: 'france.png',
    title: 'Climate Change Issue',
    country: 'FRANCE',
    totalTime: '14 Min',
    delegateTime: '2 Min',
  },
  // Add more topics as needed
];

const TopicCard = ({ imageSrc, title, country, totalTime, delegateTime }) => {
  return (
    <div className="px-4 gslhead w-full mt-4">
      <div className="bg-white border-2 border-[#F0F0F0] p-2 rounded-xl">
        <div>
          <div className="flex">
            <img
              className="w-10 h-10 lg:w-12 lg:h-12 border border-gray-300 rounded-full"
              src={imageSrc}
              alt=""
            />
            <div className="ml-5 mr-auto">
              <p className="text-xl font-bold text-gray-600">{title}</p>
              <p className="mt-px text-sm lg:text-md text-gray-600">
                Proposing Country :{' '}
                <span className="font-bold text-cyan-600 lg:text-lg">
                  {country}
                </span>
              </p>
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-4 items-center">
            <div className="bg-[#f4f6f9] text-center w-40 py-2 rounded-lg text-gray-700 font-bold">
              <h1 className="border border-b-gray-300 text-xs lg:text-lg">
                Total Time
              </h1>
              <h1 className="mt-1 text-indigo-600 text-xs lg:text-lg">
                {totalTime}
              </h1>
            </div>

            <div className="bg-[#f4f6f9] text-center w-40 py-2 rounded-lg text-gray-700 font-bold">
              <h1 className="border border-b-gray-300 text-xs lg:text-lg">
                Delegate Time
              </h1>
              <h1 className="mt-1 text-indigo-600 text-xs lg:text-lg">
                {delegateTime}
              </h1>
            </div>
          </div>
          <div className="flex justify-center gap-6 mt-6 items-center">
            <button className="bg-[#2194FF] px-4 py-2 text-sm rounded-lg text-white font-bold">
              Vote
            </button>
            <button className="bg-[#37D3AD] px-4 py-2 text-sm rounded-lg text-white font-bold">
              Pass
            </button>
            <button className="bg-[#FF6868] px-4 py-2 text-sm rounded-lg text-white font-bold">
              Fail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const MPTopics = () => {
  return (
    <div className="bg-white overflow-hidden overflow-y-auto scrollbar-hide h-[82vh] pb-4 shadow-lg rounded-3xl w-full ">
      <div className="flex sticky top-0 items-center justify-center h-20 bg-[#181818] rounded-t-3xl mb-4">
        <h2 className="text-2xl text-white font-semibold">Proposed Topics</h2>
      </div>

      <div className="px-4 gslhead w-full mt-4">
        {topics.map((topic, index) => (
          <div key={index} className="flex justify-center items-center">
            <TopicCard {...topic} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MPTopics;
