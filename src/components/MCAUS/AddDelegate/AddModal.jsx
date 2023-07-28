import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import ModalBody from "./ModalBody";

export default function Example() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <Fragment>
      <Button onClick={handleOpen} className="h-10 gslhead px-5 m-2 text-black font-semibold bg-[#F7F7F7] border border-[#9F9F9F] rounded-xl hover:bg-gray-100">
        Add Delegate
      </Button>
      <Dialog
        size="xs"
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
          <ModalBody />
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
