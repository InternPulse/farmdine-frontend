import React from 'react';

interface ChatMessageProps {
  message: { id: string; text: string; sender: string; };
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  return (
    <div className={`p-4 ${message.sender === 'me' ? 'text-right' : 'text-left'}`}>
      <div className="inline-block bg-gray-200 rounded p-2">
        {message.text}
      </div>
    </div>
  );
};

export default ChatMessage;
