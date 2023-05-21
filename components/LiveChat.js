import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import { makeRandomMessage } from '../helper'
import { IMG_URL } from '../utils/constants'

const LiveChat = () => {
  const [user, setUser] = useState([])
  const [liveMessage, setLiveMessage] = useState('')
  
  const dispatch = useDispatch()

  const chatMessages = useSelector(store => store.chat.messages)

  useEffect(() => {
    const timer = setTimeout(() => {
     getUser()
    }, 2000)

    return () => {
    clearInterval(timer)
    }
  })

  useEffect(() => {
    const timer = setTimeout(() => {
    dispatch(addMessage({
     firstName : user?.name?.first,
     lastName : user?.name?.last,
     pic : user?.picture?.thumbnail,
     message: makeRandomMessage()
    }))
    }, 2000)

    return () => {
        clearInterval(timer)
    }
  })

  const getUser = async () => {
    const response = await fetch('https://randomuser.me/api/')
    const data = await response?.json()
    setUser(data?.results[0])
  }
  return (
    <div className='flex flex-col gap-5'>
        <div className=' scrollbar scrollbar-thumb-blue-500 scrollbar-track-gray-400 rounded-lg flex flex-col-reverse gap-2 justify-start w-[25vw] h-[80vh] bg-gray-100 overflow-scroll mx-auto items-start'>
        {chatMessages.map((c, i) => 
        <ChatMessage key={i} pic={c.pic} firstName={c.firstName} lastName={c.lastName} msg={c.message} />
        )}
       </div>
    <div className='w-full flex flex-col gap-5'>
     <input className='w-full p-2 outline-none rounded-md' type='text' placeholder='message' value={liveMessage} onChange={(e) => { setLiveMessage(e.target.value)}} />

     <input className='w-full rounded-md bg-white cursor-pointer text-blue-700 font-bold hover:bg-gray-200 hover:text-blue-500 active:translate-y-0.5 p-2' type='Submit' onClick={() => {
      dispatch(addMessage({
        firstName : "Sumit",
        lastName : "Bhardwaj",
        pic : IMG_URL,
        message: liveMessage,
       }))
     }} />
    </div>
    </div>                                     
  )
}

export default LiveChat