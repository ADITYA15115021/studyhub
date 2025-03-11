


import axios from "axios"
import { useState } from "react";
import {useNavigate } from "react-router-dom";

export default function LogIn(){

    const [name,setName]   = useState("");
    const [email,setEmail] = useState("");
    const [password,serPassword] = useState("");
    const navigate = useNavigate();

    async function handler(){
       
        try {
            const response  = await axios.post( "http://localhost:3000/signup",{
                email : email,
                password:password
                }
            );


            if( !response ){
                console.log()
            }else{

            }
            
        } catch (error) { 
            console.log(error);
        }

    }

    return(
        <>
          <div className="bg-gray-100 h-screen flex flex-col justify-center">
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
          </div>
        </>
    )
}