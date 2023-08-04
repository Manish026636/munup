import React from 'react';
import TimeFedModal from './TimeFedModal';
const GSLCountry = () => {
  const data = [
    {
    Srno: '1',
    imageUrl: "india.png", 
    label: "INDIA",
    DelegateName: 'Manish Kumar',
    Onspeech: 'Start',
    Ofspeech: 'Stop',
    },
    {
        Srno: '2',
        imageUrl: "usa.png", label: "USA",
        DelegateName: 'Joe Denver',
      Onspeech: 'Start',
      Ofspeech: 'Stop',
    },
    {
        Srno: '3',
        imageUrl: "australlia.png", 
        label: "AUSTRALLIA",
        DelegateName: 'Anite Lopea',
      Onspeech: 'Start',
      Ofspeech: 'Stop',
    },
    {
        Srno: '4',
        imageUrl: "russia.png",
         label: "RUSSIA",
      DelegateName: 'Nikita Schewn',
      Onspeech: 'Start',
      Ofspeech: 'Stop',
    },
    {
        Srno: '5',
        imageUrl: "france.png", 
        label: "FRANCE",
        DelegateName: 'Frendo Gresoa',
      Onspeech: 'Start',
      Ofspeech: 'Stop',
    },
    {
        Srno: '6',
        imageUrl: "germany.png", 
        label: "GERMANY",
        DelegateName: 'Himola Totpa',
      Onspeech: 'Start',
      Ofspeech: 'Stop',
    },
    {
        Srno: '7',
        imageUrl: "india.png", 
        label: "INDIA",
        DelegateName: 'Manish Kumar',
      Onspeech: 'Start',
      Ofspeech: 'Stop',
    },
    {
      Srno: '7',
      imageUrl: "india.png", 
      label: "INDIA",
      DelegateName: 'Manish Kumar',
    Onspeech: 'Start',
    Ofspeech: 'Stop',
  },
    
  ];

  return (
    <div className="overflow-y-auto w-[140vh]  scrollbar-hide max-h-[500px] shadow-md sm:rounded-lg">
      <table className="w-full  text-sm text-left text-[#414141]">
        <thead className="text-lg sticky top-0  bg-[#343434] text-white">
          <tr>
            <th scope="col" className="px-6 py-3">
              Sr.no
            </th>
            <th scope="col" className="px-6 py-3">
              Country
            </th>
           
            <th scope="col" className="px-6 py-3">
              Delegate Name
            </th>
            <th scope="col" className="px-6 py-3">
              Speech Action
            </th>
            <th scope="col" className="px-6 py-3">
              Feedback Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
            >
              <th scope="row" className="px-6 py-4  text-lg font-bold text-[#414141]">
                {item.Srno}
              </th>
              <td className="px-6 py-1">
                  <div className="flex items-center">
                    <img
                      src={item.imageUrl}
                      alt={item.label}
                      className="w-8 h-8 border border-gray-300 rounded-full"
                    />
                    <span className="ml-3 text-[#414141] font-bold text-lg">{item.label}</span>
                  </div>
                </td>
              <td className="px-6 py-4 text-[#414141] font-semibold text-lg">{item.DelegateName}</td>
              <td className="px-6 py-2 ">
            
              <TimeFedModal/>

             </td>
              <td className="flex justify-center items-center gap-4 px-6 py-4">
                <img src='edit.png' alt='edit' className='w-8 h-8'/>
                <img src='view.png' alt='delete' className='w-8 h-8'/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GSLCountry;
