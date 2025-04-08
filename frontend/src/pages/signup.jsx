
import axios from "axios"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import messages from "../components/messages.js";
import { useEffect } from "react";
import {supabase} from "../supabaseClient.js";
import { usernameSchema,emailSchema,passwordSchema } from "../components/validate.js";


export default function SignUp(){

    const signInWithGoogle = async () => {
        
        const { error } = await supabase.auth.signInWithOAuth({
          provider: "google",
          options: {
            redirectTo: "http://localhost:5173/auth/callback", // Change this to your desired route
          },
        });
        if (error) {
            console.error("Google Sign-In Error:", error.message);
          }
    }    

    const [loading,setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const [username,setUsername]   = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const [error,setError] = useState(false);
    const [errorMessage,setErrorMessage] = useState("");

    const [serverError,setServerError] = useState(false);
    const [serverErrorMessage,setServerErrorMessage] = useState("");


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
            setLoading(true);
            console.log("signup button clicked!");
            console.log(username,email,password);

            //validating the user input

            const username_check = usernameSchema.safeParse(username);
            if( !username_check.success){
                console.log("username is invalid!");
                console.log(username_check.error.issues[0].message);
                setError(true);
                setErrorMessage(username_check.error.issues[0].message);
                setLoading(false);
                return;
                }
            
            const email_check = emailSchema.safeParse(email);
            if( !email_check.success){
                console.log("email is invalid!");
                console.log(email_check.error.issues[0].message);
                setError(true);
                setErrorMessage(email_check.error.issues[0].message);
                setLoading(false);
                return;
            }
            
            const password_check = passwordSchema.safeParse(password);
            if( !password_check.success){
                console.log("password is invalid!");
                console.log(password_check.error.issues[0].message);
                setError(true);
                setErrorMessage(password_check.error.issues[0].message);
                setLoading(false);
                return;
            }   


            const response = await axios.post( "https://ak-backend1.xyz/signup",{
               
                    username: username,
                    email : email,
                    password:password
                }
            );
            console.log(response);
            setLoading(false);
            //navigating to code verification;

            navigate("/verify-code",{ state : {email:email}});
           

            }catch(error) { 
            console.log(error.response.data.message);
            setServerError(true);
            setServerErrorMessage(error.response.data.message);
            setLoading(false);
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

                <div className="bg-gray-100 min-h-screen flex items-center justify-center py-12">

                    

                        <div className="rounded-xl shadow-lg flex flex-col bg-white p-8 w-80 ">

                            <div className="rounded-sm m-8 flex justify-center items-center
                                        text-4xl font-bold">
                                SIGNUP
                            </div>

                            
                            < div className="flex justify-center block text-sm text-gray-600 mb-4 ">
                               already have an account ?
                              <a href="/login" className="text-blue-500  hover:text-blue-700"> Click here</a>
                            </div>

                            <div className="space-y-4">
                                
                                <div>
                                    <label className="block text-sm text-gray-600 mb-1">USERNAME</label>
                                    <input 
                                    id="username" 
                                    onChange={(e)=>{ setUsername(e.target.value) }} type="text" 
                                    className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none 
                                    focus:ring-2 focus:ring-gray-400" />
                                </div>

                                <div>
                                    <label className="block text-sm text-gray-600 mb-1">Email</label>
                                    <input  id="email" 
                                    onChange={(e)=>{ setEmail(e.target.value) }} type="email" 
                                    className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none 
                                    focus:ring-2 focus:ring-gray-400" />
                                </div>

                                <div>
                                    <label className="block text-sm text-gray-600 mb-1">Password</label>
                                    <input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full px-3 py-2 border rounded-md border-gray-300 
                                        focus:outline-none focus:ring-2 focus:ring-gray-400"
                                    />
                                     <p className="text-xs text-gray-500 mt-1 ml-1">
                                        Password must be at least 8 characters long, must conatain ataleat one character, digit and special character.
                                    </p>
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="text-xs text-blue-500 mt-1"
                                        >
                                        {showPassword ? "Hide password" : "Show password"}
                                        </button>


                                </div>

                                <button
                                    id="signupbtn"
                                        onClick={clickHandler}
                                        disabled={loading}
                                        className={`w-full py-2 rounded-md transition ${
                                        loading
                                            ? "bg-gray-400 cursor-not-allowed"
                                            : "bg-gray-800 hover:bg-gray-700 text-white"
                                        }`}
                                    >
                                        {loading ? "Signing In..." : "SIGNUP"}
                                </button>

                                {
                                    error  && <p  id="signupMessage" 
                                    className="text-center text-xs text-red-700">{errorMessage.toUpperCase()}</p>
                                }

{
                                    serverError  && <p  id="signupMessage" 
                                    className="text-center text-xs text-red-700">{serverErrorMessage.toUpperCase()}</p>
                                }



                                <div className="flex justify-center">OR</div>

                                
                                <button  onClick={signInWithGoogle}
                                    disabled={loading}
                                    className={`w-full py-2 rounded-md transition ${
                                        loading ? "bg-gray-400 cursor-not-allowed"
                                               : "bg-gray-800 hover:bg-gray-700 text-white"}`} >
                                    SIGIN WITH GOOGLE
                                    </button>
                               


                            </div> 

                   

                  
                </div>
            </div>
          </div>

        </div>

    
         

        
        </>
    )
}

