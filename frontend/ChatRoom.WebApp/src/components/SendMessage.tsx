

import { ChangeEvent, useState } from 'react'
import { useSelector } from 'react-redux';
import { useSignalR } from '../signalR/useSignalR';

export const SendMessage = () => {

  const { sendMessage } = useSignalR();
  const { userLogged } = useSelector((state: any) => state.auth);


  const [value, setValue] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {

    setValue(e.target.value);
  }

  const handleSendMessage = (e) => {
    e.preventDefault();
    sendMessage(value);
    setValue('');
  }

  return (

 
      <form className="sendMessage__container" onSubmit={handleSendMessage} >
        <input onChange={handleInputChange} className="input__default sendMessage__input" value={value} />

        <button type="submit" className="btn btn-send btn-rounded" disabled={!userLogged}>
          <i className="fa-solid fa-paper-plane"></i>
        </button>
      </form>

   



  )
}
