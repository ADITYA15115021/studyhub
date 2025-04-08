import axios from "axios";
import { useState } from "react"

import { useLocation, useNavigate } from "react-router-dom";


export default function VerifyCode(){

    
    
    const [code,setCode] = useState("");
    const [loading,setLoading] =  useState(false);

    const [status,setStaus]  = useState(false);
    const [message,setMessage] = useState("");

    const navigate = useNavigate();

    const location  = useLocation();
    const data = location.state || {};
    

    async function clickHandler() {
        try {
            console.log("click handler clicked!");
            console.log("in verifycode.tsx",data.email);
            console.log(code);
            setLoading(true);
            const response = await axios.post("https://ak-backend1.xyz/verify-code",
                {
                    email:data?.email,
                    verificationCode : code
                }
            );

            if( response.data.success){
                console.log(response.data.message);
                setMessage(response.data.message);
                setStaus(true);
                console.log(response.token);
                localStorage.setItem("token",response.data.token);
                localStorage.setItem("userId",response.data.userId);
                localStorage.setItem("username",response.data.username);
                setTimeout(() => navigate("/home",{state : {userId:response.data.userId}}),2000);
                

            }else{
                console.log()
                setMessage(response.data.message);
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

                    <div 
                    
                    className=" h-2/3 flex flex-col justify-evenly items-center">
                        <label className="w-2/3 text-center">ENTER VERIFICATOIN CODE</label>
                        <input onChange={(e)=>{setCode(e.target.value)}} className="w-2/3 border rounded-lg border-black "></input>
                      
                        <button
                                id="verifybtn"
                                onClick={clickHandler}
                                disabled={loading}
                                className={`w-44 py-2 rounded-md transition ${
                                        loading
                                            ? "bg-gray-400 cursor-not-allowed"
                                            : "bg-gray-800 hover:bg-gray-700 text-white"
                                        }`}
                                    >
                                        {loading ? "VERIFYING CODE" : "VERIFY CODE"}
                                </button>

                        {
                            message && <p className="text-xs text-red-600">{message}</p>
                        }

                    </div>
                    
                </div> 
            </div>
         </div>
        </>
    )
}