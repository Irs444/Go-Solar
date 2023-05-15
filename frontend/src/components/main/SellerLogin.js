import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';
import logo from '../../imgs/logo.jpg'
import seller from '../../imgs/seller.jpg'
import Swal from 'sweetalert2';
import { useFormik } from 'formik';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import ResetPassword from './ResetPassword';

function SellerLogin() {
    
  const loginForm = useFormik({
    initialValues : {
      email : "",
      password : "",
    },
    onSubmit : async (values, onSubmitProps) => {
      console.log(values);
      onSubmitProps.resetForm();
      const res = await fetch('http://localhost:5000/seller/authenticate',{
        method: 'POST',
        body: JSON.stringify(values),
        headers:{
          'Content-Type': 'application/json',
        },
      });
      console.log(res.status);

      if (res.status === 200){
        Swal.fire({
          icon: "success",
          title: "nice",
          text: "You have loggedin successfully",
        });

        const data = await res.json();

        sessionStorage.setItem('seller', JSON.stringify(data));
        navigate("/seller/ManageEquipment");

      } else if (res.status === 401){
        Swal.fire({
          icon: "error",
          title: "ERROR!!",
          text: "Invalide Credential",
        });
      }
       

    },
  });
  const navigate = useNavigate();
  
  return (
    <MDBContainer className="my-1">

      <MDBCard>
        <MDBRow className='g-0'>
     
          <MDBCol md='6'>
            <MDBCardImage src={'https://www.truewisher.com/wp-content/uploads/2021/01/impact-of-ecommerce.jpg'} alt="login form" className='rounded-start mt-6 w-100 h-100'/>
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column justify-content-center'> 
<form onSubmit={loginForm.handleSubmit}>
              <div className='d-flex flex-column  '>
                <img src={logo} alt="" className='justify-content-center' style={{ maxWidth: '10rem' }} />
                {/* <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/> */}
                {/* <MDBCardImage src={logo} alt="login form" className='rounded-start w-10' /> */}
                <span className="h2 fw-bold mb-0">Welcome to Seller Panel</span>
              </div>

              <h5 className="fw-normal my-2 pb-3" style={{letterSpacing: '1px'}}>Welcome Back! Please login to your account.</h5>

                <MDBInput wrapperClass='mb-4' type="email"
              id="email"
              value={loginForm.values.email}
              onChange={loginForm.handleChange} label='Email address'  size="lg"/>
                <MDBInput   type="password"
              id="password"
              value={loginForm.values.password}
              onChange={loginForm.handleChange} wrapperClass='mb-4' label='Password'  size="lg"/>


<Link className="small text-muted " style={{color: '#609966'}} to='/main/SResetPassword'>Forgot password?</Link>

           
              <br/>
              <button className=" btn mt-2 mb-2 px-5  btn-lg btn-block" style={{background:"linear-gradient(to right, rgb(252, 74, 26), rgb(247, 183, 51))", color:"white"}} >Login</button>
              <p className="mb-3 pb-lg-2" style={{color: '#FF5349'}}> <a href="#!" style={{color: '#FF5349'}}> <Link className="nav-link" to="/main/SellerSignUp">
            Become a Seller
            </Link></a></p>

              <div className='d-flex flex-row justify-content-start'>
                <a href="#!" className="small text-muted me-1">Terms of use.</a>
                <a href="#!" className="small text-muted">Privacy policy</a>
              </div>
              </form>
            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
  );
}

export default SellerLogin;