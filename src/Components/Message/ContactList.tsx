import React from 'react';
import ContactItem from './ContactItem';

interface ContactListProps {
  contacts: { id: string; name: string; }[];
  onSelectContact: (id: string) => void;
}

const ContactList: React.FC<ContactListProps> = ({ contacts, onSelectContact }) => {
  return (
    <div className="w-1/4 border-r mt-8 pl-8">
      <h1 className='font-bold text-xl pb-3'>Messages</h1>
      <div className='flex bg-slate-200 p-1 w-60 rounded-lg'>
        <img className='m-1 w-4 h-4 bg-slate-200' src="src/assets/search-icon.png" alt="search icon" />
        <input className='text-sm pl-2 border-none outline-0 bg-slate-200' type="search" name="search" id="search" placeholder='search here...' />
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
