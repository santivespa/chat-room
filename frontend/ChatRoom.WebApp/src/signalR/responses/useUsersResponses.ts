

import { HubConnection } from '@microsoft/signalr';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setConnectedUsers, usersUserConntected, usersUserDisconnected } from '../../actions/users';

import { User } from '../../models/User';


export const useUserResponses = () => {

    const dispatch = useDispatch();
    const { users } = useSelector((state: any) => state.users);

    const defineUserResponses = (connection: HubConnection) => {

        connection.on("userConnected", (user: User) => {
            if (user) {
                dispatch(usersUserConntected(user));
            }
        });

        connection.on("displayUsers", (users: User[]) => {
            if (users) {
                dispatch(setConnectedUsers(users));
            }
        });

        connection.on("userDisconnected", (user: User) => {
            if (user) {
                dispatch(usersUserDisconnected(user.id));
            }
        });
    }

 
    return {
        defineUserResponses
    }

}



