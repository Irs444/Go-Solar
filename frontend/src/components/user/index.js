import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const index = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default index