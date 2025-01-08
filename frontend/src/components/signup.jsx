
import axios from "axios"
import { useState } from "react";
import { data, useNavigate } from "react-router-dom";

export default function SignUp(){

    const [name,setName]   = useState("");
    const [email,setEmail] = useState("");
    const [password,serPassword] = useState("");
    const navigate = useNavigate();

    async function clickHandler(){
       
        try {
            const response  = await axios.post( "http://localhost:3000/signup",{
                data:{
                    username: name,
                    email : email,
                    password:password
                }
            });


            // if(  ){

            }
            catch (error) { 
            console.log(error);
        }

    }

    return(
        <>


        <div className="h-screen flex flex-row">

            <div className="basis-1/2">
                <div className="h-screen flex flex-col justify-center">
                    <div className="flex flex-row justify-center">
                        <div className="px-16 text-4xl font-bold">Your's one stop solution for exam preparation !</div>
                    </div>
                </div>
            </div>

            <div className="basis-1/2">

                <div className="bg-gray-100 h-screen flex flex-col justify-center">
                    <div className="flex flex-row justify-center">
                        <div className="rounded-lg shadow-black shadow-lg border-white bg-white flex flex-col">

                             <div className="rounded-sm m-8 flex justify-center items-center
                                        text-4xl font-bold">
                                SIGNUP
                            </div>
                            < div className="flex justify-center">already have an account ?  <a href="/login" className="text-blue-500  hover:text-blue-700"> Click here</a>
                            </div>
                        
                        <div className="flex flex-col">
                        <div className="m-2">
                            <label>USERNAME</label>
                          <input className="border border-gray-300 rounded ml-4"></input>
                        </div>
                        <div className="m-2 ">
                            <label>EMAIL</label>
                            <input className="border border-gray-300 rounded ml-14"></input>
                        </div>
                        <div className="m-2">
                            <label>PASSWORD</label>
                            <input className="border border-gray-300 rounded ml-4"></input>
                        </div>
                        <div className="mt-4 mb-4 flex justify-center">
                            <button className="w-24 h-8 rounded-lg bg-black text-white">SIGNIN</button>
                        </div>

                    </div> 
                </div>
            </div>
          </div>

        </div>

    </div>
         

        
        </>
    )
}