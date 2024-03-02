import React from 'react';

interface Props {
  userInput: string;
}
interface Ai {
    AIResponse: string;
  }
  
export const UserMessage: React.FC<Props> = ({ userInput }) => {
  return (
    <div className='w-auto h-auto text-white text-center bg-blue-500 rounded max-w-[500px] overflow-hidden'>
       <h1 className='text-center m-auto'>{userInput}</h1> 
    </div>
  );
}

export const AIMessage: React.FC<Ai> =({ AIResponse })=>{
   return(
    <div className='w-auto h-auto text-white text-center bg-green-500 rounded max-w-[500px] overflow-hidden'>
       <h1 className='text-center m-auto'>{AIResponse}</h1> 
    </div>
   )
 
} 
