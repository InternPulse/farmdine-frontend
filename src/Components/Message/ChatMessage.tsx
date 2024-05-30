import React from 'react';

interface ChatMessageProps {
  message: { id: number; text: string; sender: string; };
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  return (
    <div className={`p-4 ${message.sender === 'me' ? 'text-right' : 'text-left'}`}>
      <div className={`inline-block p-4 w-80 text-left rounded text-sm text-gray-700 ${message.sender === 'me' ? 'bg-green-100' : 'bg-white'}`}>
        {message.text}
      </div>
    </div>
  );
};

export default ChatMessage;
