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

export default function ManageEquipment() {
  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);
  const [userList, setUserList] = useState([]);
  const [records,setRecords]=useState();
  const fetchUserData=async()=>{
    const res=await  fetch('http://localhost:5000/equipment/getall');
console.log(res.status);
const data=await res.json();
console.log(data);
setUserList(data);
  }
  
  useEffect(() => {
      fetchUserData();
      
  }, [])
 
    const [search,setSearch]=useState('')

  return (
    <>
     

      <div className="mb-5 ">
<h1 className='text-center' style={{display:"inline-block"}}>Manage Equipment</h1>
<button className="btn btn-primary " onClick={toggleShow}>Add Equipment</button>
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Add New Equipment</MDBModalTitle>
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
</div>
<MDBContainer className="my-1">
<MDBInputGroup className="mb-3 mt-2">
      <MDBInput  label='Search Name' onChange={(e)=> setSearch(e.target.value)}/>
      {/* <MDBBtn rippleColor='dark'>
        <MDBIcon icon='search' />
      </MDBBtn> */}
    </MDBInputGroup>
<MDBCard>

    {/* <br /> */}

    <MDBTable align='middle'>
       
      <MDBTableHead >
        <tr>
          <th scope='col'>Title</th>
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
            userList.filter((equip)=>{
              return  search.toLowerCase()==='' ?equip:equip.title.toLowerCase().includes(search);
            }).map((equip)=>
            (
      <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
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
