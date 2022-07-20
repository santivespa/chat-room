import { HubConnection } from "@microsoft/signalr";
import { useDispatch } from "react-redux";
import { messagesAddMessage } from "../../actions/messages";
import { Message } from "../../models/Message";


export const useMessagesResponses = () => {

    const dispatch = useDispatch();


    const defineMessagesResponses = (connection: HubConnection) => {

        connection.on("newMessage", (message: Message) => {

            if(message){
                dispatch(messagesAddMessage(message));
            }
        });
    }

    return {
        defineMessagesResponses
    }

}



