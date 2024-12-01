import React from "react"
import { Route, Routes } from 'react-router-dom';
import Start from "./pages/Start";
import UserSignup from "./pages/UserSignup";
import UserLogin from "./pages/UserLogin";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignup from "./pages/CaptainSignup";
import Home from "./pages/Home";
import UserLogout from "./pages/UserLogout";
import UserProtectedWrapper from "./pages/UserProtectedWrapper";
import CaptainHome from "./pages/CaptainHome";
import CaptainLogout from "./pages/CaptainLogout";
import CaptainProtectedWrapper from "./pages/CaptainProtectedWrapper";
import './App.css';

export default function App() {

  const appStyle = {
    // max-w-[400px] min-w-[250px]
    minWidth: '250px', // Minimum width
    maxWidth: '400px', // Maximum width
    margin: '0 auto', // Center the application
    width: '100%', // Responsive width
    overflowX: 'hidden', // Prevent horizontal scroll
  };

  return (
    <div style={appStyle} className="rounded-xl bg-white">

      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/home' element={
          <UserProtectedWrapper>
            <Home />
          </UserProtectedWrapper>
        } />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/signup' element={<UserSignup />} />
        <Route path='/captain-login' element={<CaptainLogin />} />
        <Route path='/captain-signup' element={<CaptainSignup />} />
        <Route path='/captain-logout' element={<CaptainLogout />} />
        <Route path='/user/logout' element={
          <UserProtectedWrapper>
            <UserLogout />
          </UserProtectedWrapper>
        } />

        <Route path='/captain-home' element={
          <CaptainProtectedWrapper>
            <CaptainHome />
          </CaptainProtectedWrapper>}
        />


      </Routes>
    </div>
  )
}