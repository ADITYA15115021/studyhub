

import { BrowserRouter,Routes,Route } from "react-router-dom"
import SignUp from "./pages/signup"
import Home from "./pages/home"
import Test from "./pages/test"
import Newtork from "./pages/network"
import Quiz from "./pages/quiz"
import Result from "./pages/result"
import LogIn from "./pages/login"
import VerifyCode from "./pages/verifyCode"
import QuizHistory from "./pages/QuizHistory.jsx"
import Articles from "./pages/articles.jsx"
import { Article } from "./pages/article.jsx"

function App() {
 

  return (
    <>
       <BrowserRouter>
         <Routes>
           <Route path = "/"            element={<SignUp/>}></Route>
           <Route path="/login"         element={<LogIn/> }></Route>
           <Route path="/verify-code"   element={<VerifyCode/>}></Route>
           <Route path = "/home"        element={<Home/>}></Route>
           <Route path = "/articles"    element={<Articles/>}></Route>
           <Route path = "/article/:id" element={<Article/>}></Route>
           <Route path = "/test"        element={<Test/>}></Route>
           <Route path = "/network"     element={<Newtork/>}></Route>
           <Route path = "/quiz"        element ={<Quiz/>}></Route>
           <Route path = "/result"      element = {<Result/>} ></Route>
           <Route path = "/quiz-history" element={<QuizHistory/>} ></Route>
         </Routes>
       </BrowserRouter>
     
    </>
  )
}

export default App
