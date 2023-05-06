import { MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBNavbarItem } from 'mdb-react-ui-kit'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import useProductContext from '../../context/ProductContext'

function Navbar() {

  const {getCartItemsCount} = useProductContext();

  return (
    <>
  {/* Navbar */}
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    {/* Container wrapper */}
    <div className="container">
      {/* Toggle button */}
      <button
        className="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars" />
      </button>
      {/* Collapsible wrapper */}
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {/* Navbar brand */}
        <a className="navbar-brand mt-2 mt-lg-0" href="#">
          <img
            src="/goSolar.png"
            height={40}
            alt="MDB Logo"
            loading="lazy"
          />
        </a>
        {/* Left links */}
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link" to="/main/home">
             Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/seller/ManageEquipment">
             Products
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/main/login">
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/main/signup">
              Signup
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/expert/Contacts">
              Contact Us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/user/cart">
              Cart
            </NavLink>
          </li>
       
        <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                  Seller
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link><Link className="nav-link" to="/main/SellerLogin">
              Login
            </Link></MDBDropdownItem>
                  <MDBDropdownItem link><Link className="nav-link" to="/main/SellerSignup">
              Become a Seller
            </Link></MDBDropdownItem>
                  {/* <MDBDropdownItem link><NavLink className="nav-link" to="/main/login">
              Login
            </NavLink></MDBDropdownItem> */}
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
            <h1>{getCartItemsCount()}</h1>
            </ul>
        {/* Left links */}
      </div>
     
      {/* Right elements */}
    </div>
    {/* Container wrapper */}
  </nav>
  {/* Navbar */}
</>

  )
}

export default Navbar