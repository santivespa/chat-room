


import React from 'react'
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import { ChatRoomScreen } from '../components/ChatRoomScreen';



export const AppRouter = () => {
    return (
        <BrowserRouter>
        <Routes>
         

          <Route path="/*" element={ <ChatRoomScreen  /> } />


        </Routes>
      </BrowserRouter>
    )
}
