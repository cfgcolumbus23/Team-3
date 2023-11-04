import "./../NewsArticle.css"
import {useEffect, useState} from 'react'

// Formats the date in the database into mm/dd/yyyy format
function parseDatearticle(d) {
    const date = new Date(d);
    const formattedDate = date.toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric"
      });
    return formattedDate;
}

// Creates and renders a list of news articles in the database
// published in the current month and year
function NewsArticle() {

    // Stores the current state of news articles
    const [news_articles, set_news_articles] = useState(null);

    // Invokes the fetch articles API everytime the component 
    // renders to the user's screen
    useEffect(() => {

        // Function that gets the news articles
        const fetchArticles = async () => {
            const response = await fetch('api/articles/getArticles');
            const json = await response.json();
            // Checks if the news articles is ok
            if (response.ok) {
                set_news_articles(json);
            }
        }

        // Invoke the get articles routine
        fetchArticles();
    }, []);

    return (
         <div>  
            {console.log(news_articles)}  
            {news_articles && news_articles.map((article) => (
            <div class="article-main">
                <h1 class="article-title">
                    {article.title}
                </h1>
                <div class="article-metadata"> 
                    <p class="article-date"> 
                        {parseDatearticle(article.date)} · 
                    </p>
                    <p class="article-author">
                        {article.author}
                    </p>
                </div>
                <img class="image" src={article.imageURL}></img>
                <p class="article-content"> 
                    {article.content}
                </p>
            </div>
            ))}
        </div>   
    );
}

export default NewsArticle;