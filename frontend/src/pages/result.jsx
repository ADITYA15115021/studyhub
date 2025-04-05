
import { useLocation, useNavigate } from "react-router-dom"


export default function Result(){

    const location = useLocation();
    const data = location.state || {};
    const { limit,userscore,timeTaken,questions, userResponses } = data;

    const navigate = useNavigate();

    return (
        <>

<div className="min-h-screen bg-gray-100 flex flex-col items-center px-4 py-10 space-y-10">

{/* Quiz Result Card */}
<div className="bg-white rounded-2xl shadow-lg w-full max-w-4xl p-10 flex flex-col items-center space-y-10">
  <h1 className="text-4xl font-bold text-gray-800 border-b border-gray-300 pb-4 w-full text-center">
    Your Quiz Result
  </h1>

  <div className="flex flex-col md:flex-row justify-center gap-10 w-full">
    <div className="bg-gray-50 rounded-xl shadow-inner flex-1 p-8 text-center border border-gray-200">
      <div className="text-gray-600 text-xl mb-2">Your Score</div>
      <div className="text-4xl font-extrabold text-green-600">
        {userscore} / {limit}
      </div>
    </div>
    <div className="bg-gray-50 rounded-xl shadow-inner flex-1 p-8 text-center border border-gray-200">
      <div className="text-gray-600 text-xl mb-2">Time Taken</div>
      <div className="text-2xl font-bold text-blue-600">
        {timeTaken}
      </div>
    </div>
  </div>

  <div className="flex gap-6">
    <button
      onClick={() => navigate("/home")}
      className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition"
    >
      Go Home
    </button>
    <button
      onClick={() => navigate("/quiz")}
      className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
    >
      Retake Quiz
    </button>
  </div>
</div>

{/* Questions & Answers List */}
<div className="w-full max-w-4xl space-y-4">
  {questions.map((q, idx) => (
    <div key={idx} className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
      <div className="font-semibold text-gray-800 mb-2">
        Q{idx + 1}: {q.question}
      </div>
      <div className="text-green-600 font-medium">
        Correct Answer: {q.answer}
      </div>
      <div
        className={`font-medium ${
          userResponses[idx] === q.answer ? "text-green-500" : "text-red-500"
        }`}
      >
        Your Answer: {userResponses[idx] || "No answer"}
      </div>
    </div>
  ))}
</div>
</div>





    

         {/* <div className="h-screen flex flex-col bg-gray-100">

                <div className="shadow shadow-gray-900 border border-b-gray-600 
                                h-20 flex flex-row items-center px-10
                                text-4xl font-semibold">RESULT 
                </div>

                <div className="h-40 mt-20 flex flex-row justify-evenly">
                    
                    <div className="w-1/4 border shadow-md bg-white flex flex-col justify-center items-center">
                    <div className="h-14 text-3xl font-semicold">SCORE</div>
                    <div className="text-xl ">{userscore}/{limit}</div>
                    </div>

                    <div className="w-1/3 border shadow-md bg-white flex flex-col justify-center items-center">
                    <div className="h-14 text-3xl font-semicold">TIME TAKEN</div>
                    <div className="text-xl">5/5</div>
                    </div>

                </div>

               
         </div> */}
        </>
    )

}