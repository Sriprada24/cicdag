import React, { useState } from 'react';
import WeatherWidget from './WeatherWidget';
import ChatBotModal from '../../components/ChatBotModal'; // adjust the path

const DashboardHome = () => {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Welcome, Farmer! 👋</h2>

      

      <WeatherWidget location="Vijayawada" />

      <div style={{
        backgroundColor: '#c6b665ff',
        padding: '15px',
        borderRadius: '8px'
      }}>
        <h3>AI Assistant 🤖</h3>
        <p>Need help with your crops or sales? Ask me anything!</p>
        <button
          onClick={() => setChatOpen(true)}
          style={{
            backgroundColor: '#4caf50',
            color: '#f3d5a9ff',
            border: 'none',
            padding: '10px 15px',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Chat with AI Assistant
        </button>
      </div>

      <ChatBotModal isOpen={chatOpen} onClose={() => setChatOpen(false)} />
    </div>
  );
};

export default DashboardHome;
