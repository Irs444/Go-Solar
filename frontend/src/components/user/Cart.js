import React, { useState } from "react";
import useProductContext from "../../context/ProductContext";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
  MDBCardBody,
  MDBCardImage,
  MDBCard
}
from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
const Cart = () => {
  const {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    clearCart,
    isInCart,
    getCartTotal,
    getCartItemsCount,
  } = useProductContext();

  const displayCartItems = () => {
    if (getCartItemsCount() === 0) return (
   <div className="text-center">
     <MDBCardImage src={'/cart.png'} alt="login form" className='rounded-start mt-4 w-25 text-center'/>
     <h3>Your Cart is Currently Empty!</h3>
     <p className="text-muted">Before proceed to checkout you must add some products to your shopping cart. <br />You will fill a lot of interesting products on our "Product" page.</p>
     <Link className="btn rounded-pill" style={{backgroundColor:"#4BCCF2", color:"#fff"}} to={"/main/ListEquipment"}>Return To Shop</Link>
   </div>
     ) ;
    return cartItems.map((item) => (
      <div key={item._id} className="row mb-3">
        <div className="col-2">
          <div
            className="cart-item-placeholder"
            style={{
              backgroundImage: `url('https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp')`,
            }}
          ></div>
        </div>
        <div className="col-7">
          <p className="text-muted h6">{item.brand}</p>
          <h3>{item.title}</h3>
          <p className="text-muted">{item.description}</p>
        </div>
        <div className="col-3">
          <div className="input-group">
            <button className="btn btn-primary px-3 py-2" onClick={e => addItemToCart(item)}> <i class="fa fa-plus-circle" aria-hidden="true"></i> </button>
            <input type="text" className="form-control" value={item.quantity} />
            <button className="btn btn-primary px-3 py-2" onClick={e => removeItemFromCart(item)}><i class="fa fa-minus-circle" aria-hidden="true"></i></button>
          </div>
          <h2 className="my-2"> ₹ {item.price}</h2>
        </div>
      </div>
    ));
    // return (
    //     <>
    //         {cartItems.map((item) => (
    //             <div key={item._id}>
    //                 <img src={item.image} alt={item.name} />
    //                 <p>{item.name}</p>
    //                 <p>{item.price}</p>
    //                 <p>{item.quantity}</p>
    //                 <button className='btn btn-primary' onClick={() => addItemToCart(item)}>+</button>
    //                 <button className='btn btn-primary' onClick={() => removeItemFromCart(item)}>-</button>
    //             </div>
    //         ))}
    //     </>
    // );
  };

  return (
    // <div>
    //   <h1>Cart</h1>
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-md-8">
    //         <h3>Product</h3>
    //         <hr />
    //         {displayCartItems()}
    //       </div>
    //       <div className="col-md-4">
    //         <div className="card">
    //           <div className="card-body">
    //             <h3>Summary</h3>
    //             <hr />

    //             <p>Total: {getCartTotal()}</p>
    //             <p>Items: {getCartItemsCount()}</p>
    //             <button className="btn btn-danger" onClick={() => clearCart()}> Clear Cart</button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <MDBContainer className="my-3">

      <MDBCard style={{height:"80vh"}}>
        <MDBRow className='g-0'>
     
          <MDBCol md='9'>
            <h2 className="mt-2 mx-3">Shopping Cart</h2>
            <hr />
            {displayCartItems()}

            {/* <p>Continue Shopping</p> */}
          </MDBCol>

          <MDBCol md='3'>
            <MDBCardBody className=''>

            {/* <div className="col-md-4"> */}
       <div className="card " style={{height:"50vh"}}>
         <div className="card-body">
           <h3>Order Summary</h3>
           <hr />

           <p>Total: {getCartTotal()}</p>
           <p>Items: {getCartItemsCount()}</p>
           <button className="btn btn-danger" onClick={() => clearCart()}> Clear Cart</button>
         </div>
       </div>
     {/* </div> */}
             

              <div className='d-flex flex-row justify-content-start'>
               
              </div>
              {/* </form> */}
            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>

  );
};

export default Cart;
