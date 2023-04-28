import React from 'react';
// import './login.css';
import {useFormik} from "formik";
import Swal from 'sweetalert2';
import solar from '../../imgs/solar.jpg'
const Login = () => {


  


  const loginForm = useFormik({
    initialValues : {
      email : "",
      password : "",
    },
    onSubmit : async (values) => {
      console.log(values);
      
      const res = await fetch('http://localhost:5000/user/authenticate',{
        method: 'POST',
        body: JSON.stringify(values),
        headers:{
          'Content-Type': 'application/json',
        },
      });
      console.log(res.status);

      if (res.status === 200){
        Swal.fire({
          icon: "success",
          tittle: "nice",
          text: "You have succesfyll login",
        });

      } else if (res.status === 401){
        Swal.fire({
          icon: "error",
          tittle: "ERROR!!",
          text: "Invalide Credential",
        });
      }
       

    },
  });
	return (
	<div>
		<section className="vh-100">
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img
          src={solar}
          className="img-fluid"
          alt="Sample image"
        />
          
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 ">
		<div className='border border-primary rounded-3 p-4'>
        <form onSubmit={loginForm.handleSubmit}>
          <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <p className="lead fw-normal mb-0 me-3">Sign in with</p>
            <button type="button" className="btn btn-primary btn-floating mx-1">
              <i className="fab fa-facebook-f" />
            </button>
            <button type="button" className="btn btn-primary btn-floating mx-1">
              <i className="fab fa-twitter" />
            </button>
            <button type="button" className="btn btn-primary btn-floating mx-1">
              <i className="fab fa-linkedin-in" />
            </button>
          </div>
          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">Or</p>
          </div>
          {/* Email input */}
          <div className="  mb-4">
            <label className="form-label" htmlFor="form3Example3">
              Email address
            </label>
            <input
              type="email"
              id="email"
              value={loginForm.values.email}
              onChange={loginForm.handleChange}
              className="form-control form-control-lg"
              placeholder="Enter a valid email address"
            />
          </div>
          {/* Password input */}
          <div className="  mb-3">
          <label className="form-label" htmlFor="form3Example4">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={loginForm.values.password}
              onChange={loginForm.handleChange}
              className="form-control form-control-lg"
              placeholder="Enter password"
            />
          
          </div>
          <div className="d-flex justify-content-between align-items-center">
            {/* Checkbox */}
            <div className="form-check mb-0">
              <input
                className="form-check-input me-2"
                type="checkbox"
                defaultValue=""
                id="form2Example3"
              />
              <label className="form-check-label" htmlFor="form2Example3">
                Remember me
              </label>
            </div>
            <a href="#!" className="text-body">
              Forgot password?
            </a>
          </div>
          <div className="text-center text-lg-start mt-4 pt-2">
            <button
              type="submit"
              className="btn btn-primary btn-lg" 
              style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
            >
              Login
            </button>
            <p className="small fw-bold mt-2 pt-1 mb-0">
              Don't have an account?{" "}
              <a href="#!" className="link-primary">
                Register
              </a>
            </p>
          </div>
        </form>
		</div>
      </div>
    </div>
  </div>
 
</section>

	</div>
	)
}

export default Login