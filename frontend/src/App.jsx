

import { BrowserRouter,Routes,Route } from "react-router-dom"
import SignUp from "./pages/signup"
import Home from "./pages/home"
import Test from "./pages/test"
import Newtork from "./pages/network"
import Quiz from "./pages/quiz"
import Result from "./pages/result"
import LogIn from "./pages/login"

function App() {
 

  return (
    <>
       <BrowserRouter>
         <Routes>
           <Route path = "/"        element={<SignUp/>}></Route>
           <Route path="/login"     element={<LogIn/> }></Route>
           <Route path = "/home"    element={<Home/>}></Route>
           <Route path = "/test"    element={<Test/>}></Route>
           <Route path = "/network" element={<Newtork/>}></Route>
           <Route path = "/quiz"    element ={<Quiz/>}></Route>
           <Route path = "/result"  element = {<Result/>} ></Route>
         </Routes>
       </BrowserRouter>
     
    </>
  )
}

export default App
