import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import useProductContext from '../../context/ProductContext'
function Navbar() {
  const { getCartItemsCount } = useProductContext();
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
          <NavLink className="nav-link" to="/User/CheckOutPage">
             CheckOut
            </NavLink>
            </li>
          
          {/* <li className="nav-item">
            <NavLink className="nav-link" to="/manageorders">
              ManageOrders
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/userprofile">
              UserProfile
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/user/cart">
              Cart
            </NavLink>
          </li> */}
        </ul>
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  class="text-reset me-3 dropdown-toggle hidden-arrow"
                  to="/user/cart"
                  aria-expanded="false"
                >
                  <i class="fas fa-shopping-cart "></i>
                  <span class="badge rounded-pill badge-notification bg-danger">{getCartItemsCount()}</span>
                </Link>
              </li>
            </ul>
        {/* Left links */}
      </div>
      {/* Collapsible wrapper */}
      {/* Right elements */}
      <div className="d-flex align-items-center">
        {/* Icon
        <a className="text-reset me-3" href="#">
          <i className="fas fa-shopping-cart" />
        </a> */}
        
        
   
      
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