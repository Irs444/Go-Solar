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
import Admin from './components/admin';
import ManageExpert from './components/admin/ManageExpert';
import ManageUser from './components/admin/ManageUser';
import AdminProfile from './components/admin/AdminProfile';
import Trying from './components/admin/Trying';
import AddEquipment from './components/seller/AddEquipment';
import UserProfile from './components/user/UserProfile';
import ManageOrders from './components/user/ManageOrders';
import ManageUser from './components/admin/ManageUser';
import Admin from './components/admin';
import Contacts from './components/expert/Contacts';
import Expert from './components/expert';
import User from './components/user';
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
          <Route path="Seller" element={<Seller />} />

          {/* <Route path="ManageEquipment" element={<ManageEquipment />} />
        <Route path="AddEquipment" element={<AddEquipment />} /> */}

          {/* <Route path="Login" element={<Login />} />
        <Route path="Home" element={<Home />} /> */}
        </Route>
        <Route path='seller' element={<Seller />} >

          <Route path="ManageEquipment" element={<ManageEquipment />} />
          <Route path="AddEquipment" element={<AddEquipment />} />
        </Route>
        <Route path='user' element={<User />}>
          <Route path='userProfile' element={<UserProfile />} />
          <Route path='manageOrders' element={<ManageOrders />} />
        </Route>
        <Route path='admin' element={<Admin />}>
          <Route path='ManageUser' element={<ManageUser />} />
        </Route>
        <Route path='expert' element={<Expert />}>
          <Route path='contacts' element={<Contacts />} />
        </Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App