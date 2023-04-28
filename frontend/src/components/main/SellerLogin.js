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

function App() {
  return (
    <MDBContainer className="my-1">

      <MDBCard>
        <MDBRow className='g-0'>

          <MDBCol md='6'>
            <MDBCardImage src={seller} alt="login form" className='rounded-start w-100'/>
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column justify-content-center'>

              <div className='d-flex flex-column  '>
                <img src={logo} alt="" className='justify-content-center' style={{ maxWidth: '10rem' }} />
                {/* <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/> */}
                {/* <MDBCardImage src={logo} alt="login form" className='rounded-start w-10' /> */}
                <span className="h2 fw-bold mb-0">Welcome to Seller Panel</span>
              </div>

              <h5 className="fw-normal my-2 pb-3" style={{letterSpacing: '1px'}}>Welcome Back! Please login to your account.</h5>

                <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
                <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>

              <MDBBtn className="mb-2 px-5 btn-success" size='lg'>Login</MDBBtn>
              <a className="small text-muted" style={{color: '#609966'}} href="#!">Forgot password?</a>
              <p className="mb-3 pb-lg-2" style={{color: '#3c6255'}}> <a href="#!" style={{color: '#609966'}}>Become a seller</a></p>

              <div className='d-flex flex-row justify-content-start'>
                <a href="#!" className="small text-muted me-1">Terms of use.</a>
                <a href="#!" className="small text-muted">Privacy policy</a>
              </div>

            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
  );
}

export default App;