'use client'
import React, { useState } from 'react';
import axios from 'axios';
import Input from '../components/Input';
import UserMessage from '../components/UserMessage';
import AIResponse from '../components/AIResponse';
import ReactMarkdown from 'react-markdown';

const ChatPage: React.FC = () => {
  const [userMessages, setUserMessages] = useState<string[]>([]);
  const [aiResponses, setAIResponses] = useState<string[]>([]);

  const handleUserInput = async (message: string) => {
    setUserMessages([message]);
  
     try{
      let response = await axios.post('http://localhost:8080/api/response', { message })
      let data = await response.data
      console.log(data)
        setAIResponses([ data]);
        console.log(aiResponses)
     }
     catch(err){
      console.log(err)
     }   
  };

  return (
    <div className='w-full h-full m-4'>
        <div className='absolute right-40'>
          {userMessages.map((message, index) => (
            <UserMessage key={index} message={message} index={index} />
          ))}
        </div>   

        <div className='absolute left-40'>  
            {aiResponses.map((response, index) => (
              <AIResponse key={index} response={response} index={index}/>
            ))}
        </div>     
          <Input onSend={handleUserInput} />
    </div>
  );
};

export default ChatPage;
