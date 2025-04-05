
import { useNavigate } from "react-router-dom"


export default function Test(){

    const navigate =  useNavigate();

   
    return (
        <>

        <div className="min-h-screen bg-gray-100">
            {/* Header */}
            <div className="shadow-md bg-white h-20 flex items-center px-8 text-2xl font-bold text-gray-800">
                 TEST SECTION
            </div>

            {/* Subject Grid */}
            <div className="max-w-5xl mx-auto mt-10 px-6">
                <h2 className="text-xl font-semibold text-gray-700 mb-6">Choose a Subject:</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
                { name: "Networks", route: "/network" },
                { name: "Operating System", route: "/os" },
                { name: "DBMS", route: "/dbms" },
                { name: "Computer Architecture", route: "/ca" },
                { name: "C Programming", route: "/c" },
                { name: "Cyber Security", route: "/cyber" },
                { name: "Machine Learning", route: "/ml" },
                { name: "Web Development", route: "/web" },
            ].map((subject, idx) => (
                <div
                key={idx}
                onClick={() => navigate(subject.route)}
                className="cursor-pointer bg-white hover:bg-gray-100 rounded-xl border shadow-md text-center text-gray-800 font-medium py-8 px-4 transition duration-200"
                >
                {subject.name}
                </div>
            ))}
            </div>
        </div>
    </div>


        </>
    )
}