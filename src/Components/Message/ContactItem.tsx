import React from 'react';

interface ContactItemProps {
  contact: { id: string; name: string; };
  onClick: () => void;
}

const ContactItem: React.FC<ContactItemProps> = ({ contact, onClick }) => {
  return (
    <div className="p-4 cursor-pointer hover:bg-gray-200" onClick={onClick}>
      {contact.name}
    </div>
  );
};

export default ContactItem;
