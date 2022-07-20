

import React from 'react'
import { useSelector } from 'react-redux'
import { Message } from '../models/Message'
import { State } from '../reducers/rootReducer'

interface Props {
  message: Message
}

export const MessagesListItem = ({ message }: Props) => {

  const { userLogged } = useSelector((state: State) => state.auth);
  const { messages } = useSelector((state: State) => state.messages);



  const getMessageStyle = (): React.CSSProperties => {

    let style : React.CSSProperties = {
      backgroundColor: `${message.user.color}18`,
    };

    if(isUserLoggedMessage()) {
      style.alignItems = 'end';
      style.textAlign = 'right';
      style.borderRight = `3px solid ${message.user.color}`;
    }else{
      style.alignItems = 'start';
      style.textAlign = 'left';
      style.borderLeft = `3px solid ${message.user.color}`;
    }

    return style;
  }

  const isUserLoggedMessage = (): boolean => {
    return message.user.id == userLogged?.id;
  }

  return (

    <div className="d-flex messageList-item-container" style={{ 
        justifyContent: isUserLoggedMessage() ? 'end' : 'start',
    }}>

      <div  className="messagesList__item" style={getMessageStyle()}>

      <span style={{color: message.user.color}}>
          <strong>{message.user.userName}</strong>
        </span>
        <div style={{wordBreak: 'break-all'}}>
          {message.value}
        </div>
     
      </div>

       

    </div>

  )
}
