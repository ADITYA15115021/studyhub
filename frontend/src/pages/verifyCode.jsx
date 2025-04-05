import axios from "axios";
import { useState } from "react"

import { useLocation, useNavigate } from "react-router-dom";


export default function VerifyCode(){

    const [status,setStaus]  = useState(false);
    const [message,setMessage] = useState("");
    const [code,setCode] = useState("");

    const navigate = useNavigate();

    const location  = useLocation();
    const data = location.state || {};
    console.log(data.email);

    async function sendCode() {
        try {
            const response = await axios.post("http://localhost:3000/verify-code",
                {
                    email:data?.email,
                    verificationCode : code
                }
            );

            if( response.status){
                setMessage(response.message);
                setStaus(true);
                console.log(response.token);
                localStorage.setItem("token",response.token);
                navigate("/home",{state : {userId:response.userId}});

            }else{
                setMessage(response.message);
                setStaus(true);
            } 
        } catch (error) {
            console.log("error sending code",error);
        }
    }

    return(
        <>
         <div className="h-screen flex justify-center items-center">
            <div className="">

                <div className="border border-gray-300 shadow-md rounded-lg flex flex-col h-64 ">
                    <h2 className="h-1/3 flex justify-center items-center
                        text-3xl font-semibold px-4 ">CODE VERIFICATION</h2>

                    <div className=" h-2/3 flex flex-col justify-evenly items-center">
                        <label className="w-2/3 text-center">ENTER VERIFICATOIN CODE</label>
                        <input onChange={(e)=>{setCode(e.target.value)}} className="w-2/3 border rounded-lg border-black "></input>
                        <button  onClick={sendCode} className="w-1/3 py-1 rounded-lg border-red-800 bg-green-400 hover:bg-green-500" >
                        VERIFY</button>
                        {
                            status && <p>{message}</p>
                        }
                    </div>
                    
                </div> 
            </div>
         </div>
        </>
    )
}