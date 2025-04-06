import { useParams } from "react-router-dom"
import { useArticle } from "../hooks"
import { Spinner } from "../components/Spinner";
import { FullArticleCard } from "../components/fullCard";

export const Article = () => {
  const { id } = useParams();
  const {loading, article} = useArticle({
      id: id || ""
  });

  console.log("in article.jsx",article);

  if (loading || ! article) {
      return <div>
          
      
          <div className="h-screen flex flex-col justify-center">
              
              <div className="flex justify-center">
                  <Spinner />
              </div>
          </div>
      </div>
  }
  return <div>
      <FullArticleCard article={article} />
  </div>
}