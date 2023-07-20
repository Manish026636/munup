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
 
  return (
    <Fragment>
      <Button onClick={handleOpen} className="h-10 px-5 m-2 text-black font-semibold bg-[#F7F7F7] border border-[#9F9F9F] rounded-xl hover:bg-gray-100">
       Set GSL Time
      </Button>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
        // Custom style to make the modal smaller
        style={{ maxWidth: "400px" }}
      >
        <DialogBody >
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="mt-4 mx-4">
              <label for="base-input" class="block mb-2 text-md font-bold text-[#555555] dark:text-white">Minutes</label>
              <input type="number" id="base-input" placeholder='Enter Minutes' class="bg-white border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div class="mt-4 mx-4">
              <label for="base-input" class="block mb-2 text-md font-bold text-[#555555] dark:text-white">Seconds</label>
              <input type="number" id="base-input" placeholder='Enter Seconds' class="bg-white border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
          </div>
        </DialogBody>
        <DialogFooter className="gap-4">
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
