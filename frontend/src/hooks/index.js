import { useEffect, useState } from "react"
import axios from "axios";

export  function useArticles(){
    const [loading,setLoading] = useState(true);
    const [articles,setArticles] = useState([]);

    useEffect(()=>{
        async function fetchArticles(){
            const response = await axios.get("http://localhost:3000/get-articles-bulk");
            //console.log("in useAticles hook",response.data.dbResponse); 
            setArticles(response.data.dbResponse);
            setLoading(false);
        }

        fetchArticles();
    },[])

    return {
        loading,articles
    }
}

export function useArticle({id}){

    const [loading,setLoading] = useState(true);
    const [article,setArticle] = useState();

    useEffect(()=>{
        async function fetchArticle(){
            console.log(id);

            try {
                const response = await axios.get(`http://localhost:3000/get-article/${id}`);
                //console.log("in useArticle",response.data.dbResponse);
                setArticle(response.data.dbResponse);
                setLoading(false);
                
            } catch (error) {
                console.log(error);
            }
           
        }

        fetchArticle();
    },[])

    return {
        loading,article
    }
    
}