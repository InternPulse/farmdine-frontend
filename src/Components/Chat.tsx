import React from 'react';
import ChatWindow from './Message/ChatWindow';


const Chat: React.FC = () => {
 

  return (
    <div>
      <ChatWindow messages={[]} />
    </div>
  );
};

export default Chat;
