import { Message } from "../models/Message";
import { ReducerAction } from "../models/ReducerAction";
import { types } from "../types/types";



export const messagesAddMessage = (message: Message) : ReducerAction => ({
    type: types.messagesAddMessage,
    payload: message
});