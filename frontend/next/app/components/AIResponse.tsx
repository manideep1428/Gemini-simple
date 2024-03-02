import React from 'react';
import ReactMarkdown from 'react-markdown';

interface Props {
  response: string;
  index:number;
}

const AIResponse: React.FC<Props> = ({ response ,index }) => {
  return (
        <div className=' w-full max-w-[500px] pl-4 rounded-lg bg-slate-400 text-white m-4 p-2 mb-40 mt-32'>
           <ReactMarkdown>{response}</ReactMarkdown>
        </div>
    )
};

export default AIResponse;
