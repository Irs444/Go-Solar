import React from 'react';
import { Outlet } from 'react-router-dom'
const Admin = () => {
    return (
        <div>
          
            <div>
                <Navbar />
                <Outlet />
            </div>
            
            
        </div>
    )
}

export default expert