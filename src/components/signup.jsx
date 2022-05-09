import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useraction } from '../actions/action'
import { Form, Formik, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'

export default function Signup() {
  const initialState = {
    
      email: "",
      firstname: "",
      lastname: "",
      password: "",
      confirmpassword: ""
  }
  const dispatch = useDispatch()
  
  const RegisterSchema = yup.object().shape({
    firstname: yup.string().required('First Name is required'),
    lastname: yup.string().required('Last Name is Required'),
    email: yup.string().email('Invalid Email Format').required("Email is required"),
    password: yup
      .string()
      .required('Please Enter your password')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
    confirmpassword: yup.string().required('Confirm Password is required')
      .oneOf([yup.ref('password')], 'Passwords does not match'),
  })
 
  
 
  return (
    <>
      {/* <Header /> */}
      <section className="login-page">
        <div className="container">
        <Formik initialValues={initialState} validationSchema={RegisterSchema} onSubmit={(values) => { dispatch(useraction.SignupRequest(values)) }} >
                    {({ touched, errors, values }) => (
                      <Form>
          <h5 className="my-4 heading-text">Create New Customer Account</h5>
          <div className="px-4 py-5 form-container text-grey mb-5">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="review-form-wrap">
                  <div className="form-heading-wrap">
                    <h3 className="mb-4">Personal Information</h3>
                  </div>
                 
                        <div className="form-group">
                          <label className="label-txt" for="First Name">First Name<sup className="red">*</sup></label>
                          <Field
                              name="firstname"
                              type="text"
                              id="firstname"
                              values={values.firstname}
                              className={
                                "form-control" +
                                (errors.firstname && touched.firstname
                                  ? " is-invalid"
                                  : "")
                              }
                          />
                          <ErrorMessage
                              name="firstname"
                              component="div"
                              className="invalid-feedback"
                          />

                        </div>
                        <div className="form-group">
                          <label className="label-txt" for="Last-name">Last-name<sup className="red">*</sup></label>
                          <Field
                              name="lastname"
                              type="lastname"
                              id="lastname"
                              values={values.lastname}
                              className={
                                "form-control" +
                                (errors.lastname && touched.lastname
                                  ? " is-invalid"
                                  : "")
                            }
                          />
                          <ErrorMessage
                            name="lastname"
                            component="div"
                            className="invalid-feedback"
                          />

                        </div>
                        {/* <div className="form-check my-4">
                          <input className="form-check-input mt-0" type="checkbox" value="" id="newsletter-signup" />
                          <label className="form-check-label" for="newsletter-signup">
                            Sign Up for Newsletter
                          </label>
                        </div> */}
                     
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <h3 className="mb-4">Sign-In Information</h3>
                <div className="review-form-wrap">
                 
                        <div className="form-group">
                          <label className="label-txt" for="Email Address">Email<sup className="red">*</sup></label>
                          <Field
                            name="email"
                            type="email"
                            id="email"
                            values={values.email}
                            className={
                              "form-control" +
                              (errors.email && touched.email
                                ? " is-invalid"
                                : "")
                            }
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="invalid-feedback"
                          />

                        </div>
                        <div className="form-group">
                          <label className="label-txt" for="Password">Password<sup className="red">*</sup></label>
                          <Field
                            name="password"
                            type="password"
                            id="password"
                            values={values.password}
                            className={
                              "form-control" +
                              (errors.password && touched.password
                                ? " is-invalid"
                                : "")
                            }
                          />
                          <ErrorMessage
                            name="password"
                            component="div"
                            className="invalid-feedback"
                          />
                          <p className="text-13 text-grey">Password Strength: <span>No Password</span></p>

                        </div>
                        <div className="form-group">
                          <label className="label-txt" for="Confirm Password">Confirm Password<sup className="red">*</sup></label>
                          <Field
                            name="confirmpassword"
                            type="confirmpassword"
                            id="confirmpassword"
                            values={values.confirmpassword}
                            className={
                              "form-control" +
                              (errors.confirmpassword && touched.confirmpassword
                                ? " is-invalid"
                                : "")
                            }
                          />
                          <ErrorMessage
                            name="confirmpassword"
                            component="div"
                            className="invalid-feedback"
                          />

                        </div>
                        <div>
                          <button type="submit" className="btn btn-black">Create An Account</button>
                        </div>
                      
                       
                </div>
              </div>
            </div>

          </div>
         
            </Form>)}
              </Formik>
        </div>
      </section>
      {/* <JewellryFooter /> */}
    </>
  )
}