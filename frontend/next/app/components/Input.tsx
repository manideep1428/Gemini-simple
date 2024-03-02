import React, { useState } from 'react';

interface Props {
  onSend: (message: string) => void;
}

const Input: React.FC<Props> = ({ onSend }) => {
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSend(message);
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} 
      className="flex flex-wrap w-full m-4 p-6 fixed bottom-4 ml-40">
      <input
        type="text"
        placeholder="Type your message..."
        value={message}
        className='w-3/5 h-12 text-white pl-4 rounded ml-4  '
        onChange={handleChange}
      />
      <button 
      className='w-20 h-12 bg-blue-500 rounded hover:font-bold bg-blue-300'
      type="submit">Send</button>
    </form>
  );
};

export default Input;
