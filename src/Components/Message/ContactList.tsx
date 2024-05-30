import React from 'react';
import ContactItem from './ContactItem';

interface ContactListProps {
  contacts: { id: string; name: string; }[];
  onSelectContact: (id: string) => void;
}

const ContactList: React.FC<ContactListProps> = ({ contacts, onSelectContact }) => {
  return (
    <div className="w-1/4 border-r border-gray-300 mt-8 pl-8">
      <h1 className='font-bold text-xl pb-3'>Messages</h1>
      <div>
        <input type="search" name="search" id="search" placeholder='search here...' />
      </div>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onClick={() => onSelectContact(contact.id)}
        />
      ))}
    </div>
  );
};

export default ContactList;
