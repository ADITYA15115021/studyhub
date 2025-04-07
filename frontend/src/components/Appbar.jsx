import { Link, useNavigate } from "react-router-dom"

export const Appbar = () => {
    const navigate = useNavigate()
    const username = localStorage.getItem("username");

    function signOutHandler(){
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        localStorage.removeItem("username");
        navigate("/")
    }


    return <div className="border-b flex justify-between px-10 py-4">

        <Link to={'/home'} className="flex flex-col justify-center cursor-pointer
                            text-2xl font-semibold text-green-700">
                VLearn
        </Link>

        <Link to={'/test'} className="flex flex-col justify-center cursor-pointer">
                PRACTICE
        </Link>

        <Link to={'/quiz-history'} className="flex flex-col justify-center cursor-pointer">
                HISTORY
        </Link>

        <div>
           
            <button type="button"  onClick={signOutHandler}
                className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4
                focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">
                   SIGNOUT
            </button>
           

           
        </div>
    </div>
}