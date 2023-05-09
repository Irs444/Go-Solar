import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
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
            <NavLink className="nav-link" to="/AddEquipment">
              AddEquipment
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/ManageEquipment">
              ManageEquipment
            </NavLink>
          </li>
         
        </ul>
        {/* Left links */}
      </div>
      {/* Collapsible wrapper */}
      {/* Right elements */}
      <div className="d-flex align-items-center">
      
        
        <div className="dropdown">
          <a
            className="dropdown-toggle d-flex align-items-center hidden-arrow"
            // href="#"
            // id="navbarDropdownMenuAvatar"
            role="button"
            
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
              className="rounded-circle"
              height={25}
              alt="Black and White Portrait of a Man"
              // loading="lazy"
            />
          </a>
          <ul
            className="dropdown-menu dropdown-menu-end"
            // aria-labelledby="navbarDropdownMenuAvatar"
          >
            <li>
              <a className="dropdown-item" href="">
                My profile
              </a>
            </li>
           
            
          </ul>
          <ul>
            <li>
              <button className='btn btn-danger mx-4 ' >logout</button>
            </li>
          </ul>
        </div>
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