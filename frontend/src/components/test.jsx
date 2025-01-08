import { useState } from "react";
import { useNavigate } from "react-router-dom"


export default function Test(){

 


    const navigate =  useNavigate();

   
    return (
        <>

        <div className="shadow-black shadow-md border-white bg-white h-20
                        flex flex-row items-center px-8
                        text-2xl font-bold">
            TEST SECTION
        </div>

         <div className="mt-4 h-screen  flex flex-col justify-start">
            <div className="w-full flex flex-row justify-start">
                
                <div  className="m-4  grid grid-cols-4 grid-rows-2 gap-2 w-2/3 h-64">
                    
                    <div onClick={()=>{navigate("/network")}} className="border rounded-lg flex justify-center items-center
                                    bg-white shadow-black shadow-md hover:bg-gray-200 text-lg">NETWORKS</div>
                    
                    <div className="border rounded-lg flex justify-center items-center
                                    bg-white shadow-black shadow-md hover:bg-gray-200 text-lg ">OERATING SYSTEM</div>
                </div>  
                    
            </div>
                         
         </div>
        </>
    )
}