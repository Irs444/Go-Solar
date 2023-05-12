import React, { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBContainer,
  MDBInputGroup,
  MDBInput,
  MDBCard,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import AddEquipment from "./AddEquipment";
import app_config from "../../config";

export default function ManageEquipment() {
  const [basicModal, setBasicModal] = useState(false);

  const { apiUrl } = app_config;

  const toggleShow = () => setBasicModal(!basicModal);
  const [userList, setUserList] = useState([]);
  const [records, setRecords] = useState();
  const [masterList, setMasterList] = useState([]);

  const fetchUserData = async () => {
    const res = await fetch('http://localhost:5000/equipment/getall');
    console.log(res.status);
    const data = await res.json();
    console.log(data);
    setUserList(data);
    setMasterList(data);
  }

  useEffect(() => {
    fetchUserData();

  }, [])

  const [search, setSearch] = useState('')

  const applySearch = (e) => {
    const inputText = e.target.value;

    setUserList(masterList.filter((equipment) => {
      return equipment.title.toLowerCase().includes(inputText.toLowerCase());
    }));
  }

  return (
    <>


 
      <MDBContainer className="my-1">
        <h1 className='text-center ' style={{ display: "inline-block",color:"#000" }}>Manage Equipment</h1>
        <button className="btn btn-primary " onClick={toggleShow} style={{ float: 'right', margin: 20 }}><i class="fas fa-plus me-2"></i>Add Equipment</button>
        <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
          <MDBModalDialog >
            <MDBModalContent style={{width:"800px"}}>
              <MDBModalHeader>
                <MDBModalTitle >Add New Equipment</MDBModalTitle>
                <button
                  className="btn-close"
                  color="none"
                  onClick={toggleShow}
                ></button>
              </MDBModalHeader>
              <MDBModalBody>
                <AddEquipment />
              </MDBModalBody>

              {/* <MDBModalFooter> */}
                {/* <button className="btn btn-primary" onClick={toggleShow}>
                  Close
                </button>
                <button className="btn btn-primary">Save changes</button> */}
              {/* </MDBModalFooter> */}
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
        <MDBInputGroup className="mb-2 mt-1">
        <MDBInput label='Search Title' onChange={applySearch} id='typeText' type='text' />
          {/* <input label='Search Name' onChange={applySearch} className="form-control form-control-lg" /> */}
          {/* <MDBBtn rippleColor='dark'>
        <MDBIcon icon='search' />
      </MDBBtn> */}
        </MDBInputGroup>
        <MDBCard>

          <MDBTable align='middle'>

            <MDBTableHead >
              <tr>
                <th scope='col' className="text-center">Title</th>
                <th scope='col'>Description</th>
                <th scope='col'>Price</th>
                <th scope='col'>Category</th>
                <th scope='col'>image</th>
                <th scope='col'>Seller</th>
                <th scope='col'>Created At</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {
                userList.map((equip) =>
                (
                  <tr>
                    <td>
                      <div className='d-flex align-items-center'>
                        <img
                          src={apiUrl+'/'+equip.image}
                          alt=''
                          style={{ height: '45px' }}
                          // className='rounded-circle'
                        />
                        <div className='ms-3'>
                          <p className='fw-bold mb-1'>{equip.title}</p>

                        </div>
                      </div>
                    </td>
                    <td>
                      <p className='text-muted mb-0'>{equip.description}</p>
                    </td>
                    <td>
                      {equip.price}
                    </td>
                    <td>
                      {equip.category}
                    </td>
                    <td>
                      {new Date(equip.createdAt).toLocaleDateString()}
                    </td>
                    <td>
                      <MDBBtn color='link' rounded size='sm'>
                        Edit
                      </MDBBtn>
                    </td>
                  </tr>
                ))}
            </MDBTableBody>
          </MDBTable>
        </MDBCard>
      </MDBContainer>
    </>
  );
}
