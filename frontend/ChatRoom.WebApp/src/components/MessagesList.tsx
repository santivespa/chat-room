
import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';
import { Message } from '../models/Message';
import { State } from '../reducers/rootReducer';
import { MessagesListItem } from './MessagesListItem';

export const MessagesList = () => {

    const bottomRef = useRef(null);

    const { messages } = useSelector((state: State) => state.messages);

    useEffect(() => {
        bottomRef.current.scrollIntoView({ behavior: "smooth" });
      }, [messages]);

    return (
        <>
            <div className="messagesList__container custom-scrollbar">
          
                {
                    messages.map((message: Message) => {
                        return <MessagesListItem message={message} key={message.id} />
                    })
                }
             
             <div ref={ bottomRef } id="bottomRef"/>
            </div>
        </>
    )               
}
