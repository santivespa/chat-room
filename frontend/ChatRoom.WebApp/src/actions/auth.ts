import { User } from "../models/User";
import { types } from "../types/types";

export const login = (user: User) => ({
    type: types.authLogin,
    payload: user
});


export const logout = (user: User) => ({
    type: types.authLogout,
    payload: user
});