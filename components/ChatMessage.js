import React from 'react'

const ChatMessage = (props) => {
  return (
    <div className='flex items-start gap-2 p-2'>
      <div className='h-16 w-16 flex items-end'>
       <img src={props.pic} alt='profilePic' className='rounded-full h-12 w-12'/>
      </div>
      <div className='flex flex-col justify-center w-1/2'>
        <p className='font-bold flex mt-2'>{props.firstName} {props.lastName}</p>
        <span className='text-lg w-[290px] text-black'>{props.msg} </span>
      </div>
    </div>
  )
}

export default ChatMessage