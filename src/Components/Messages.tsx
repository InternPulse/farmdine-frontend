import React, { useState } from 'react';
import ContactList from './Message/ContactList';
import ChatWindow from './Message/ChatWindow';

const contacts = [
  { id: '1', name: 'Alice' },
  { id: '2', name: 'Bob' },
  { id: '3', name: 'Charlie' },
];

const messages = {
  '1': [
    { id: '1', text: 'Hello Alice!', sender: 'me' },
    { id: '2', text: 'Hi there!', sender: 'Alice' },
  ],
  '2': [
    { id: '1', text: 'Hey Bob!', sender: 'me' },
    { id: '2', text: 'Hello!', sender: 'Bob' },
  ],
  '3': [
    { id: '1', text: 'Hi Charlie!', sender: 'me' },
    { id: '2', text: 'Hey!', sender: 'Charlie' },
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
