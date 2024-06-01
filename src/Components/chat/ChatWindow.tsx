import React, { useState } from 'react';
import ChatMessage from './ChatMessage';

interface Chat {
  id: string;
  sender: string;
  text: string;
}

interface ChatWindowProps {
  contact: { name: string };
}

const ChatWindow: React.FC<ChatWindowProps> = ({ contact }) => {
  const [messages, setMessages] = useState<Chat[]>([]);

  const sendMessage = (text: string) => {
    if (text.trim() !== '') { // Check if message is empty
      setMessages([...messages, { id: Math.random().toString(), sender: 'You', text }]);
    }
  };

  return (
    <div className="flex flex-col h-full bg-gray-200">
      <div className="flex items-center justify-between p-4 bg-white border-b border-gray-300">
        <h2 className="text-xl font-bold">{contact.name}</h2>
        <div className="flex space-x-2">
          <button className="text-blue-500 hover:text-blue-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317l4.975 4.975 M10.325 12.318l4.975 4.975 M10.325 20.318l4.975 4.975" />
            </svg>
          </button>
          <button className="text-blue-500 hover:text-blue-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7-4-4-7 7 7 7 4-4z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex-grow overflow-y-auto p-4">
        {messages.map((message) => (
          <ChatMessage key={message.id} sender={message.sender} text={message.text} />
        ))}
      </div>
      <div className="border-t border-gray-300 p-4 flex items-center">
        <input type="text" className="flex-grow rounded p-2" placeholder="Type a message..." onKeyDown={(e) => { if (e.key === 'Enter') { sendMessage(e.target.value); e.target.value = ''; } }} />
        <button className="ml-2 text-blue-500 hover:text-blue-700" onClick={() => sendMessage(document.querySelector('input').value)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.742 3.742L12 6.48 X 0 the chat window code in the above is not complete"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
