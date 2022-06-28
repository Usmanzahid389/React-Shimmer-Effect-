import React,{useEffect,useState} from "react";
import SkeletonArticle from "../skeletons/SkeletonArticle";
  
function Article() {

   const [articles, setArticle] = useState(null);

   useEffect( ()=>{
       
    setTimeout( async () => {
         const res = await fetch('https://jsonplaceholder.typicode.com/posts');
         const data = await res.json();
         setArticle(data);
    }, 2000);
   
   });


  return (
    <div className="articles">
        <h2>Articles</h2>
           
          

         
         {!articles && ( [1,2,3,4,5].map((n)=> <SkeletonArticle key={n} />) )}
         {articles && articles.map(article =>(
            <div className="article" key={article.id}>
                <h3>{article.title}</h3>
                <p>{article.body}</p> 
            </div>

         ))}

    </div>
  )
}

export default Article