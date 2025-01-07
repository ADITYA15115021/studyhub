

import { BrowserRouter,Routes,Route } from "react-router-dom"
import SignUp from "./components/signup"
import Home from "./components/home"
import Test from "./components/text"
import Newtork from "./components/network"

function App() {
 

  return (
    <>
       <BrowserRouter>
         <Routes>
           <Route path="/" element={<SignUp/>}></Route>
           <Route path="/home" element={<Home/>}></Route>
           <Route path="/test" element={<Test/>}></Route>
           <Route path="/network" element={<Newtork/>}></Route>
         </Routes>
       </BrowserRouter>
     
    </>
  )
}

export default App
