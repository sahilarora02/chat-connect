import React from 'react'
import { useMultiChatLogic ,MultiChatSocket , MultiChatWindow } from 'react-chat-engine-advanced'
import Header from "../customHeader/index";
import StandardMessageForm from "../customMessageForms/StandardMessageForms"
import Ai from '../customMessageForms/Ai';
import AiCode from '../customMessageForms/AiCode';
import config from '../../../src/config.json';
const Chat = ({user , secret}) => {

    const chatProps = useMultiChatLogic(
        config.VITE_PROJECT_ID,
        user , 
        secret
    )

  return (
    <div style={{flexBasis:'100%'}}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow
         {...chatProps}
         style={{height:"100vh"}}
          renderChatHeader={(chat)=> <Header chat= {chat} />}
          renderMessageForm={(props)=>{

            if(chatProps.chat?.title.startsWith("AiChat_")){
              return <Ai props = {props} activeChat = {chatProps.chat} />
            }
            if(chatProps.chat?.title.startsWith("AiCode_")){
              return <AiCode props = {props} activeChat = {chatProps.chat} />
            }

           return(
            <StandardMessageForm props ={props} activeChat = {chatProps.chat} />
           )
          }}
/>
    </div>
  )
}

export default Chat
