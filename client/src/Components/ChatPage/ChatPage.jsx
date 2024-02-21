import React from 'react'
import axios from 'axios'

export const ChatPage = () => {
    const fetchChats = async()=>{
        const data = await axios.get('/chats');
        console.log(data);
    }
  return (
    <div>ChatPage</div>
  )
}
