import React, { useState } from 'react';
import './ChatBotModal.css'; // We'll style this next

const ChatBotModal = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hello! How can I help you today?' },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { from: 'user', text: input }]);
    // Simulate bot reply
    setTimeout(() => {
      setMessages((prev) => [...prev, { from: 'bot', text: "I'm here to assist you." }]);
    }, 500);
    setInput('');
  };

  if (!isOpen) return null;

  return (
    <div className="chatbot-overlay">
      <div className="chatbot-modal">
        <div className="chatbot-header">
          <span>AI Assistant 🤖</span>
          <button onClick={onClose}>✖</button>
        </div>
        <div className="chatbot-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`chat-message ${msg.from}`}>
              {msg.text}
            </div>
          ))}
        </div>
        <div className="chatbot-input">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask something..."
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatBotModal;
