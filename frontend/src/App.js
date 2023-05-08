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
import AddEquipment from './components/seller/AddEquipment';
import ManageExpert from './components/admin/ManageExpert';
import ManageUser from './components/admin/ManageUser';
import AdminProfile from './components/admin/AdminProfile';
import User from './components/user';
import ManageOrders from './components/user/ManageOrders';
import UserProfile from './components/user/UserProfile';
import Expert from './components/expert';
import Contacts from './components/expert/Contacts';
import ListEquipment from './components/main/ListEquipment';
import ExpertChat from './components/expert/ExpertChat';
import CheckoutPage from './components/user/CheckoutPage';
import Detail from './components/main/Detail';
import SellerAuth from './auth/SellerAuth';
import { ProductProvider } from './context/ProductContext';
import Cart from './components/user/Cart';

function App() {
  return (
    <BrowserRouter>

      <ProductProvider>

        <Routes>
          <Route path="/" element={<Navigate to="/main/home" />} />
          <Route path="main" element={<Main />} >
            <Route path='details/:id' element={<Detail />} />
            <Route path="signup" element={<Signup />} />
            <Route path="Login" element={<Login />} />
            <Route path="Home" element={<Home />} />
            <Route path="SellerLogin" element={<SellerLogin />} />
            <Route path="SellerSignUp" element={<SellerSignUp />} />
            <Route path="ListEquipment" element={<ListEquipment />} />
          </Route>
          <Route path="Seller" element={<SellerAuth> <Seller /> </SellerAuth>} >

            <Route path="ManageEquipment" element={<ManageEquipment />} />
            <Route path="AddEquipment" element={<AddEquipment />} />

          </Route>
          <Route path="Admin" element={<Admin />} >

            <Route path="AdminProfile" element={<AdminProfile />} />
            <Route path="ManageExpert" element={<ManageExpert />} />
            <Route path="ManageUser" element={<ManageUser />} />
          </Route>
          <Route path="User" element={<User />} >

            <Route path="ManageOrders" element={<ManageOrders />} />
            <Route path="UserProfile" element={<UserProfile />} />
            <Route path="CheckoutPage" element={<CheckoutPage />} />
            <Route path="cart" element={<Cart />} />

          </Route>
          <Route path="Expert" element={<Expert />} >

            <Route path="Contacts" element={<Contacts />} />
            <Route path="ExpertChat" element={<ExpertChat />} />

          </Route>
        </Routes>

      </ProductProvider>

    </BrowserRouter>
  )
}

export default App