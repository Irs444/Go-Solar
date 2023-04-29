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
} from "mdb-react-ui-kit";
import AddEquipment from "./AddEquipment";

export default function ManageEquipment() {
  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);

  return (
    <>
      <button className="btn btn-primary" onClick={toggleShow}>LAUNCH DEMO MODAL</button>
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Modal title</MDBModalTitle>
              <button 
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></button>
            </MDBModalHeader>
            <MDBModalBody>
              <AddEquipment/>
            </MDBModalBody>

            <MDBModalFooter>
              <button className="btn btn-primary"  onClick={toggleShow}>
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
