
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { AppRouter } from '../routers/AppRouter';
import { useSignalR } from '../signalR/useSignalR';
import { Login } from './Login';
import { Messages } from './Messages';
import { MessagesList } from './MessagesList';
import { SendMessage } from './SendMessage';
import { Users } from './Users';
import { UsersList } from './UsersList';


export const ChatRoomScreen = () => {

    const { startConnection, disconnectToChat } = useSignalR();


    useEffect(() => {
        startConnection();
    }, []);

    const handleLogout = () => {
        disconnectToChat();
    }

    return (
        <>
            <div className="chatroom__container row m-0">

                {/* <div className="d-flex justify-content-center">
                    <h1>CHAT ROOM</h1>
                </div> */}
            
                {/* {
                    userLogged && (
                        <>


                            <div className="row col-12 col-sm-12 col-md-10 col-lg-8 justify-content-center" style={{ zIndex: 2 }}>

                                <div className="m-0 p-0 col-2 col-sm-4 chatroom_as-left-div">
                                    <div>

                                    </div>
                                </div>

                                <div className="m-0 p-0 col-8 col-sm-4 chatroom__logged-as">
                                    <h3 className="text-success">
                                        <i className="fa-solid fa-user"></i>
                                        <span className="ms-2 ">{userLogged.userName}</span>
                                    </h3>

                                    <button type="button" onClick={ handleLogout } className="btn btn-logout btn-rounded" title="Logout">
                                        <i className="fa-solid fa-arrow-right-from-bracket"></i>

                                    </button>
                                </div>

                                <div className="m-0 p-0 col-2 col-sm-4 chatroom_as-right-div">
                                    <div>

                                    </div>

                                </div>


                            </div>

                        </>

                    )
                } */}

              
               


                <div className="chatroom__content row m-0 p-0 col-12 col-sm-12 col-md-10 col-lg-8">

                    <Users />

                    <Messages />

                </div>


            </div>

        </>
    );
}