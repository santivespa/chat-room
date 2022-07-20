import { HubConnection } from "@microsoft/signalr";
import { types } from "../types/types";


export const signalrConnected = (connection: HubConnection) => ({
    type: types.signalrConnected,
    payload: connection
});