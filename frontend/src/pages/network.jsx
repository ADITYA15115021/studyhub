import { useState } from "react"
import { useNavigate } from "react-router-dom";


export default function Newtork(){

    const [number,setNumber] = useState(0);
    const [time,setTime] = useState(0);
    const navigate = useNavigate();

    // function clickHandler( ){
    //     navigate("/quiz", { state : { noq : number , timeToSet : time  } })
    // }




    return (
        <> 
        
        <div className="border  h-screen bg-gray-100">
            <div className="m-12 order-2 grid grid-cols-1 grid-rows-2 gap-10">
                
                <div className="bg-white shadow-black shadow-md">

                     <div className=" h-16 flex items-center px-6
                                    text-2xl font-bold">SELECT NUMBER OF QUESTIONS</div>
                    <div className="m-4 grid grid-cols-3 gap-10 w-80 h-20">
                        <button onClick={()=>{ setNumber(prev => prev+5) } } className="border rounded-lg bg-gray-200 hover:bg-green-400">5</button>
                        <button onClick={()=>{ setNumber(10) } } className="border rounded-lg bg-gray-200 hover:bg-green-400 ">10</button>
                        <button onClick={()=>{ setNumber(20) } } className="border rounded-lg bg-gray-200 hover:bg-green-400">20</button>
                    </div>
                </div>

                <div className="bg-white shadow-black shadow-md flex flex-col">

                     <div className="h-28 flex items-center px-6
                                    text-2xl font-bold">SET A TIMER</div>

                    <div className="flex-1 flex flex-row justify-evenly">
                        <button onClick={()=>{setTime(prev => prev+5)}} className="w-20 rounded-md bg-green-400">5 MIN</button>
                        <button>10 MIN</button>
                        <button>20 MIN</button>
                    </div>
                </div>

            </div>

            <button onClick={()=>{navigate("/quiz",{state : { limit:number , time:time} }) }} className="ml-32 bg-green-500 w-24 h-10">START QUIZ</button>
                
        </div>
          
        </>
    )
}

