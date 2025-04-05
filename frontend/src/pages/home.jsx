import { useNavigate } from "react-router-dom";


export default function Home(){
    
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    console.log(token);
    if(!token){
        return (
            <>
            <div className="h-screen flex justify-center items-center">
               not logged in !
            </div>
            </>
        )
    }
    return(
        <>
          
          <div className="h-16 px-6 bg-white shadow-md flex items-center justify-between">

            {/* Navigation links */}
            <div className="flex gap-8 text-gray-800 font-semibold text-lg">
                <div className="hover:text-blue-600 transition cursor-pointer">HOME</div>
                <div onClick={()=>{navigate("/test")}} className="hover:text-blue-600 transition cursor-pointer">TEST</div>
                <div onClick={()=>{navigate("/quiz-history")}} className="hover:text-blue-600 transition cursor-pointer">TEST HISTORY</div>
                <div className="hover:text-blue-600 transition cursor-pointer">ABOUT US</div>
            </div>

            {/* Sign-out */}
            <div onClick={()=>{
                localStorage.removeItem("userId");
                localStorage.removeItem("token");
                navigate("/");
            }} 
            className="text-red-500 font-medium hover:text-red-600 cursor-pointer transition">
                SIGN OUT
            </div>
            </div>



        
        </>
    )
}