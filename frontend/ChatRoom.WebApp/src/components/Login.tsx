


import React from 'react'
import { useState } from 'react'
import { useSignalR } from '../signalR/useSignalR';

export const Login = () => {


  const [userName, setUserName] = useState('');

  const { connectToChat } = useSignalR();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    setUserName(e.target.value);
  }

  const handleLogin = (e) => {
    e.preventDefault();
    connectToChat(userName);
    setUserName('');
  }

  return (

    <div className="login__container">
      <h3 className="seciton-title">Login</h3>
      <div className="w-100">
        <form onSubmit={handleLogin}>

        
        <input onChange={handleInputChange} value={userName} className="w-100 input__default"/>

        <button  type="submit" className="w-100 btn btn-danger btn-dark-red mt-3">
          login
        </button>
        </form>
      </div>
      <hr />
    </div>


  )
}
