
import axios from "axios"
import { useState } from "react";
import { data, useNavigate } from "react-router-dom";

export default function SignUp(){

    const [name,setName]   = useState("");
    const [email,setEmail] = useState("");
    const [password,serPassword] = useState("");
    const navigate = useNavigate();

    async function handler(){
       
        try {
            const response  = await axios.post( "http://localhost:3000/signup",{
                data:{
                    username: name,
                    email : email,
                    password:password
                }
            });


            if( !response ){
                console.log(first)
            }else{

            }
            
        } catch (error) { 
            console.log(error);
        }

    }

    return(
        <>
          <div className="h-screen flex flex-col justify-center">
            <div className="flex flex-row justify-center">
                <div className="border flex flex-col">

                    <div className="border rounded-sm m-8 flex justify-center items-center
                                    text-4xl font-bold">
                        SIGNUP
                    </div>
                    
                    <div className="border flex flex-col">
                       <div className="m-2">
                          <label>USERNAME</label>
                          <input className="border border-gray-300 rounded"></input>
                       </div>
                       <div className="m-2 ">
                          <label>EMAIL</label>
                          <input className="border border-gray-300 rounded"></input>
                       </div>
                       <div className="m-2">
                          <label>PASSWORD</label>
                          <input className="border border-gray-300 rounded"></input>
                       </div>
                       <div className="mt-4 mb-4 flex justify-center">
                          <button className="w-24 h-8 rounded-lg bg-black text-white">SIGNIN</button>
                       </div>

                    </div> 
                </div>
            </div>
          </div>
        </>
    )
}