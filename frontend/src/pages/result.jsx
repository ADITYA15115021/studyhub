import { useLocation } from "react-router-dom"


export default function Result(){

    const location = useLocation();
    const {limit,userscore} = location.state;

    return (
        <>
         <div className="h-screen flex flex-col bg-gray-100">

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

                <div className="ml-20 mt-20 border border-black">
                    <div className="h-12 flex items-center px-10 ">WRONG QUESTIONS</div>
                    {
                        
                    }

                    
                </div>
         </div>
        </>
    )

}