import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBRadio,
  MDBSelect
}
from 'mdb-react-ui-kit';
import signup from '../../imgs/signup.jpg'
import { useFormik } from 'formik';
import Swal from 'sweetalert2';

function SellerSignUp() {

    const signupForm = useFormik({
        initialValues: {
          name :"",
          lname:"",
          email :"",
          phone:"",
          gender:"",
          address:"",
          password : "",
          cPassword : "",
          pincode:"",
          city:"",
          state:""
        },
        onSubmit: async (values, {setSubmitting}) => { 
          // setSubmitting(true);
          console.log(values);
        //   return;
      
          const res = await fetch('http://localhost:5000/seller/add',{
            method: 'POST',
            body : JSON.stringify(values),
            headers: {
              'Content-Type': 'application/json'
            }
          });
      
          console.log(res.status);
      
          if(res.status === 200){
      
            Swal.fire({
              icon : 'success',
              title : 'Nice',
              text : 'You have successfully registered'
            })
          } else {
            Swal.fire({
              icon : 'error',
              title : 'opps!!',
              text : 'something went worng'
            })
          }
          
        },
        // validationSchema: SignupSchema
       });


  return (
    <MDBContainer fluid className='bg-dark'>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol>

          <MDBCard className='my-4'>

            <MDBRow className='g-0'>

              <MDBCol md='6' className="d-none d-md-block">
                <MDBCardImage src={signup} alt="Sample photo" className="rounded-start" fluid/>
              </MDBCol>

              <MDBCol md='6'>

                <MDBCardBody className='text-black d-flex flex-column justify-content-center'>

                  <h2 className="mb-2  fw-bold" style={{color: ' #808080'}}>Create an account</h2>
                  <h5 className="fw-normal my-1 pb-3" style={{letterSpacing: '1px', color:' #808080'}}>Complete form below to signup for seller account.</h5>
                  <form onSubmit={signupForm.handleSubmit}>
                  <MDBRow>
                    <MDBCol md='6'>
                      <MDBInput type="text"
                    id="name"
                    values={signupForm.values.name}
                    onChange={signupForm.handleChange} wrapperClass='mb-4' label='First Name' size='lg' />
                    </MDBCol>

                    <MDBCol md='6'>
                      <MDBInput type="text"
                    id="lname"
                    values={signupForm.values.lname}
                    onChange={signupForm.handleChange} wrapperClass='mb-4' label='Last Name' size='lg' />
                    </MDBCol>

                  
                  </MDBRow>
                  <MDBInput
                    type="email"
                    id="email"
                    values={signupForm.values.email}
                    onChange={signupForm.handleChange}
                  wrapperClass='mb-4' label='Email ID' size='lg' />
                  <MDBRow>
                    <MDBCol md='6'>
                      <MDBInput 
                    type="password"
                    id="password"
                    values={signupForm.values.password}
                    onChange={signupForm.handleChange} wrapperClass='mb-4' label='Password' size='lg' />
                    </MDBCol>

                    <MDBCol md='6'>
                      <MDBInput
                       type="password"
                       id="cpassword"
                       values={signupForm.values.cpassword}
                       onChange={signupForm.handleChange}
                      wrapperClass='mb-4' label='Confirm Password' size='lg' />
                    </MDBCol>

                  
                  </MDBRow>
                  <MDBInput    type="tel"
                       id="phone"
                       values={signupForm.values.phone}
                       onChange={signupForm.handleChange} wrapperClass='mb-4' label='Phone' size='lg' />

                  <div className='d-md-flex ustify-content-start align-items-center mb-4'>
                    <h6 class="fw-bold mb-0 me-4"style={{color: ' #808080'}}>Gender: </h6>
                    <MDBRadio onChange={signupForm.handleChange} style={{color: ' #808080'}} name='gender' id='gender' value={signupForm.values.gender} label='Female' inline />
                    <MDBRadio onChange={signupForm.handleChange} style={{color: ' #808080'}} name='gender' id='gender' value={signupForm.values.gender} label='Male' inline />
                    <MDBRadio onChange={signupForm.handleChange} style={{color: ' #808080'}} name='gender' id='gender' value={signupForm.values.gender} label='Other' inline />
                  </div>

                

                  <MDBInput  type="text"
                    id="address"
                    values={signupForm.values.address}
                    onChange={signupForm.handleChange} wrapperClass='mb-4' label='Address' size='lg' />
                  <MDBInput 
                   type="number"
                   id="pincode"
                   values={signupForm.values.pincode}
                   onChange={signupForm.handleChange} wrapperClass='mb-4' label='Pincode' size='lg' />
                  <MDBInput 
                   type="text"
                   id="city"
                   values={signupForm.values.city}
                   onChange={signupForm.handleChange} wrapperClass='mb-4' label='City' size='lg' />
                  <MDBInput 
                   type="text"
                   id="state"
                   values={signupForm.values.state}
                   onChange={signupForm.handleChange} wrapperClass='mb-4' label='State' size='lg' />
                  

                  <div className="d-flex justify-content-end pt-3">
                    <MDBBtn color='light' size='lg'>Reset all</MDBBtn>
                    <button type='submit' className='btn btn-warning ms-2 btn-lg' >Submit form</button>
                  </div>


              
                  </form>
                </MDBCardBody>

              </MDBCol>
            </MDBRow>

          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default SellerSignUp;