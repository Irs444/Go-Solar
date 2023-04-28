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

function SellerSignUp() {




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
                  <MDBRow>

                    <MDBCol md='6'>
                      <MDBInput wrapperClass='mb-4' label='First Name' size='lg' id='form1' type='text'/>
                    </MDBCol>

                    <MDBCol md='6'>
                      <MDBInput wrapperClass='mb-4' label='Last Name' size='lg' id='form2' type='text'/>
                    </MDBCol>

                  </MDBRow>
                  <MDBInput wrapperClass='mb-4' label='Email ID' size='lg' id='form6' type='text'/>
                  <MDBInput wrapperClass='mb-4' label='Phone' size='lg' id='form3' type='tel'/>

                  <div className='d-md-flex ustify-content-start align-items-center mb-4'>
                    <h6 class="fw-bold mb-0 me-4"style={{color: ' #808080'}}>Gender: </h6>
                    <MDBRadio style={{color: ' #808080'}} name='inlineRadio' id='inlineRadio1' value='option1' label='Female' inline />
                    <MDBRadio style={{color: ' #808080'}} name='inlineRadio' id='inlineRadio2' value='option2' label='Male' inline />
                    <MDBRadio style={{color: ' #808080'}} name='inlineRadio' id='inlineRadio3' value='option3' label='Other' inline />
                  </div>

                  <MDBRow>

                    <MDBCol md='6'>
                      {/* <MDBSelect
                        className='mb-4'
                        size='lg'
                        data={[
                          { text: 'State', value: 1 },
                          { text: 'Option 1', value: 2 },
                          { text: 'Option 2', value: 3 },
                          { text: 'Option 3', value: 4 }
                        ]}
                        /> */}
                    </MDBCol>

                    <MDBCol md='6'>
                      {/* <MDBSelect
                        className='mb-4'
                        size='lg'
                        data={[
                          { text: 'City', value: 1 },
                          { text: 'Option 1', value: 2 },
                          { text: 'Option 2', value: 3 },
                          { text: 'Option 3', value: 4 }
                        ]}
                        /> */}
                    </MDBCol>

                  </MDBRow>

                  <MDBInput wrapperClass='mb-4' label='Address' size='lg' id='form5' type='text'/>
                  <MDBInput wrapperClass='mb-4' label='Pincode' size='lg' id='form4' type='text'/>
                  <MDBInput wrapperClass='mb-4' label='City' size='lg' id='form4' type='text'/>
                  <MDBInput wrapperClass='mb-4' label='State' size='lg' id='form4' type='text'/>
                

                  <div className="d-flex justify-content-end pt-3">
                    <MDBBtn color='light' size='lg'>Reset all</MDBBtn>
                    <MDBBtn className='ms-2' color='warning' size='lg'>Submit form</MDBBtn>
                  </div>


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