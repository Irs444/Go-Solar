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
import { useFormik } from 'formik';
import Swal from 'sweetalert2';

// import MDBFileupload from 'mdb-react-fileupload';
const AddEquipment = () => {
  const addequipmentForm = useFormik({
    initialValues: {
      title : '',
      description : '',
      price : '',
      category : '',
      image : '',
    },
    onSubmit: async (values, {setSubmitting}) => { 
      // setSubmitting(true);
      console.log(values);
  
      const res = await fetch('http://localhost:5000/equipment/add',{
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
  
   });
  const [selectedImage, setSelectedImage] = useState(null);

  
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('seller')));

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

              <form onSubmit={addequipmentForm.handleSubmit}>


                <MDBInput wrapperClass='mb-4' id='title' type='title' label='Title' value={addequipmentForm.values.title} onChange={addequipmentForm.handleChange} className="form-control form-control-lg" />
              
                <MDBInput wrapperClass='mb-4'  id='description' type='Description' label='Description' value={addequipmentForm.values.description}
              onChange={addequipmentForm.handleChange} 
              />
                
                <MDBInput wrapperClass='mb-4' type='price' id='price' label='price'  value={addequipmentForm.values.price}
              onChange={addequipmentForm.handleChange}
               />
                <MDBInput wrapperClass='mb-4' type='image' id='image' label='image' value={addequipmentForm.values.image}
              onChange={addequipmentForm.handleChange}
              className="form-control form-control-lg" />

                <MDBInput wrapperClass='mb-4' id='category'type='Category' label='Category' value={addequipmentForm.values.category}
              onChange={addequipmentForm.handleChange}
               />

                {/* <MDBCheckbox
      wrapperClass='d-flex justify-content-center mb-4'
      id='form6Example8'
      label='Create an account?'
      defaultChecked
    /> */}
                <button rounded className='mx-2' color='primary'>
                  Save
                </button>
                <button rounded className='mx-2' color='info'>
                  Save & Add Another
                </button>
                <button outline rounded className='text-dark mx-2 ' color='Dark'>
                  Cancel
                </button>

              </form>


            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>

  )
}

export default AddEquipment;

