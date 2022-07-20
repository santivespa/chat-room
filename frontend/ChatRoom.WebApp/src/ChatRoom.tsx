import { useEffect } from 'react';
import { Login } from './components/Login';
import { MessagesList } from './components/MessagesList';
import { SendMessage } from './components/SendMessage';
import { UsersList } from './components/UsersList';
import { AppRouter } from './routers/AppRouter';

import { useSignalR } from './signalR/useSignalR';


const ChatRoom = () => {
  return (
    <>
      <AppRouter />
    </>
  );
}

export default ChatRoom;
