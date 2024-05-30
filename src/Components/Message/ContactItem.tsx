import React from 'react';

interface ContactItemProps {
  contact: { id: string; imageUrl: string; name: string; messaage: string; };
  onClick: () => void;
}

const ContactItem: React.FC<ContactItemProps> = ({ contact, onClick }) => {
  return (
    <div className="p-2 rounded-lg mr-3 mt-2 cursor-pointer hover:bg-green-100" onClick={onClick}>
        {contact.imageUrl}
        <div>
            {contact.name}
            {contact.messaage}
        </div>
        
    </div>
  );
};

export default ContactItem;
