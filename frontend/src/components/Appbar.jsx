import { Link } from "react-router-dom"

export const Appbar = () => {

    const userame = localStorage.getItem("username");
    return <div className="border-b flex justify-between px-10 py-4">

        <Link to={'/home'} className="flex flex-col justify-center cursor-pointer">
                VLearn
        </Link>

        <Link to={'/test'} className="flex flex-col justify-center cursor-pointer">
                PRACTICE
        </Link>

        <Link to={'/quiz-history'} className="flex flex-col justify-center cursor-pointer">
                HISTORY
        </Link>

        <div>
            <Link to={`/`}>
                <button type="button" className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4
                  focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">SIGNOUT</button>
            </Link>

           
        </div>
    </div>
}