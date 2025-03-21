import React, { useState, useRef, useEffect } from "react";
import "../styles.css";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false); // Controls chatbot visibility
  const [messages, setMessages] = useState([
    { text: "Hi! How can I help you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatBodyRef = useRef(null);

  // FAQ Options
  const faqOptions = [
    "What services do you offer?",
    "How can I apply for a job?",
    "Do you have remote job options?",
    "How do I contact support?",
    "What is frontend development?",

  ];

  const toggleChatbot = () => {
    if (isOpen) {
      setMessages([{ text: "Hi! How can I help you today?", sender: "bot" }]); // Reset messages when closing
    }
    setIsOpen((prev) => !prev);
  };

  const getBotResponse = (userText) => {
    const lowerText = userText.toLowerCase();
    const responses = {
      hello: ["Hello! How can I assist you?", "Hi there! Need help?"],
      "how are you": ["I'm just a bot, but I'm here to help!", "I'm doing great! Thanks for asking."],
      bye: ["Goodbye! Have a great day!", "See you later!"],
      "what's your name": ["I'm your AI assistant!", "I'm a chatbot here to assist you."],
      thanks: ["You're welcome! 😊", "No problem! Let me know if you need more help."],
      "what services do you offer?": ["We provide job search assistance, resume tips, and career advice!"],
      "how can i apply for a job?": ["You can browse job listings and click 'Apply Now' to submit your application."],
      "do you have remote job options?": ["Yes! Many companies offer remote job opportunities. Try searching for 'remote' jobs."],
      "how do i contact support?": ["You can reach out to our support team:\n\n" +
                                    "📩 Saheli - patrasaheli499@gmail.com | 📞 +91 92089 16364\n" +
                                    "📩 Muskan - muskann1309@gmail.com | 📞 +91 89386 07254\n" +
                                    "📩 Akanksha - akbisht9868@gmail.com | 📞 +91 90743 49839\n\n" +
                                    "Feel free to email or call for assistance!"],
      "what is frontend development?": ["Frontend development focuses on creating the user interface and experience of a website using HTML, CSS, and JavaScript."],
    };
    return responses[lowerText] || "I'm not sure about that, but I can find out!";
  };

  const handleSend = (messageText) => {
    if (!messageText.trim()) return;

    const userMessage = { text: messageText, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    setIsTyping(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: getBotResponse(messageText), sender: "bot" },
      ]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend(input);
  };

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  return (
    <div className="chatbot-container">
      <button className="chatbot-toggle" onClick={toggleChatbot}>
        💬
      </button>

      {isOpen && (
        <div className="chatbot">
          <div className="chat-header">
            AI Assistant
            <button className="close-btn" onClick={toggleChatbot}>✖</button>
          </div>
          <div className="chat-body" ref={chatBodyRef}>
            {messages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
            {isTyping && <div className="chat-message bot">...</div>}

            {/* FAQ Options Always Visible After Answer */}
            {!isTyping && (
              <div className="faq-options">
                {faqOptions.map((option, index) => (
                  <button key={index} className="faq-button" onClick={() => handleSend(option)}>
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="chat-footer">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask me something..."
              aria-label="Chat input"
            />
            <button onClick={() => handleSend(input)} disabled={!input.trim()}>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;