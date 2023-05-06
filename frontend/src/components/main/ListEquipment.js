import React, { useState, useEffect } from 'react'
import app_config from '../../config';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBIcon,
} from "mdb-react-ui-kit";
import useProductContext from '../../context/ProductContext';
import { Link } from 'react-router-dom';
const ListEquipment = () => {

    const [equipmentList, setEquipmentList] = useState([]);
    const [masterList, setMasterList] = useState([]);
    const { apiUrl } = app_config;

    const {addItemToCart} = useProductContext();

    const fetchEquipmentData = async () => {
        const res = await fetch(apiUrl + '/equipment/getall');
        console.log(res.status);
        const data = await res.json();
        console.log(data);
        setMasterList(data);
        setEquipmentList(data);
    }

    useEffect(() => {
        fetchEquipmentData();

    }, [])



    return (
        <div>
            <MDBContainer className="my-5">
                <MDBRow>
                    {
                        equipmentList.map((equipment) => (
                            <MDBCol md="12" lg="4" className="mb-4 mb-lg-5">
                                <MDBCard>
                                    <div className="d-flex justify-content-between p-3">
                                        <p className="lead mb-0">Today's Combo Offer</p>
                                        <div
                                            className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                                            style={{ width: "35px", height: "35px" }}
                                        >
                                            <p className="text-white mb-0 small">x4</p>
                                        </div>
                                    </div>
                                    <MDBCardImage
                                        src={apiUrl+"/" + equipment.image}
                                        position="top"
                                        alt="Laptop"
                                    />
                                    <MDBCardBody>
                                        <div className="d-flex justify-content-between">
                                            <p className="small">
                                                <a href="#!" className="text-muted">
                                                    {equipment.title}
                                                </a>
                                            </p>
                                            <p className="small text-danger">
                                                <s>$1099</s>
                                            </p>
                                        </div>

                                        <div className="d-flex justify-content-between mb-3">
                                            <h5 className="mb-0">{equipment.title}</h5>
                                            <h5 className="text-dark mb-0">$999</h5>
                                        </div>

                                        <div class="d-flex justify-content-between mb-2">
                                            <p class="text-muted mb-0">
                                                Available: <span class="fw-bold">6</span>
                                            </p>
                                            <div class="ms-auto text-warning">
                                                <MDBIcon fas icon="star" />
                                                <MDBIcon fas icon="star" />
                                                <MDBIcon fas icon="star" />
                                                <MDBIcon fas icon="star" />
                                                <MDBIcon fas icon="star" />
                                            </div>
                                        </div>
                                        <button onClick={e => addItemToCart(equipment)}>Add to Cart</button>
                                        <Link className='btn btn-primary' to={'/main/details/'+equipment._id}>View Details</Link>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        ))
                    }

                </MDBRow>
            </MDBContainer>

        </div>
    )
}

export default ListEquipment