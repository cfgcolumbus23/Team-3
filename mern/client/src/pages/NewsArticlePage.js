import "./NewsArticlePage.css"
import { useLocation } from 'react-router';
import { useEffect } from "react";

// Formats the date in the database into mm/dd/yyyy format
function parseDate(d) {
    const date = new Date(d);
    const formattedDate = date.toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric"
      });
    return formattedDate;
}

const NewsArticlePage = () => {
    const location = useLocation();

    const {state} = location;
    console.log(state);
    const {title, date, author, imgsrc, content} = state;
    return (
        <div>        
            <h1 id="article-title">
                {title}
            </h1>
            <div id="article-metadata">
                    {parseDate(date)}
                <div id="article-author">
                    {author}
                </div>
            </div>
            <img src={imgsrc} id="article-image"></img>
            <p id="article-content">
                {content}
            </p>
        </div>

    );
}

export default NewsArticlePage;