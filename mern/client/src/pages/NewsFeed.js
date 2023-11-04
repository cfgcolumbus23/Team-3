import "./NewsFeed.css"
import NewsArticle from './NewsArticlePage';

// High level news feed container for displaying articles
function NewsFeed() {
    return (
    <div id="news-feed">
        <NewsArticle/>
    </div>
    );
}

export default NewsFeed;