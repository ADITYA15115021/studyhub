



export const FullArticleCard = ({article}) => {

    //const authorName = article.authorName || "Anonymous"; // Safely check if blog.author exists
    //console.log(article);
    // const currentDate = new Date().toLocaleDateString('en-GB', {
    //     day: 'numeric',
    //     month: 'short',
    //     year: 'numeric',
    //   });
      //console.log(currentDate); 
      

    return <div>
       
        <div className="flex justify-center">
            <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl pt-12">
                <div className="col-span-8">
                    <div className="text-5xl font-extrabold">
                        {article.title}
                    </div>
                    <div className="text-slate-500 pt-2">
                    {article.publishedDate}
                    </div>
                    <div className="pt-4">
                        {article.content}
                    </div>
                </div>
                <div className="col-span-4">
                    <div className="text-slate-600 text-lg">
                        Author
                    </div>
                    <div className="flex w-full">
                        <div className="pr-4 flex flex-col justify-center">
                            <Avatar size="big" name={article.authorName} />
                        </div>
                        <div>
                            <div className="text-xl font-bold">
                                {article.authorName || "Anonymous"}
                            </div>
                            <div className="pt-2 text-slate-500">
                                
                            </div>
                        </div>
                    </div>  
                </div>
                
            </div>
        </div>
    </div>
}


export function Avatar({ name}) {
    return <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-600 rounded-full w-6 h-6 }`}>
    <span className={`text-mdfont-extralight text-gray-600 dark:text-gray-300`}>
        {name[0]}
    </span>
</div>
}