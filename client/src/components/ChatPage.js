import React, { useEffect } from 'react'
import axios from "axios";

const ChatPage = () => {

    const fetchData = async() => {
        const { data } = await axios.get('http://localhost:5000/api/chats');
        console.log(data)
        
    }

    useEffect(() => {
        fetchData();
    }, []);
  return (
    <div>
        
    </div>
  )
}

export default ChatPage