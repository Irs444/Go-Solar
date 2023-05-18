import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css'

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
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from './components/main/CheckoutForm';
import { UserProvider } from './context/UserContext';
import UserChat from './components/user/Chat';

import Elogin from './components/main/Elogin';
import SignUp from './components/expert/SignUp';
import PageNotFound from './PageNotFound';
import ResetPassword from './components/main/ResetPassword';
import SResetPassword from './components/main/SResetPassword';
import UserAuth from './auth/UserAuth';
import LoginAuth from './auth/LoginAuth';
import ShoppingCart from './components/user/ShoppingCart';


function App() {


  

  return <BrowserRouter>

    <ProductProvider>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/main/home" />} />
          <Route path="main" element=  {<Main />} >
            <Route path='details/:id' element={<Detail />} />
            <Route path="signup" element={<Signup />} />
            <Route path="Login" element={ <LoginAuth> <Login /> </LoginAuth>} />
            <Route path="Home" element={<Home />} />
            <Route path="SellerLogin" element={<SellerLogin />} />
            <Route path="SellerSignUp" element={<SellerSignUp />} />
            <Route path="ListEquipment" element={<ListEquipment />} />
            <Route path="ResetPassword" element={<ResetPassword />} />
            <Route path="SResetPassword" element={<SResetPassword />} />
            {/* <Route path='*' element={<PageNotFound />} /> */}
            {/* <Route path="checkout" element={<Elements options={options} stripe={stripePromise}> <CheckoutForm /> </Elements>} /> */}
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
          <Route path="User" element={<UserAuth><User /></UserAuth>} >

            <Route path="ManageOrders" element={<ManageOrders />} />
            <Route path="UserProfile" element={<UserProfile />} />
            <Route path="CheckoutPage" element={<CheckoutPage />} />
            <Route path="cart" element={ <ShoppingCart /> } />
            <Route path="chat" element={<UserChat />} />

          </Route>
          <Route path="Expert" element={<Expert />} >

            <Route path="Contacts" element={<Contacts />} />
            <Route path="ExpertChat" element={<ExpertChat />} />
            <Route path="Elogin" element={<Elogin />} />
            <Route path="expertSignup" element={<SignUp />} />

          </Route>
            <Route path="*" element={<PageNotFound />} />
        </Routes>

      </UserProvider>
    </ProductProvider>

  </BrowserRouter>

}

export default App