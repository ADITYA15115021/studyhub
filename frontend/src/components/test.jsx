import { useNavigate } from "react-router-dom"


export default function Test(){

    const navigate =  useNavigate();

   
    return (
        <>

        <div className="border border-gray-200 shadow-md h-20
                        flex flex-row items-center px-8
                        text-2xl font-bold">
            TEST SECTION
        </div>
         <div className="h-screen bg-gray-100 flex flex-col justify-start">
            <div className="flex flex-row justify-start">
                <div onClick={()=>{navigate("/network")}} className="border border-black grid grid-cols-2 grid-rows-2 gap-2 w-64 h-64">
                    <div className="border rounded-lg flex justify-center items-center
                                    bg-white shadow-md hover:bg-gray-200 text-lg">NETWORKS</div>
                    
                    <div className="border rounded-lg flex justify-center items-center
                                    bg-white shadow-md hover:bg-gray-200 text-lg ">OERATING SYSTEM</div>
                </div>  
                    
            </div>
                         
         </div>
        </>
    )
}