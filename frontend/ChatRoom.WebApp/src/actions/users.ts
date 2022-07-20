import { ReducerAction } from "../models/ReducerAction";
import { User } from "../models/User";
import { types } from "../types/types";



export const usersUserConntected = (user: User) : ReducerAction => ({
    type: types.usersUserConntected,
    payload: user
});

export const setConnectedUsers = (users: User[]) : ReducerAction => ({
    type: types.usersSetConnectedUsers,
    payload: users
});

export const usersUserDisconnected = (userId: string) : ReducerAction => ({
    type: types.usersUserDisconnected,
    payload: userId
});

