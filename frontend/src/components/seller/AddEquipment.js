import React, { useState } from 'react'
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn,


  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,

  MDBIcon,
  MDBTextArea,

}
  from 'mdb-react-ui-kit';

// import MDBFileupload from 'mdb-react-fileupload';
const AddEquipment = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <MDBContainer className="my-5">
      <h2>Add New Equipment</h2>
      <MDBCard >
        <MDBRow className='g-0'>

          <MDBCol md='6'>
            <div>
              {/* <h1>Upload and Display Image usign React Hook's</h1> */}

              {selectedImage && (
                <div>
                  <img
                    alt="not found"
                    width={"500px"}
                    src={URL.createObjectURL(selectedImage)}
                  />
                  <br />
                  <button onClick={() => setSelectedImage(null)}>Remove</button>
                </div>
              )}

              <br />
              <br />

              <input
                type="file"
                name="myImage"
                onChange={(event) => {
                  console.log(event.target.files[0]);
                  setSelectedImage(event.target.files[0]);
                }}
              />
            </div>
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>

              <form>


                <MDBInput wrapperClass='mb-4' id='form6Example3' label='Title' />
                {/* <MDBInput wrapperClass='mb-4' textarea rows={4} id='form6Example4' label='Description' /> */}
                <MDBTextArea wrapperClass='mb-4' label='Description' id='textAreaExample' rows={4} />
                <MDBInput wrapperClass='mb-4' type='number' id='form6Example5' label='Price' />
                <MDBInput wrapperClass='mb-4' type='tel' id='form6Example6' label='Phone' />

                <MDBInput wrapperClass='mb-4' id='form6Example7' label='Category' />

                {/* <MDBCheckbox
      wrapperClass='d-flex justify-content-center mb-4'
      id='form6Example8'
      label='Create an account?'
      defaultChecked
    /> */}
                <MDBBtn rounded className='mx-2' color='primary'>
                  Save
                </MDBBtn>
                <MDBBtn rounded className='mx-2' color='info'>
                  Save & Add Another
                </MDBBtn>
                <MDBBtn outline rounded className='text-dark mx-2 ' color='Dark'>
                  Cancel
                </MDBBtn>

              </form>


            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>

  )
}

export default AddEquipment;

