import { MDBCard, MDBCardBody, MDBContainer } from 'mdb-react-ui-kit'
import React from 'react'

const PageNotFound = () => {
  return (
   
   <>
   <MDBContainer className="my-1">

<MDBCard>
<MDBCardBody className='d-flex flex-column justify-content-center' >    
<img src='/PNF.jpg' alt=""  width={500} height={500} />
<button className="btn btn-warning">Back To Home</button>
</MDBCardBody>
</MDBCard>
</MDBContainer>
   </>
  )
}

export default PageNotFound