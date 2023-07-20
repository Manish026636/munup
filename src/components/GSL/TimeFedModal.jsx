import { Fragment, useState } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";

export default function Example() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);
    const tableData = [
        { imageUrl: "india.png", label: "INDIA", id: "present1" },

    ];

    return (
        <Fragment>
            <Button onClick={handleOpen} className="bg-black">
                Start
            </Button>
            <Dialog
                open={open}
                handler={handleOpen}
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0.9, y: -100 },
                }}
            >
                <div className="flex mt-4 justify-center text-center" >
                    <DialogHeader className="text-2xl text-[#7e7d7d]" >Current Speaker : <div className="flex items-center">
                        <span className="ml-3 text-[#5E5E5E] font-bold gslhead text-2xl">India </span>&nbsp;
                        <img
                            src='india.png'
                            alt={tableData.label}
                            className="w-8 h-8 border border-gray-300 rounded-full"
                        />
                    </div></DialogHeader>

                </div>
                <div>
                    <h1 className=" text-center text-[#6DB9FF] gslhead font-extrabold text-4xl">1 min : 30 sec </h1>&nbsp;
                </div>
                <div className="flex justify-center items-center gap-4 ">
                    <Button className="bg-[#4D4D4D] py-2 px-4">
                        <span>Stop</span>
                    </Button>
                    <Button className="bg-[#4D4D4D] py-2 px-4">

                        <span>Reset</span>
                    </Button>
                </div>
                <DialogBody >
                <div class="grid gslhead mt-4 grid-cols-1 md:grid-cols-2 gap-4">
                    <div class=" mx-4">
                        <label for="base-input" class="block mb-2 text-md font-bold text-[#555555] dark:text-white">Opening Statement</label>
                        <input type="number" id="base-input" placeholder='Enter the rating out of 5' class="bg-white border border-[#CACACA] text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div class=" mx-4">
                        <label for="base-input" class="block mb-2 text-md font-bold text-[#555555] dark:text-white">Closing Statement</label>
                        <input type="number" id="base-input" placeholder='Enter the rating out of 5' class="bg-white border border-[#CACACA] text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div class=" mx-4">
                        <label for="base-input" class="block mb-2 text-md font-bold text-[#555555] dark:text-white">Foreign Policy</label>
                        <input type="number" id="base-input" placeholder='Enter the rating out of 5' class="bg-white border border-[#CACACA] text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div class=" mx-4">
                        <label for="base-input" class="block mb-2 text-md font-bold text-[#555555] dark:text-white">POI</label>
                        <input type="number" id="base-input" placeholder='Enter the rating out of 5' class="bg-white border border-[#CACACA] text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div class=" mx-4">
                        <label for="base-input" class="block mb-2 text-md font-bold text-[#555555] dark:text-white">Marks on Chits</label>
                        <input type="number" id="base-input" placeholder='Enter the rating out of 5' class="bg-white border border-[#CACACA] text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                   
                </div>
                <div class="mt-4  gslhead mx-4">
                        <label for="base-input" class="block mb-2 text-md font-bold text-[#555555] dark:text-white">Note</label>
                        <input type="text" id="base-input" placeholder='Enter detailed feedback' class="bg-white border border-[#CACACA] text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-8  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                </DialogBody>
                <DialogFooter className="flex justify-center items-center gap-4 ">
          <Button className="bg-[#4D4D4D]" onClick={handleOpen}>
            <span>Close</span>
          </Button>
          <Button className="bg-[#2194FF]">
            <span>Submit</span>
          </Button>
        </DialogFooter>
            </Dialog>
        </Fragment>
    );
}