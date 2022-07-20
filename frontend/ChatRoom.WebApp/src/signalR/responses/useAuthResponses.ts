import { HubConnection } from "@microsoft/signalr";
import { useDispatch } from "react-redux";
import { login, logout } from "../../actions/auth";
import { User } from "../../models/User";



export const useAuthResponses = () => {

    const dispatch = useDispatch();

    const defineAuthResponses = (connection: HubConnection) => {

        connection.on("login", (user: User) => {

            if(user) {
                dispatch(login(user));
            }
        })

        connection.on("logout", (user: User) => {
            if(user) {
                dispatch(logout(user));
            }
        })
    }

  
    return {
        defineAuthResponses
    }

}
