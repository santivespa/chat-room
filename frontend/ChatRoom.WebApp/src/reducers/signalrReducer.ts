import { HubConnection } from "@microsoft/signalr";
import { ReducerAction } from "../models/ReducerAction";
import { types } from "../types/types";



export interface SignalRState {
    connection: HubConnection
}

const initialState: SignalRState = {
    connection: null
}



export const signalrReducer = (state: SignalRState = initialState, action: ReducerAction): SignalRState => {

    switch (action.type) {

        case types.signalrConnected:
            return {
                ...state,
                connection: action.payload
            }

        default:
            return state;
    }

}