

import React from 'react'
import { User } from '../models/User'

interface Props {
  user: User
}

export const UsersListItem = ({ user }: Props) => {

  const getUserStyle = (): React.CSSProperties => {

    let style : React.CSSProperties = {
      backgroundColor: `${user.color}20`,
      color: `${user.color}`,
    };



    return style;
  }

  return (
    <div className="usersList__item " style={ getUserStyle() }>
      <span>
        <strong>{user.userName}</strong>
      </span>

    </div>
  )
}
