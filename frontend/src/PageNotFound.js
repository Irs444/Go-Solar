import { MDBCard,  MDBContainer } from 'mdb-react-ui-kit'
import React from 'react'
import { Link } from 'react-router-dom';

const PageNotFound = () => {

    const styleObj = {
        display: 'flex',
        flexDirection:"Column",
        justifyContent:'center',
        alignItems: 'center',
        height: '90vh'
      };
  return (
   
   <>
   <MDBContainer className="my-1">

<MDBCard>

<div className="imageContainer"style={styleObj} >
<img src='/PNF.jpg' alt=""  width={500} height={500}  />
<Link to="/main/home" className="btn btn-warning rounded-pill">Back To Home</Link>
</div>

</MDBCard>
</MDBContainer>
   </>
  )
}

export default PageNotFound