
import { ReducerAction } from "../models/ReducerAction";
import { User } from "../models/User";
import { types } from "../types/types";

export interface AuthState {
    userLogged: User
}

const initialState: AuthState = {
    userLogged: null
}

export const AuthReducer = (state: AuthState = initialState, action: ReducerAction) : AuthState => {

    switch (action.type) {

        case types.authLogin:
            return {
                ...state,
                userLogged: action.payload
            }


        case types.authLogout:
            return {
                ...state,
                userLogged: null
            }



        default:
            return state;
    }
}