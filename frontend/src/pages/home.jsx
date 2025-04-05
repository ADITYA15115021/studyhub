

export default function Home(){

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
         <div className="px-4 h-16 border shadow-black shadow-md flex flex-row justify-between items-end">

            <div className="w-2/3  flex flex-row justify-evenly ">
                <div className="underline">HOME</div>
                <div className="underline hover:bg-gray-200">TEST</div>
                <div>ABOUT US</div>
            </div>

            <div>SIGN-OUT</div> 
            
         </div>



        
        </>
    )
}