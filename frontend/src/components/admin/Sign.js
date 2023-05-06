import React from 'react'
import {useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';

const EntrySchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(10, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup
        .string()
        .required('Please Enter your password')
});

const Sign = () => {
    const SignUp = useFormik({
        initialValues: {
           name: '',
           Address: '',
           email: '',
           phone: '',
        },
        onSubmit: async (values) => {
            console.log(values);

            const res = await fetch('http://localhost:5000/user/authenticate', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log(res.status);
            if (res.status === 200) {
                Swal.fire({
                    icon: "success",
                    tittle: "nice",
                    text: "You have succesfyll login",
                });

            } else if (res.status === 401) {
                Swal.fire({
                    icon: "error",
                    tittle: "ERROR!!",
                    text: "Invalide Credential",
                });
            }

        },
        validationSchema: EntrySchema,
    });
  return (
    <div>
          <form onSubmit={SignUp}>
              {/* 2 column grid layout with text inputs for the first and last names */}
              <div className="row mb-4">
                  <div className="col">
                      <div className="form">
                          <label className="form-label" htmlFor="form6Example1">
                              First name
                          </label>
                          <input type="text" id="name" className="form-control" value={SignUp.values.name} onChange={SignUp.handleChange} />
                          <span className="text-danger">{SignUp.errors.name}</span>
                      </div>
                  </div>
                  <div className="col">
                      <div className="form">
                          <label className="form-label" htmlFor="form6Example2">
                              Last name
                          </label>
                          <input type="text" id="form6Example2" className="form-control" value={SignUp.values.name} onChange={SignUp.handleChange} />
                          <span className="text-danger">{SignUp.errors.name}</span>
                      </div>
                  </div>
              </div>
              {/* Text input */}
              <div className="form mb-4">
                  <label className="form-label" htmlFor="form6Example3">
                      Company name
                  </label>
                  <input type="text" id="form6Example3" className="form-control" value={SignUp.values.company} onChange={SignUp.handleChange} />
                  <span className="text-danger">{SignUp.errors.name}</span>
              </div>
              {/* Text input */}
              <div className="form mb-4">
                  <label className="form-label" htmlFor="form6Example4">
                      Address
                  </label>
                  <input type="text" id="form6Example4" className="form-control" value={SignUp.values.address} onChange={SignUp.handleChange} />
                  <span className="text-danger">{SignUp.errors.name}</span>
              </div>
              {/* Email input */}
              <div className="form mb-4">
                  <label className="form-label" htmlFor="form6Example5">
                      Email
                  </label>
                  <input type="email" id="form6Example5" className="form-control" value={SignUp.values.email} onChange={SignUp.handleChange} />
                  <span className="text-danger">{SignUp.errors.email}</span>
              </div>
              {/* Number input */}
              <div className="form mb-4">
                  <label className="form-label" htmlFor="form6Example6">
                      Phone
                  </label>
                  <input type="number" id="form6Example6" className="form-control" value={SignUp.values.number} onChange={SignUp.handleChange} />
                  <span className="text-danger">{SignUp.errors.number}</span>
              </div>
              {/* Message input */}
              <div className="form mb-4">
                  <label className="form-label" htmlFor="form6Example7">
                      Additional information
                  </label>
                  <textarea
                      className="form-control"
                      id="form6Example7"
                      rows={4}
                      defaultValue={""}
                  />
                  
              </div>
              {/* Checkbox */}
              <div className="form-check d-flex justify-content-center mb-4">
                 
                  <input
                      className="form-check-input me-2"
                      type="checkbox"
                      defaultValue=""
                      id="form6Example8"
                      defaultChecked=""
                  />
                  <label className="form-check-label" htmlFor="form6Example8">
                      {" "}
                      Create an account?{" "}
                  </label>
                 
              </div>
              {/* Submit button */}
              <button type="submit" className="btn btn-primary btn-block mb-4">
                  Place order
              </button>
          </form>

    </div>
  )
}

export default Sign