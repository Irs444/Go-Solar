import { MDBBtn, MDBCardImage, MDBIcon } from 'mdb-react-ui-kit'
import React from 'react'
import shop from '../../imgs/shop.png'
const Seller = () => {
  return (
  <>
  <div className='p-5  text-center bg-light'>
 
  <MDBCardImage src={shop} alt="login form" className='rounded-start w-25 mb-4'/><br />
      <MDBBtn className="mb-4" rounded  style={{ backgroundColor: '#55acee' }} href='#'>
      <MDBIcon className='me-2' fas icon="lock" />
       Login
        </MDBBtn> <br />
      <MDBBtn rounded   className='btn-primary ' href='#'>
      <MDBIcon className='me-2' fas icon="lock" />
       Register
        </MDBBtn>
  
     
      </div>
  </>
  )
}

export default Seller