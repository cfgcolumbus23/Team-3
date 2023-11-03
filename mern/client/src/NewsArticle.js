import "./NewsArticle.css"

function NewsArticle() {
    return (
        // Top-level container holding the article
        <div id="article-main">
                <h1 id="article-title">
                    Update: Company policy on travel changed
                </h1>
                <div id="article-metadata"> 
                    <p id="article-date"> 
                        November 3, 2023 · 
                    </p>
                    <p id="article-author">
                        Rajit Khatri
                    </p>
                </div>
                <p id="article-content"> 
                    Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, 
                    a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph
                    is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a 
                    section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. 
                    Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, we will refer to this as the “controlling idea,” 
                    because it controls what happens in the rest of the paragraph.
                </p>
        </div>

    );
}

export default NewsArticle;