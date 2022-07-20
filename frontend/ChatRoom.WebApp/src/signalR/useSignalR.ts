
import * as signalR from '@microsoft/signalr';

import { useDispatch, useSelector } from 'react-redux';
import { signalrConnected } from '../actions/signalr';
import { useAuthResponses } from './responses/useAuthResponses';
import { useMessagesResponses } from './responses/useMessagesResponses';
import { useUserResponses } from './responses/useUsersResponses';
const API_URL = process.env.REACT_APP_API_URL;


export const useSignalR = () => {


    const dispatch = useDispatch();

    const { connection } = useSelector((state: any) => state.signalr);
    const { defineUserResponses } = useUserResponses();
    const { defineMessagesResponses } = useMessagesResponses();
    const { defineAuthResponses } = useAuthResponses();

    const startConnection = () => {

        //build connection
        const connection = new signalR.HubConnectionBuilder()
            .withUrl(`${API_URL}/chatRoomHub`)
            .build();

        //start connection
        connection
            .start()
            .then(() => console.log("Connected to signalr!"));

        //define signalr responses
        defineResponses(connection);

        //save connection to store
        dispatch(signalrConnected(connection));
    }


    const connectToChat = (userName: string) => {
        connection.invoke("Connect", userName);
    }

    const disconnectToChat = () => {
        connection.invoke("Disconnect");
    }
    const sendMessage = (value: string) => {
        connection.invoke("SendMessage", value);
    }

    const defineResponses = (connection: signalR.HubConnection) => {
        defineUserResponses(connection);
        defineMessagesResponses(connection);
        defineAuthResponses(connection);
    }

    return {
        startConnection,
        connectToChat,
        disconnectToChat,
        sendMessage
    }

}