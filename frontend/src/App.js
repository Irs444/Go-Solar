import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Signup from './components/main/Signup';
import Login from './components/main/Login';
import Home from './components/main/Home';
import Main from './components/main';
import SellerLogin from './components/main/SellerLogin';
import SellerSignUp from './components/main/SellerSignUp';
import Seller from './components/seller';
import ManageEquipment from './components/seller/ManageEquipment';
import AddEquipment from './components/seller/AddEquipment';
function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Navigate to="/main/home" />} />
        <Route path="main" element={<Main />} >

        <Route path="signup" element={<Signup />} />
        <Route path="Login" element={<Login />} />
        <Route path="Home" element={<Home />} />
        <Route path="SellerLogin" element={<SellerLogin />} />
        <Route path="SellerSignUp" element={<SellerSignUp />} />
        <Route path="Seller" element={<Seller/>} />

        <Route path="ManageEquipment" element={<ManageEquipment />} />
        <Route path="AddEquipment" element={<AddEquipment />} />
        {/* <Route path="Login" element={<Login />} />
        <Route path="Home" element={<Home />} /> */}
       </Route>
        
      </Routes>
      
    </BrowserRouter>
  )
}

export default App