


import axios from "axios"
import { useState } from "react";
import {useNavigate } from "react-router-dom";

export default function LogIn(){

    
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const [loading,setLoading] = useState(false);
    //defining a state variable for error, initializing to false, and using conditional if to render the msg
    //const [e,setError] = useState(false);
    const [message,setMessage] = useState("");

    const navigate = useNavigate();

    function clickHandler(){

        if (loading) return;
        setLoading(true);
        setMessage("");
       
        axios.post('https://ak-backend1.xyz/login', { email, password })
        .then(res => {
        console.log(res.data.message);
        setMessage("Login successfull!");
        localStorage.setItem("token",res.data.token);
        localStorage.setItem("userId",res.data.userId);
        localStorage.setItem("username",res.data.username);
        
        setTimeout(() => navigate("/home"), 2000);
        })
        .catch(err => {
          //setError(true);
          const message = err.response?.data?.message || 'Something went wrong';
          setMessage(message);
          setLoading(false);
        });

    }   
      

    return(
        <>

        <div className="min-h-screen bg-gray-100 flex items-center justify-center">

          <div className="bg-white shadow-lg rounded-xl p-8 w-80">
            
                <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">LOGIN</h2>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm text-gray-600 mb-1">Email</label>
                        <input  id="email" onChange={(e)=>{ setEmail(e.target.value) }} type="email" className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400" />
                    </div>

                    <div>
                        <label className="block text-sm text-gray-600 mb-1">Password</label>
                        <input id="password" onChange={(e)=>{ setPassword(e.target.value) }} type="password" className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400" />
                    </div>

                <button
                id="loginbtn"
                    onClick={clickHandler}
                    disabled={loading}
                    className={`w-full py-2 rounded-md transition ${
                    loading
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-gray-800 hover:bg-gray-700 text-white"
                    }`}
                >
                    {loading ? "Logging in..." : "Login"}
                </button>

                {message && (
                    <p
                    id="loginMessage"
                    className={`text-center text-sm ${
                        message.includes("successful") ? "text-green-600" : "text-red-500"
                    }`}
                    >
                     {message}
                    </p>
                )}
                
            </div>

           </div>
        </div>

          {/* <div className="bg-gray-100 h-screen flex flex-col justify-center">
            <div className="flex flex-row justify-center">
                <div className="border rounded-lg bg-white shadow-black shadow-lg flex flex-col">

                    <div className="m-8 flex justify-center items-center
                                    text-4xl font-bold">
                        LOGIN
                    </div>
                    
                    <div className="flex flex-col">
                      
                       <div className="m-2 ">
                          <label>EMAIL</label>
                          <input className="ml-14 border border-gray-300 rounded"></input>
                       </div>

                       <div className="m-2">
                          <label>PASSWORD</label>
                          <input className="ml-4 border border-gray-300 rounded"></input>
                       </div>

                       <div className="mt-4 mb-4 flex justify-center">
                          <button className="w-24 h-8 rounded-lg bg-black text-white">LOGIN</button>
                       </div>

                    </div> 
                </div>
            </div>
          </div> */}
        </>
    )
}