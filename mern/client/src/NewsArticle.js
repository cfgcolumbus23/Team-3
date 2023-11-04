import "./NewsArticle.css"
import {useEffect, useState} from 'react'

// Creates and renders a list of news articles in the database
// published in the current month and year
function NewsArticle() {

    // Stores the current state of news articles
    const [news_articles, set_news_articles] = useState(null);

    // Invokes the fetch articles API everytime the component 
    // renders to the user's screen
    useEffect(() => {

        // Function that gets the news articles
        const fetchWorkouts = async () => {
            const response = await fetch('/api/articles/getArticles');
            const json = await response.json();

            // Checks if the news articles is ok
            if (response.ok) {
                set_news_articles(json);
            }
        }

        // Invoke the get articles routine
        fetchWorkouts();
    }, []);

    return (
         <div>    
            {news_articles && news_articles.map((article) => {
            <div class="article-main">
                <h1 class="article-title">
                    {article.title}
                </h1>
                <div class="article-metadata"> 
                    <p class="article-date"> 
                        {article.date} · 
                    </p>
                    <p class="article-author">
                        {article.author}
                    </p>
                </div>
                <p class="article-content"> 
                    {article.content}
                </p>
            </div>
            })}
        </div>   
    );
}

export default NewsArticle;