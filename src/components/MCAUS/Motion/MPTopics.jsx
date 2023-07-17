import React from "react";

const TopicCard = ({ imageSrc, title, country, totalTime, delegateTime }) => {
  return (
    <div className="lg:px-0 w-full mt-4 mx-auto">
      <div className=" bg-white border-2 border-[#F0F0F0] p-4 rounded-xl">
        <div>
          <div className="flex items-center">
            <img
              className="w-12 h-12 border border-gray-300 rounded-full"
              src={imageSrc}
              alt=""
            />
            <div className="ml-5 mr-auto">
              <p className="text-xl font-bold text-gray-600">{title}</p>
              <p className="mt-px text-md text-gray-600">
                Proposing Country :{" "}
                <span className="font-bold text-cyan-600 text-lg">
                  {country}
                </span>
              </p>
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-4 items-center">
            <h1 className="bg-[#f4f6f9] px-4 py-2 text-md rounded-lg text-gray-700 font-bold">
              Total Time: {totalTime}
            </h1>
            <h1 className="bg-[#f4f6f9] px-4 py-2 text-md rounded-lg text-gray-700 font-bold">
              Delegate Time: <span>{delegateTime}</span>
            </h1>
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
  const topics = [
    {
      imageSrc: "india.png",
      title: "Galwan Valley Issue",
      country: "INDIA",
      totalTime: "20 Min",
      delegateTime: "2 Min",
    },
    {
      imageSrc: "russia.png",
      title: "Conflicts with Japan",
      country: "RUSSIA",
      totalTime: "18 Min",
      delegateTime: "2 Min",
    },
    {
      imageSrc: "usa.png",
      title: "Global Warming",
      country: "USA",
      totalTime: "16 Min",
      delegateTime: "2 Min",
    },
    {
      imageSrc: "france.png",
      title: "Nuclear Disarmament",
      country: "FRANCE",
      totalTime: "14 Min",
      delegateTime: "2 Min",
    },
    // Add more topics as needed
  ];

  return (
    <>
      <div className="bg-white overflow-hidden scrollbar-hide h-[90vh] relative border-t-[3vh] border-[#F0F0F0] border-t-[#181818] text-center rounded-3xl w-2/5 p-4 overflow-y-auto overscroll-contain">
        <h1 className="text-2xl text-white font-semibold absolute top-0 left-0 right-0 mx-auto bg-[#181818] pb-6">
          Proposed Topics
        </h1>
        <div className="flex flex-col mt-10 justify-center items-center">
          {topics.map((topic, index) => (
            <div key={index} className="flex justify-center items-center">
              <TopicCard {...topic} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MPTopics;
