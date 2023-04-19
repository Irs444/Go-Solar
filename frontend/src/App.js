import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Signup from './components/main/Signup';
import Login from './components/main/Login';
import Home from './components/main/Home';
import Main from './components/main';
function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Navigate to="/main/home" />} />
        <Route path="main" element={<Main />} >

        <Route path="signup" element={<Signup />} />
        <Route path="Login" element={<Login />} />
        <Route path="Home" element={<Home />} />
        </Route >

      </Routes>
    </BrowserRouter>
  )
}

export default App