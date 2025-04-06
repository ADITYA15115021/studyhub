import { useArticles } from "../hooks"
import { ArticleCard } from "../components/ArticleCard";

export default function Articles(){
    
    const {loading,articles} = useArticles();
    
    console.log("in the aticles comp",articles);
    if( loading ){
       return (
        <div className="h-screen flex justify-center items-center">
           fetching the articles !
        </div>
       )
    } 

    return (
        <>
          
        
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