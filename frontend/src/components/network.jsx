import { useState } from "react"
import { data, useNavigate } from "react-router-dom";


export default function Newtork(){

    const [number,setNumber] = useState("");
    const [time,setTime] = useState("");
    const naviagate = useNavigate();

    async function handler(){
        try {

            const response = await axios.post("",{
                data:{
                    
                }
            })
            
        } catch (error) {
            console.log(error);
            
        }
    }

    return (
        <> 
        <div>

            <div className="m-12 order-2 grid grid-cols-1 grid-rows-2 gap-10">

                <div className="border shadow-md">

                     <div className="border h-24 flex items-center px-6
                                    text-2xl font-bold">SELECT NUMBER OF QUESTIONS</div>
                    <div className="border border-black grid grid-cols-3 gap-10 w-80 h-16">
                        <button onClick={()=>{ setNumber(5) } } className="border rounded bg-green-500 hover:bg-green-600">5</button>
                        <button onClick={()=>{ setNumber(10) } } className="border rounded bg-green-500 hover:bg-green-600 ">10</button>
                        <button onClick={()=>{ setNumber(20) } } className="border rounded bg-green-500 hover:bg-green-600">20</button>
                    </div>
                </div>

                <div className="border shadow-md flex flex-col">

                     <div className="border h-24 flex items-center px-6
                                    text-2xl font-bold">SET A TIMER</div>

                    <div className="border flex flex-row justify-evenly">
                        <button className="bg-green-400">5 MIN</button>
                        <button>10 MIN</button>
                        <button>20 MIN</button>
                    </div>
                </div>

            </div>

            <button className="ml-32 bg-green-500 w-24 h-10">START QUIZ</button>
                
        </div>
          
        </>
    )
}

