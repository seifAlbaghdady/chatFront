import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Message {
  id: number;
  name: string;
  content: string;
}

const MessagePanel: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint.
    axios
      .get('http://100.24.66.164:1000/api/msg')
      .then((response) => {
        const filteredMessages = response.data.map((message: any) => ({
          id: message.id,
          name: message.name,
          content: message.content,
        }));
        setMessages(filteredMessages);
      })
      .catch((error) => {
        console.error('Error fetching messages:', error);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="display-4">Messages</h1>
      <ul className="list-group">
        {messages.map((message) => (
          <li className="list-group-item" key={message.id}>
            <strong>{message.name}:</strong> {message.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MessagePanel;
