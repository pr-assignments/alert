import { useState } from "react";
function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gray-100">
      <button
        onClick={() => setOpen(!open)}
        className="px-4 py-2 mb-4 text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 transition"
      >
        {open ? "Close Alert" : "Open Alert"}
      </button>
      <div className="min-h-40">
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            open
              ? "max-h-40 opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-2"
          }`}
        >
          <div className="p-4 w-80 text-sm text-blue-800 rounded-lg bg-blue-50 border border-blue-300 shadow">
            <span className="font-medium">Info:</span> This is your alert
            message!
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
