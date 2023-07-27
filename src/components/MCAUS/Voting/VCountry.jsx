import React from "react";
import { Checkbox } from "@material-tailwind/react";

const RCCountry = () => {
  const tableData = [
    { imageUrl: "india.png", label: "INDIA", id: "favor1",id2: "against1",id3:"abstain1"},
    { imageUrl: "usa.png", label: "USA", id: "favor2" ,id2: "against2",id3:"abstain2"},
    { imageUrl: "russia.png", label: "RUSSIA", id: "favor3",id2: "against3",id3:"abstain3" },
    { imageUrl: "australlia.png", label: "AUSTRALLIA", id: "favor4",id2: "against4",id3:"abstain4" },
    { imageUrl: "france.png", label: "FRANCE", id: "favor5" ,id2: "against5",id3:"abstain5"},
    { imageUrl: "germany.png", label: "GERMANY", id: "favor6",id2: "against6" ,id3:"abstain6"},
    { imageUrl: "russia.png", label: "RUSSIA", id: "favor7" ,id2: "against7",id3:"abstain7"},
  ];

  return (
    <div style={{ overflowX: "auto", overflowY: "hidden" }}>
      <div className="relative ">
        <table className="w-full text-sm text-left  text-gray-500 dark:text-gray-400 rounded-xl">
          <thead className="text-sm text-gray-700   bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="lg:px-6 px-2 text-xs lg:text-md text-gray-600 py-3">Country</th> {/* Empty th */}
              <th scope="col" className="lg:px-6 px-2 text-xs lg:text-md text-gray-600 py-3">
                Favor
              </th>
              <th scope="col" className="lg:px-6 px-2 text-xs lg:text-md text-gray-600 py-3">
                Against
              </th>
              <th scope="col" className="lg:px-6 px-2 text-xs lg:text-md  text-gray-600 py-3">
                Abstain
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr
                key={index}
                className=" border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="lg:px-6 px-1 py-1">
                  <div className="flex items-center">
                    <img
                      src={item.imageUrl}
                      alt={item.label}
                      className="lg:w-8 w-6 lg:h-8 h-6 border border-gray-300 rounded-full"
                    />
                    <span className="ml-3 text-[#6F6F6F] font-bold text-md lg:text-lg">{item.label}</span>
                  </div>
                </td>
                <td className="lg:px-6 px-1 py-1">
                  <Checkbox
                    id={item.id}
                    className="border-[#9F9F9F] bg-[#FFFFFF]"
                    style={{ transform: "scale(1.2)" }}
                  />
                </td>
                <td className="lg:px-6 px-1 py-1">
                  <Checkbox
                    id={item.id2}
                    className="border-[#9F9F9F] bg-[#FFFFFF]"
                    color="cyan"
                    style={{ transform: "scale(1.2)" }}
                  />
                </td>
                <td className="lg:px-6 px-1 py-1">
                  <Checkbox
                    id={item.id3}
                    className="border-[#9F9F9F] bg-[#FFFFFF]"
                    color="cyan"
                    style={{ transform: "scale(1.2)" }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RCCountry;
