import ChatMessage from './ChatMessage';

interface ChatWindowProps {
  messages: { id: string; text: string; sender: string; }[];
}

const ChatWindow: React.FC<ChatWindowProps> = ({ messages }) => {
  return (
    <div className="w-3/4 h-full p-4 flex flex-col bg-slate-100">
      <div className='flex justify-between items-center bg-slate-50 py-3 pl-2 rounded'>
          <div className='flex ml-10 space-x-6'>
              <img className='profile-image w-9 h-9' src="src/assets/profile1.jpg" alt="sender profile picture" />
              <p className='mt-2 profile-name'>Aisha Stephanie</p> 
          </div>
          <div className='flex mr-10 space-x-6'>
              <img className='w-4 h-4' src="src/assets/search-icon.png" alt="search icon"/>
              <img className='w-4 h-4' src="src/assets/call.jpg" alt="call icon" />
              <img className='w-4 h-4' src="src/assets/more-circle.jpg" alt="Open options icon" />
          </div>
      </div>
      <div className="flex-grow overflow-y-auto">
        {messages.map(message => (
          <ChatMessage key={message.id} message={message} />
        ))}
      </div>
      <div className="border-t border-gray-300 p-2 flex">
        <div className='flex justify-between bg-white mr-2 items-center pr-2 rounded-md w-full'>
          <div>
            <input type="text" className=" mr-2 rounded pl-4 py-1" placeholder="Type your messages.." />
          </div>
          <div className='flex'>
            <img className='w-4 h-4' src="src/assets/more-circle.jpg" alt="Open options icon" />
            <img className='w-4 h-4 ml-3' src="src/assets/map-pin.jpg" alt="map pin" />
          </div>
        </div>
        <img className='w-10 h-8' src="src/assets/send-icon.jpg" alt="send icon" />
      </div>
    </div>
  );
};

export default ChatWindow;
