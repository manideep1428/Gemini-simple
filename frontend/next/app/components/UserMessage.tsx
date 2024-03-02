import React from 'react';

interface Props {
  message: string;
  index:number
}

const UserMessage: React.FC<Props> = ({ message , index}) => {
  return(
   <div className=' w-full h-12 max-w-[500px] pt-2 pl-4 rounded-lg bg-blue-500 text-white m-4 '>
       {message}
    </div>
  )
};

export default UserMessage;
