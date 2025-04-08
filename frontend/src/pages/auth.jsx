
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {supabase} from "../supabaseClient.js"; 
import axios from "axios";

export default function AuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {

    const getToken = async () => {

    const { data: sessionData, error } = await supabase.auth.getSession();
    const token = sessionData?.session?.access_token;
        
    const { data: userData } = await supabase.auth.getUser();
    const email = userData?.user?.email;
    console.log(email);
        
      
      if (!token) {
        console.error("No session found:", error?.message);
        navigate("/"); 
        
      }else{
        try {
            const  response = await axios.post("https://ak-backend1.xyz/auth-sign",{email});

            if(response.data.success){
                localStorage.setItem("token",response.data.token);
                localStorage.setItem("userId",response.data.userId);
                localStorage.setItem("username",response.data.username);
                setTimeout(() => navigate("/home"), 2000);
                
            }else{
                console.log(response.data.message);
            }
          
        }catch (error) {
            console.log(error.message);
          }
    }

};
getToken();
}, [navigate]);

  return <p className="h-screen flex justify-center items-center">Signing you in...</p>;
}
