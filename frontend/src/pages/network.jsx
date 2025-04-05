import { useState } from "react"
import { useNavigate } from "react-router-dom";


export default function Newtork(){

    const [number,setNumber] = useState(0);
    const [time,setTime] = useState(0);

    const [showMsg, setShowMsg] = useState(false);
    const navigate = useNavigate();

    const handleStart = () => {
        if (number > 0 && time > 0) {
          navigate("/quiz", { state: { limit: number, time: time } });
        } else {
          setShowMsg(true);
        }
      };
    
      return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
          <div className="grid gap-8 w-full max-w-md">
    
            {/* Question Count Section */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4 text-gray-800">Select Number of Questions</h2>
              <div className="grid grid-cols-3 gap-4">
                <button onClick={() => setNumber(5)} className="py-2 rounded-md bg-gray-200 hover:bg-green-400 transition font-medium">5</button>
                <button onClick={() => setNumber(10)} className="py-2 rounded-md bg-gray-200 hover:bg-green-400 transition font-medium">10</button>
                <button onClick={() => setNumber(20)} className="py-2 rounded-md bg-gray-200 hover:bg-green-400 transition font-medium">20</button>
              </div>
              <p className="mt-3 text-sm text-gray-600">
                Selected: <span className="font-semibold">{number}</span> questions
              </p>
             
            </div>
    
            {/* Timer Section */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4 text-gray-800">Set a Timer</h2>
              <div className="flex justify-between">
                <button onClick={() => setTime(5)} className="w-24 py-2 rounded-md bg-gray-200 hover:bg-green-400 transition font-medium">5 MIN</button>
                <button onClick={() => setTime(10)} className="w-24 py-2 rounded-md bg-gray-200 hover:bg-green-400 transition font-medium">10 MIN</button>
                <button onClick={() => setTime(20)} className="w-24 py-2 rounded-md bg-gray-200 hover:bg-green-400 transition font-medium">20 MIN</button>
              </div>
              <p className="mt-3 text-sm text-gray-600">
                Selected: <span className="font-semibold">{time}</span> minutes
              </p>
            
            </div>
          </div>
    
          {/* Error Message */}
          {showMsg && (
            <p className="mt-6 text-red-500 text-sm font-medium">
              Please select both number of questions and timer!
            </p>
          )}
    
          {/* Start Quiz Button */}
          <button
            onClick={handleStart}
            disabled={number === 0 || time === 0}
            className={`mt-10 w-40 py-2 rounded-md text-white font-semibold transition
              ${number > 0 && time > 0
                ? "bg-green-500 hover:bg-green-600"
                : "bg-gray-400 cursor-not-allowed"
              }`}
          >
            Start Quiz
          </button>
        </div>
      );
    }
