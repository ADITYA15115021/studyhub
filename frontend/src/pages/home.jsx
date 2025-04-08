import { Appbar } from "../components/AppBar";
import { useArticles } from "../hooks";
import { ArticleCard } from "../components/ArticleCard";
import { Spinner } from "../components/Spinner";


export default function Home(){

   
    //const navigate = useNavigate();
    const token = localStorage.getItem("token");
    console.log(token);
    const {loading,articles} = useArticles();
    console.log("in the aticles comp",articles);
    //const username = localStorage.getItem("username");

    if(!token){
        return (
            <>
            <div className="h-screen flex justify-center items-center">
               not logged in !
            </div>
            </>
        )
    }

    
    if( loading ){
           return (
            <div className="h-screen flex justify-center items-center">
               <Spinner/>
            </div>
           )
        } 

   

   

    return(
        <>

           <div className="">
                   <Appbar />       
           </div>

             <div  className="flex justify-center">
                       <div>
                           {articles.map( (article,index) => <ArticleCard
                               key={index}
                               id={article.id}
                               authorName={article.authorName || "Anonymous"}
                               title={article.title}
                               content={article.content}
                               publishedDate={article.publishedDate}
                           />)}
                       </div>
            </div>
               


          
         








        
        </>
    )
}




{/* <div className="h-16 px-6 bg-white shadow-md flex items-center justify-between">

<div className="flex gap-8 text-gray-800 font-semibold text-lg">
    <div className="hover:text-blue-600 transition cursor-pointer">HOME</div>
    <div onClick={()=>{navigate("/test")}} className="hover:text-blue-600 transition cursor-pointer">TEST</div>
    <div onClick={()=>{navigate("/quiz-history")}} className="hover:text-blue-600 transition cursor-pointer">TEST HISTORY</div>
    <div className="hover:text-blue-600 transition cursor-pointer">ABOUT US</div>
</div>

<div onClick={()=>{
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    navigate("/");
}} 
className="text-red-500 font-medium hover:text-red-600 cursor-pointer transition">
    SIGN OUT
</div>
</div> */}