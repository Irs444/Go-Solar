import React from 'react'
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

const Detail = () => {
  return (
    <MDBContainer className="my-5">

      <MDBCard>
        <MDBRow className='g-0'>

          <MDBCol md='6'>
            <MDBCardImage src="https://static.wixstatic.com/media/4ce113_734c6f233ea64313a72cdd27fd0e3b3b~mv2.jpg/v1/fill/w_688,h_458,al_c,q_85,usm_0.66_1.00_0.01/4ce113_734c6f233ea64313a72cdd27fd0e3b3b~mv2.webp" alt="login form" className='rounded-start w-100'/>
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>

              <div className='d-flex flex-row mt-2'>
               
                <span className="h1 fw-bold mb-0">MG 1.2KVA Solar Sensation Hybrid</span>
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Solar PCU</h5>

              <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>₹18,2000.00 </p>
              <MDBInput label='Quantity' id='typeNumber' type='number' />
              <a className="small text-muted" href="#!">Excluding Sales Tax | Free Shipping</a>
             
             <button className="btn btn-primary">Add To Cart</button>
              {/* <MDBBtn className="mb-4 px-5" color='' size='lg'>Add to Cart</MDBBtn> */}
              <MDBBtn className="mb-4 px-5 ouline" color='light' size='lg'>Book Now</MDBBtn>
              <p className="mb-3 pb-lg-2" style={{color: '#3c6255'}}> <a href="#!" style={{color: '#609966'}}> 
            In Stock
            </a></p>
            <hr />
            <h4>GENERIC</h4>
            <hr />
            <h6>TERMS AND CONDITIONS</h6>
            <p>100% </p>
          
            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
  )
}

export default Detail