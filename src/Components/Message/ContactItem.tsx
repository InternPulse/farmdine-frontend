import React from 'react';

interface ContactItemProps {
  contact: { id: number; imageUrl: string; name: string; message: string; };
  onClick: () => void;
}

const ContactItem: React.FC<ContactItemProps> = ({ contact, onClick }) => {
  return (
    <div className=" flex p-2 rounded-lg mr-3 mt-2 cursor-pointer hover:bg-green-100" onClick={onClick}>
         <img src={contact.imageUrl} alt={contact.name} className="w-10 h-10 rounded-full mr-3" />
        <div>
            <div className='block font-bold'>{contact.name}</div>
            <div className='text-sm'>{contact.message}</div>
        </div>
        
    </div>
  );
};

export default ContactItem;
