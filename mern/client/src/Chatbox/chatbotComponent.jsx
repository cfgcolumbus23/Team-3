//import React from "react";
import "./chatbot.css";
import React, { useState, useEffect } from "react";
import "./chatbot.css";
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from "@chatscope/chat-ui-kit-react";

//import { MainContainer, , MessageList, Message, MessageInput, TypingIndicator } from "@chatscope/chat-ui-kit-react";
import openai from 'openai';

export default function ChatbotComponent() {

    const [messages, setMessages] = useState([]);
    const [userMessage, setUserMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const handleInputSubmit = async () => {
    if (!userMessage) return;

    setIsLoading(true);

    try {
      // Make a request to the OpenAI GPT-3 API
      const response = await openai.create({
        engine: 'davinci',
        prompt: userMessage,
        max_tokens: 150,
      });
    
      const botResponse = response.data.choices[0].text;

      setMessages([...messages, { text: userMessage, type: "user" }, { text: botResponse, type: "bot" }]);
    } catch (error) {
      console.error("Error sending message to OpenAI GPT-3:", error);
    }

    setIsLoading(false);
    setUserMessage(""); // Clear the input field
  };


  return (
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
        <footer className="Footer">
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
            value={userMessage}
            onSend={handleInputSubmit}
            placeholder="Type your question here..."
              />}
        </ChatContainer>
        </footer>  
    </div>
  );
}