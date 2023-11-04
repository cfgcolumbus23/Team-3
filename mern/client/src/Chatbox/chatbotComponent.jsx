//import React from "react";
import "./chatbot.css";
import React, { useState, useEffect } from "react";
import "./chatbot.css";
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from "@chatscope/chat-ui-kit-react";

//import { MainContainer, , MessageList, Message, MessageInput, TypingIndicator } from "@chatscope/chat-ui-kit-react";
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: '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', // defaults to process.env["OPENAI_API_KEY"]
  dangerouslyAllowBrowser: true 
});

export default function ChatbotComponent() {

    const [messages, setMessages] = useState([]);
    const [userMessage, setUserMessage] = useState(""); // ""
    const [isLoading, setIsLoading] = useState(false);
    const handleInputSubmit = async (innerHtml, textContent, innerText, nodes) => {
    // if (handleInputSubmit) return;

    setIsLoading(true);

    try {
      // Make a request to the OpenAI GPT-3 API

      const response = await openai.chat.completions.create({
        messages: [{ role: 'user', content: 'Say this is a test' }],
        model: 'gpt-3.5-turbo',
      });
    
      const botResponse = response.data.choices[0].text;
      console.log("Bot Response: " + botResponse);
      setMessages([...messages, { text: textContent, type: "user" }, { text: botResponse, type: "bot" }]);
    } catch (error) {
      console.error("Error sending message to OpenAI GPT-3:", error);
    }

    setIsLoading(false);
    setUserMessage(""); // Clear the input field
  };


  return (
    <div id="largeBoc" className= "overallContainer">
    <div id="container" className="containerBox chatBotBox">
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
                    I want to learn about..
                </button>
                <button className="Career Coaches">
                    I need career coaching...
                </button>
                <button className="Mentorship">
                    I want to find someone in the tech industry...
                </button>
                <button className="Newsletter">
                    I want to know what is happening...
                </button>
                <button className="Resources">
                    I need help getting my GED...
                </button>
                </div>
            </div>
        </main>  
        <footer className="Footer">
          <MainContainer>
        <ChatContainer>
          <MessageList>
            {messages.map((message, index) => (
              <Message
                key={index}
                model={{
                  message: message.text,
                  sentTime: "just now",
                  sender: message.type,
                }}
              />
            ))}
            {isLoading && <TypingIndicator content="AI is typing..." />}
          </MessageList>
          {<MessageInput
            onSend={handleInputSubmit}
            placeholder="Type your question here..."
              />}
        </ChatContainer>
        </MainContainer>
        </footer>  
        <div className="Feedback Button">
            <button className="Feedback">
                Feedback
            </button>
        </div>
    </div>
    </div>
  );
}