import { CheckCircleIcon } from "@heroicons/react/16/solid";
import { EyeIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import CloseIcon from "./CloseIcon";
function App() {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen  w-full bg-gray-100 p-4">
      <div className="flex flex-col gap-4 max-w-[854px] mx-auto">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="px-3 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition w-fit"
        >
          <span className="text-xs font-medium leading-normal">
            {open ? "Close Alert" : "Open Alert"}
          </span>
        </button>
        <div className="h-full">
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              open ? "opacity-100 translate-y-0" : " opacity-0 -translate-y-2"
            }`}
          >
            <div className="p-4 flex flex-col gap-3 w-full text-red-800 rounded-[6px] bg-red-50 border border-red-400">
              <div className="flex flex-row justify-between">
                <div className="flex  items-center gap-[6px]">
                  <CheckCircleIcon className="w-[16px] h-[16px]"></CheckCircleIcon>
                  <span className="leading-normal font-semibold text-base">
                    Alert heading
                  </span>
                </div>
                <button
                  className="w-[12px] h-[12px]"
                  onClick={() => setOpen((prev) => !prev)}
                >
                  <CloseIcon />
                </button>
              </div>
              <span className="leading-normal font-normal text-sm">
                Aww yeah, you successfully read this important alert message.
                This example text is going to run a bit longer so that you can
                see how spacing within an alert works with this kind of content.
              </span>
              <button
                onClick={() => alert("Nothing to see here...")}
                className="flex flex-row items-center gap-2 px-3 py-2 text-white bg-red-600 rounded-lg w-fit"
              >
                <EyeIcon className="w-[12px] h-[12px]"></EyeIcon>
                <span className="text-xs font-medium leading-normal">
                  View more
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
