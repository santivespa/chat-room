import { AnyAction, CombinedState, combineReducers, Reducer } from "redux";
import { AuthReducer, AuthState } from "./authReducer";
import { messagesReducer, MessagesState } from "./messagesReducer";
import { signalrReducer, SignalRState } from "./signalrReducer";
import { usersReducer, UsersState } from "./usersReducer";


export interface State {
    auth: AuthState,
    messages: MessagesState,
    signalr: SignalRState,
    users: UsersState
}


const rootReducer = combineReducers({
    auth: AuthReducer,
    signalr: signalrReducer,
    users: usersReducer,
    messages: messagesReducer
});

export default rootReducer;