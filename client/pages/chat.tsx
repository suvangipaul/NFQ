import React from 'react'
import dynamic from 'next/dynamic'
const Abylchat =  dynamic(() => import('../components/abylchat/abylchat.component'), { ssr: false });
const Chat = () => {

  return (
    <div className='chat-page'>
        <Abylchat />
    </div>
  )
}

export default Chat