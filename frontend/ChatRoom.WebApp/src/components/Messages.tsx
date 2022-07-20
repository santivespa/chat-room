import React from 'react'
import { useSelector } from 'react-redux';
import { State } from '../reducers/rootReducer';
import { useSignalR } from '../signalR/useSignalR';
import { MessagesList } from './MessagesList'
import { SendMessage } from './SendMessage'

export const Messages = () => {

    const { userLogged } = useSelector((state: State) => state.auth);

    const { disconnectToChat } = useSignalR();


    const handleLogout = () => {
        disconnectToChat();
    }

    return (
        <>
            <div className="col-12 col-sm-8 messages__container">


                <div className="d-flex ms-2 justify-content-between align-items-center">
                    {
                        userLogged &&
                        <>
                        <h3 className="seciton-title m-0" style={{color: userLogged.color}}>
                            <i className="fa-solid fa-user fa-xs"></i>
                            <span className="ms-2">
                                {userLogged.userName}
                            </span>
                        </h3>

                        <button type="button" onClick={handleLogout} className="btn btn-logout btn-rounded" title="Logout">
                            <i className="fa-solid fa-arrow-right-from-bracket"></i>
                        </button>
                        </>
                    }

                </div>




                <MessagesList />


                <SendMessage />



            </div></>
    )
}
