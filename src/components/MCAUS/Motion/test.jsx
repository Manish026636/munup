<div className="lg:px-0  gslhead w-full mt-4 mx-auto">
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
            <Link to="/VDashboard"><button className="bg-[#2194FF] px-4 py-2 text-sm rounded-lg text-white font-bold">
              Vote
            </button></Link>
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