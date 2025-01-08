

import { BrowserRouter,Routes,Route } from "react-router-dom"
import SignUp from "./components/signup"
import Home from "./components/home"
import Test from "./components/test"
import Newtork from "./components/network"
import Quiz from "./components/quiz"
import Result from "./components/result"
import LogIn from "./components/login"

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
