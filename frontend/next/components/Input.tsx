import React, { useState } from 'react';
import { UserMessage ,AIMessage }from './UserMessage';
import axios from 'axios'

const Input = () => {
    const [chat, setChat] = useState('');
    const [messages, setMessages] = useState([]);
    const [aichat,setAiChat] = useState([])

    const handleChange = (e:any) => {
        setChat(e.target.value);
    }

    const handleSend = async () => {
        setMessages([...messages, chat]);
        const response = await axios.post("http:localhost:8080/api/response",chat)
        const data = await response.data
        setChat('');

    }

    return (
          <div>
            <input
                placeholder='Type Your Question...'
                value={chat}
                onChange={handleChange}
                className='md:text-white rounded w-4/5 h-12 placeholder:text-white'
            />
            <button
                className='w-20 h-12 bg-blue-500 rounded'
                onClick={handleSend}
            >
                Send
            </button>
            <div>
                {messages.map((message, index) => (
                    <UserMessage key={index} userInput={message} />
                ))}
            </div>
        </div>
    );
}

export default Input;
