import React from 'react';
import ChatMessage from './ChatMessage';

interface ChatWindowProps {
  messages: { id: string; text: string; sender: string; }[];
}

const ChatWindow: React.FC<ChatWindowProps> = ({ messages }) => {
  return (
    <div className="w-3/4 h-full p-4 flex flex-col bg-slate-100">
      <div className='flex justify-between items-center bg-slate-50 py-3 pl-2 rounded'>
          <div className='flex'>
              <img className='w-9 h-9' src="src/assets/profile1.jpg" alt="sender profile picture" />
              <p>Ruth Godfrey</p> 
          </div>
          <div className='flex'>
              <img className='w-4 h-4' src="src/assets/search-icon.png" alt="search icon"/>
              <img className='w-4 h-4' src="src/assets/call.jpg" alt="call icon" />
              <img className='w-4 h-4' src="src/assets/more-circle.jpg" alt="icon more" />
          </div>
      </div>
      <div className="flex-grow overflow-y-auto">
        {messages.map(message => (
          <ChatMessage key={message.id} message={message} />
        ))}
      </div>
      <div className="border-t border-gray-300 p-4">
        <input type="text" className="w-full p-2 border rounded" placeholder="Type a message" />
      </div>
    </div>
  );
};

export default ChatWindow;
