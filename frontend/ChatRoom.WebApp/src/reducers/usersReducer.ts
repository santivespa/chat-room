import { User } from "../models/User";
import { types } from "../types/types";


export interface UsersState {
    users: User[]
}


const initialState : UsersState = {
    users: [],
}

export const usersReducer = (state : UsersState = initialState, action) : UsersState => {
    switch (action.type) {

        case types.usersUserConntected:
            return {
                ...state,
                users: [...state.users, action.payload]
            }

        case types.usersSetConnectedUsers:
            return {
                ...state,
                users: action.payload
            }
        
        case types.usersUserDisconnected:
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.payload)
            }

        default:
            return state;
    }
}