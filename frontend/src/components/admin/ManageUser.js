import React, { useEffect, useState } from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody, MDBCard, MDBContainer } from 'mdb-react-ui-kit';
import { MDBInputGroup, MDBInput, MDBIcon } from 'mdb-react-ui-kit';
export default function App() {
  const [userList, setUserList] = useState([]);
  const [records,setRecords]=useState();
  const fetchUserData=async()=>{
    const res=await  fetch('http://localhost:5000/user/getall');
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
<h1 className='text-center'>Manage User</h1>
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
          <th scope='col'>Name</th>
          <th scope='col'>Email</th>
          <th scope='col'>Password</th>
          <th scope='col'>Created At</th>
          <th scope='col'>Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
      { 
            userList.filter((user)=>{
              return  search.toLowerCase()==='' ?user:user.name.toLowerCase().includes(search);
            }).map((user)=>
            (
      <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src='https://mdbootstrap.com/img/new/avatars/2.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>{user.name}</p>
                
              </div>
            </div>
          </td>
          <td>
          <p className='text-muted mb-0'>{user.email}</p>
          </td>
          <td>
           {user.password}
          </td>
          <td>
            {new Date(user.createdAt).toLocaleDateString()}
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
