'use client'
import React, { useState } from 'react';
import axios from 'axios';
import Input from '../components/Input';
import UserMessage from '../components/UserMessage';
import AIResponse from '../components/AIResponse';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ChatPage: React.FC = () => {
  const [userMessages, setUserMessages] = useState<string[]>([]);
  const [aiResponses, setAIResponses] = useState<string[]>([]);
  const [data, setData] = useState(true);


  const handleUserInput = async (message: string) => {
    setData(false)
    setUserMessages([message]);
  
     try{
      let response = await axios.post('http://localhost:8080/api/response', { message })
      let data = await response.data
      console.log(data)
        setAIResponses([ data]);
        console.log(aiResponses)
     }
     catch(err:any){
      toast.error(err)
      console.log(err)
     }   
  };

  return (
    <div className='w-full h-full m-4 bg-[#1D232A]'>
        <div className='absolute right-40'>
          {userMessages.map((message, index) => (
            <UserMessage key={index} message={message} index={index} />
          ))}
        </div>   

         {data && 
            <div className='w-[95%] letters text-center text-[55px] mt-20 bg-[#1D232A] '>
              <p> Hi Iam Gemini API ,</p> 
             <p>  AskMe Anything</p> 
            </div>
         } 


        <div className='absolute left-40'>  
            {aiResponses.map((response, index) => (
              <AIResponse key={index} response={response} index={index}/>
            ))}
        </div>     
          <Input onSend={handleUserInput} />
          <ToastContainer />
    </div>
  );
};

export default ChatPage;
