import { useSelector } from "react-redux"
import { User } from "../models/User";
import { State } from "../reducers/rootReducer";
import { UsersListItem } from "./UsersListItem";




export const UsersList = () => {


  const { users } = useSelector((state: State) => state.users);


  return (
    <>

      <div className="usersList__container">

        <h3 className="seciton-title">Connected users</h3>
        {
          users.map((user: User) => {
            return <UsersListItem user={user} key={user.id} />
          })
        }
      </div>

    </>
  )
}
