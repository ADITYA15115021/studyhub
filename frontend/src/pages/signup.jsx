
import axios from "axios"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import messages from "../components/messages.js";
import { useEffect } from "react";
import {supabase} from "../supabaseClient.js";

export default function SignUp(){

    const signInWithGoogle = async () => {
        
        const { error } = await supabase.auth.signInWithOAuth({
          provider: "google",
          options: {
            redirectTo: "http://localhost:5173/landing", // Change this to your desired route
          },
        });
        if (error) {
            console.error("Google Sign-In Error:", error.message);
          }
    }    

    const [username,setUsername]   = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
    const [showMessage, setShowMessage] = useState(true);

    useEffect(() => {
    const interval = setInterval(() => {
        setShowMessage(false); // Hide message first
        setTimeout(() => {
        setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
        setShowMessage(true); // Show new message
        }, 700); // Wait for fade-out duration before switching message
       }, 3000); // Change message every 3 sec

    return () => clearInterval(interval);
    }, []);

    const navigate = useNavigate();

    async function clickHandler(){
       
        try {

            console.log("signup button clicked!");
            console.log(username,email,password);
            const response = await axios.post( "http://localhost:3000/signup",{
               
                    username: username,
                    email : email,
                    password:password
                }
            );
            console.log(response);
            //navigating to code verification;
            navigate("/verify-code",{ state : {email:email}});
           

            }catch(error) { 
            console.log(error);
        }

    }

    return(
        <>


        <div className="h-screen flex flex-row">

            <div className="hidden md:block basis-1/2">

                <div className="h-screen flex flex-col justify-center">
                    <div className="flex flex-row justify-center">
                        <div className="px-16 text-4xl font-bold">Your one stop solution for exam preparation !</div>
                    </div>

                    <div className={`mt-12 ml-16 flex flex-col justify-center 
                         h-32 overflow-hidden text-ellipsis
                         text-2xl pl-20 
                        transition-opacity duration-700 ease-in-out ${showMessage ? "opacity-100" : "opacity-0"} `} >
                        <p> {messages[currentMessageIndex].msg}</p>
                        <p>~{messages[currentMessageIndex].name}</p>
                    </div>
                </div>
            
            </div>

            <div className=" w-full md:w-1/2 ">

                <div className="bg-gray-100 h-screen flex flex-col justify-center">
                    <div className="flex flex-row justify-center">

                        <div className="rounded-lg shadow-black shadow-lg border-white bg-white flex flex-col">

                            <div className="rounded-sm m-8 flex justify-center items-center
                                        text-4xl font-bold">
                                SIGNUP
                            </div>

                            < div className="flex justify-center">
                               already have an account ?
                              <a href="/login" className="text-blue-500  hover:text-blue-700"> Click here</a>
                            </div>
                        
                            <div className="flex flex-col">
                                <div className="m-2">
                                    <label>USERNAME</label>
                                <input onChange={(e)=>{setUsername(e.target.value)}} className="border border-gray-300 rounded ml-4"></input>
                            </div>

                            <div className="m-2 ">
                                <label>EMAIL</label>
                                <input onChange={(e)=>{setEmail(e.target.value)}} className="border border-gray-300 rounded ml-14"></input>
                            </div>
                            <div className="m-2">
                                <label>PASSWORD</label>
                                <input onChange={(e)=>{setPassword(e.target.value)}} className="border border-gray-300 rounded ml-4"></input>
                            </div>

                            <div className="mt-4 mb-4 flex justify-center">
                                <button onClick={clickHandler} className="w-24 h-8 rounded-lg bg-black text-white">SIGNUP</button>
                            </div>

                    </div> 

                    <div className="flex justify-center">OR</div>

                    <div className="m-4 w-full flex justify-center  ">
                        <button  onClick={signInWithGoogle} className="border rounded-lg px-4 h-8 bg-gray-500 text-white ">SIGIN WITH GOOGLE</button>
                    </div>
                </div>
            </div>
          </div>

        </div>

    </div>
         

        
        </>
    )
}

