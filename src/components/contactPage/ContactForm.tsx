import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ firstName, lastName, email, message });
  };

  return (
    <div className="w-full max-w-xl mx-auto px-6 py-10 bg-stone-200 justify-center items-center inline-flex">
      <div className="self-stretch flex-col justify-start items-center gap-7 inline-flex">
        <div className="flex-col justify-start items-center gap-5 flex">
          <div className="text-stone-900 text-4xl font-semibold font-['Roboto']">Send a message</div>
          <div className="text-zinc-600 text-lg font-semibold font-['Roboto']">
            Need help or support? Just reach out to us. We're here to assist you.
          </div>
        </div>
        <form onSubmit={handleSubmit} className="flex-col justify-start items-end gap-11 flex">
          <div className="flex-col justify-start items-start gap-11 flex">
            <div className="justify-start items-start gap-8 inline-flex">
              <div className="flex-col justify-start items-start gap-2.5 inline-flex">
                <label htmlFor="firstName" className="text-stone-900/opacity-95 text-xl font-semibold font-['Roboto']">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-96 h-16 p-3 bg-white rounded-md"
                  required
                />
              </div>
              <div className="flex-col justify-start items-start gap-2.5 inline-flex">
                <label htmlFor="lastName" className="text-stone-900 text-xl font-semibold font-['Roboto']">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-96 h-16 p-3 bg-white rounded-md"
                  required
                />
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-2.5 flex">
              <label htmlFor="email" className="text-stone-900 text-xl font-semibold font-['Open Sans']">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-96 h-16 p-3 bg-white rounded-md"
                required
              />
            </div>
            <div className="flex-col justify-start items-start gap-2.5 flex">
              <label htmlFor="message" className="text-stone-900 text-xl font-semibold font-['Roboto']">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-96 h-72 p-3 bg-white rounded-md"
                required
              ></textarea>
            </div>
          </div>
          <button type="submit" className="w-52 h-14 p-2.5 bg-lime-400 rounded-lg justify-center items-center gap-2.5 inline-flex">
            <div className="text-stone-900 text-xl font-semibold font-['Roboto'] leading-10">Contact Us</div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
