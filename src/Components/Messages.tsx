import React, { useState } from 'react';
import ContactList from './Message/ContactList';
import ChatWindow from './Message/ChatWindow';

const contacts = [
  { id: 1, imageUrl: 'src/assets/profile1.jpg', name: 'Aisha Stephanie', message: "Hi there, I saw your product..." },
  { id: 2, imageUrl: 'src/assets/profile2.jpg', name: 'Ogbeide Ayoola', message: "Hi there, I saw your product..." },
  { id: 3, imageUrl: 'src/assets/profile4.jpg', name: 'Micheal Angelo', message: "Hi there, I saw your product..." },
  { id: 4, imageUrl: 'src/assets/profile5.jpg', name: 'Aziz Akande', message: "Hi there, I saw your product..." },
  { id: 5, imageUrl: 'src/assets/profile01.png', name: 'Reacheline Moyana', message: "Hi there, I saw your product..." },
  { id: 6, imageUrl: 'src/assets/profile3.jpg', name: 'Thetele Ramoonyane', message: "Hi there, I saw your product..."  },
  { id: 7, imageUrl: 'src/assets/profile2.jpg', name: 'Anezi Jane', message: "Hi there, I saw your product..."  },
  { id: 8, imageUrl: 'src/assets/profile1.jpg', name: 'Aisha Musa', message: "Hi there, I saw your product..."  },
  { id: 9, imageUrl: 'src/assets/profile4.jpg', name: 'Muhammad Musa' , message: "Hi there, I saw your product..." },
  { id: 10,imageUrl: 'src/assets/profile01.png',  name: 'Ruth Godfrey', message: "Hi there, I saw your product..."  },
  { id: 11,imageUrl: 'src/assets/profile5.jpg',  name: 'Blessing Joseph', message: "Hi there, I saw your product..."  },
];

const messages = {
  1: [
    { id: 1, text: 'Thank you for getting back to me. I am interested in purchasing a basket of fruit. Could you please provide more details on its specifications, pricing, and availability? Additionally, I would like to know about the payment options and delivery timeline.', sender: 'me' },
    { id: 2, text: 'Thank you for getting back to me. I’m interested in purchasing a basket of fruit. Could you please provide more details on its specifications.', sender: 'Alice' },
  ],
  2: [
    { id: 1, text: 'Hey Bob!', sender: 'me' },
    { id: 2, text: 'Hello!', sender: 'Bob' },
  ],
  3: [
    { id: 1, text: 'Hi Charlie!', sender: 'me' },
    { id: 2, text: 'Hey!', sender: 'Charlie' },
  ],
};

const Message: React.FC = () => {
  const [selectedContactId, setSelectedContactId] = useState<string | null>(null);

  return (
    <div className="h-screen flex mt-8">
      <ContactList
        contacts={contacts}
        onSelectContact={setSelectedContactId}
      />
      {selectedContactId && (
        <ChatWindow messages={messages[selectedContactId]} />
      )}
    </div>
  );
};

export default Message;
