import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon,
  MDBTextArea
}
from 'mdb-react-ui-kit';
import ContactImg from '../../imgs/contactImg.png'

const Contacts = () => {
  return (<>
<div className="text-center">
<h1 className=" display-3 fw-bold ls-tight px-3" style={{color: 'hsl(218, 81%, 95%)'}}>
  Have Some Question? <br />
    {/* <span style={{color: 'hsl(218, 81%, 75%)'}}>for your business</span> */}
  </h1>
  <p className='px-3 text-center' style={{color: 'hsl(218, 81%, 85%)'}}>
           Thank you for your interest in out services. Please fill out the form below<br/> and we will get back yo you promptly regarding your request.
          </p>
</div>
    <MDBContainer fluid className=' background-radial-gradient overflow-hidden'>

      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

        <img src={ContactImg} alt="" className='justify-content-center' style={{ maxWidth: '100rem' }} />


         

        </MDBCol>

        <MDBCol md='6' className='position-relative'>

          <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

          <MDBCard className='my-5 bg-glass'>
            <MDBCardBody className='p-5'>

              

              <MDBInput wrapperClass='mb-4' label='Name' id='form3' type='text'/>
              <MDBInput wrapperClass='mb-4' label='Phone' id='form3' type='tel'/>
              <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email'/>
              <MDBInput wrapperClass='mb-4' label='Subject' id='form4' type='text'/>
              <MDBTextArea wrapperClass='mb-4' label='Message' id='textAreaExample' rows={4} />

              {/* <div className='d-flex justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div> */}

              <button className=" btn mt-2 mb-2 px-5 btn-success btn-lg btn-block" >SEND MESSAGE</button>

              <div className="text-center">

                <p>or sign up with:</p>

                 

               
               
              </div>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
    </>
  );
}

export default Contacts;
// export default Contacts