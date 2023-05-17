import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const LoginAuth = ({children}) => {

    const navigate = useNavigate();
  
    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

    if(currentUser===null){
        return children;
    }else{
        Swal.fire({
            title: 'Error',
            text: 'You are already logged in',
            icon: 'error'
        });
        navigate('/main/home');
    }
}

export default LoginAuth;