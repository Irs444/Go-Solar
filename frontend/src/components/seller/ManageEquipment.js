// import React from 'react'
// import AddEquipment from './AddEquipment'
// import { Link } from 'react-router-dom'

// const ManageEquipment = () => {
//   return (
//     <Link to="/main/AddEquipment" className="btn btn-primary">Add EQuipement</Link>
//   //  <AddEquipment/>
//   )
// }

// export default ManageEquipment

import React, { useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,

  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  


  MDBContainer,
  MDBCard,
  MDBCardBody,

  MDBTextArea,

}
  from 'mdb-react-ui-kit';
import AddEquipment from "./AddEquipment";
  
  export default function  ManageEquipment() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);

  return (
    <>
      <button className="btn btn-primary" onClick={toggleShow}>LAUNCH DEMO MODAL</button>
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1" size="xl">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Modal title</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>

          <AddEquipment/>

            </MDBModalBody>

            <MDBModalFooter>
              <button className="btn btn-primary" onClick={toggleShow}>
                Close
              </button>
              <button className="btn btn-primary">Save changes</button>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}

