import React from "react";
import "./chatbot.css";

export default function ChatbotComponent() {
  return (
    <div id="container" className="containerBox">
        <header className="Top">
            <div className="containerHeader">
                <h1 className="Title">
                   Goodwill Columbus Chatbot
                </h1>
            </div>
        </header>   
        <main className="Main">
            <div className="mainTop"></div>
            <div className="Message">
                <section aria-label="greyBox" role="textBox" tabIndex="0" className="greyBox">
                <div className="Background">
                    <p>
                        "Welcome to Goodwill Columbus! I can
                        help with any questions you have 
                        regarding Courses, Career Coaches,
                        Mentorship, Newsletter, or other 
                        Resources"
                    </p>
                </div>
                </section>
            </div>
            <div className="ChatBot Options chatBotOptions">
                <div className="Buttons">
                <button className="Courses">
                    Courses
                </button>
                <button className="Career Coaches">
                    Career Coaches
                </button>
                <button className="Mentorship">
                    Mentorship
                </button>
                <button className="Newsletter">
                    Newsletter
                </button>
                <button className="Resources">
                    Resources
                </button>
                </div>
            </div>
        </main>  
        <footer className="Footer chatBotFooter">
            <div className="TextBoxFormat">
                <form className="Form">
                <input autoComplete="off" type="text" name="Request Input" 
                className="Form" placeholder="Type your question here..." style={{ width: '250px', marginTop: '100px' }}>
                </input>
                <button className="submitButton">
                    Submit
                </button>
                </form>           
            </div>
        </footer>  
    </div>
  );
}