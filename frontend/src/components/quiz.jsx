import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Quiz() {
    const [questions, setQuestions] = useState([]);
    const [userResponses, setUserResponses] = useState([]);
    const [currIndex, setIndex] = useState(0);
    const [error, setError] = useState(null);

    const navigate = useNavigate();
    const location = useLocation();
    const { limit, timeToSet } = location.state || {};

    useEffect(() => {
        if (!limit) {
            setError("Quiz parameters are missing");
            return;
        }

        async function fetchQuestions() {
            try {
                const response = await axios.get("http://localhost:3000/fetch", {
                    params: {
                        limit : limit,
                        course: "networks"
                    }
                });

                if (response.data.data && Array.isArray(response.data.data)) {
                    setQuestions(response.data.data);
                    setUserResponses(new Array(response.data.length).fill(null));
                } else {
                    setError("Invalid data format received from server");
                }
            } catch (error) {
                console.error("Error fetching questions:", error);
                setError(error.message || "Failed to fetch questions");
            }
        }

        fetchQuestions();
    }, [limit]);

    function handleAnswer(answer) {
        setUserResponses(prev => {
            const updated = [...prev];
            updated[currIndex] = answer;
            return updated;
        });
    }

    function handleNext() {
        setIndex(prev => (prev + 1) % questions.length);
    }

    function calculateScore() {
        if (questions.length === 0) return;
        
        let score = 0;
        userResponses.forEach((response, index) => {
            if (response === questions[index].ans) {
                score++;
            }
        });

        navigate("/result", { state: { limit, userscore: score } });
    }

    if (error) {
        return <div className="text-red-500 p-4">{error}</div>;
    }

    if (questions.length === 0) {
        return <div className="p-4">Loading questions...</div>;
    }

    const currentQuestion = questions[currIndex];

    return (
        <div className="bg-gray-100 h-screen flex flex-col justify-center">
            <div className=" w-full h-2/3 flex flex-row justify-center">
                <div className="w-1/2 h-full  flex flex-col">
                    
                    <div className="border shadow-md bg-gray-300 h-28 mb-4 px-4 pt-4">
                        {currentQuestion?.question}
                    </div>
                    
                    <div className="flex flex-col justify-evenly gap-2 ">
                        {currentQuestion?.options?.map((option, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleAnswer(option)}
                                className={`w-full border shadow-md  bg-white p-2 hover:bg-gray-300 ${
                                    userResponses[currIndex] === option ? 'bg-blue-100' : ''
                                }`}
                            >
                                {option}
                            </button>
                        ))}
                    </div>

                    <div className="mt-8  flex flex-row justify-around">
                        <button 
                            onClick={calculateScore} 
                            className="w-18 rounded bg-gray-300 p-2 hover:bg-gray-500"
                        >
                            SUBMIT
                        </button>
                        <button 
                            onClick={handleNext} 
                            className="w-20 rounded bg-green-400 p-2 hover:bg-green-500"
                        >
                            NEXT
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}