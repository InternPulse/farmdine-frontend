import React from 'react';

interface ChatMessageProps {
  sender: string;
  text: string;
  isCurrentUser?: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ sender, text, isCurrentUser = false }) => {
  const messageClass = isCurrentUser ? 'text-right bg-blue-100 text-blue-700' : 'text-left bg-gray-100 text-gray-700';

  return (
    <div className={`p-2 rounded-lg ${messageClass}`}>
      <p className="font-bold">{sender}</p>
      <p>{text}</p>
    </div>
  );
};

export default ChatMessage;
