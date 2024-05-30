import React from 'react';
import ContactItem from './ContactItem';

interface ContactListProps {
  contacts: { id: string; name: string; }[];
  onSelectContact: (id: string) => void;
}

const ContactList: React.FC<ContactListProps> = ({ contacts, onSelectContact }) => {
  return (
    <div className="w-1/4 border-r border-gray-300">
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
