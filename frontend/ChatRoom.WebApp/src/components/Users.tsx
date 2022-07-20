

import React from 'react'
import { useSelector } from 'react-redux'
import { State } from '../reducers/rootReducer'
import { Login } from './Login'
import { UsersList } from './UsersList'

export const Users = () => {

    const { userLogged } = useSelector((state: State) => state.auth);

    return (
        <div className="users__container col-12 col-sm ps-0">

            {
                !userLogged &&  <Login />
            }

            <UsersList />

        </div>

    )
}
