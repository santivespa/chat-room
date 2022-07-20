import { Message } from "../models/Message";
import { ReducerAction } from "../models/ReducerAction";
import { types } from "../types/types";





export interface MessagesState {
    messages: Message[]
}

const initialState: MessagesState = {
    messages: []
}



export const messagesReducer = (state: MessagesState = initialState, action: ReducerAction) : MessagesState => {

    switch (action.type) {

        case types.messagesAddMessage:
            return {
                ...state,
                messages: [...state.messages, action.payload]
            }

        default:
            return state;
    }

}