import React, { useState } from 'react'
import { Field, Formik, Form, ErrorMessage } from 'formik'
import * as yup from 'yup'
import { useraction } from '../actions/action'
import { useDispatch, useSelector } from 'react-redux'
import Header from './header'
import JewellryFooter from './jewellryFooter'
const Login = () => {
    const [type ,settype] = useState(false)
    const initialState = {
        username: "",
        password: ""
    }
    const onHandle = ()=>{
        settype(!type);
      }
    const loginSchema = yup.object().shape({
        username: yup.string().email('Email format is required').required('Email field is required'),
        password: yup.string().required('Password is required')
    })
    const loginintialstate = {}
    const [login, setlogin] = useState(loginintialstate)
    const dispatch = useDispatch()
    const selector = useSelector((state)=>state.alert);


    const getLoginData = (e) => {
        const { name, value } = e.target;

        setlogin({ ...login, [name]: value })
    }

    const submitlogin = (e) => {
        e.preventDefault()
        console.log(login)
        dispatch(useraction.LoginRequest(login))

    }
    return (
        <>
            {/* <Header /> */}
            <section className="login-page">
                <div className="container">
                    <h5 className="my-4 heading-text">Customer Login</h5> { selector.type === "alert-success" ? <div className="bg-success p-2 text-white bg-opacity-75">{selector.message}</div> : ""}
   {selector.type === "alert-failure" ?   <div className="bg-danger p-2 text-white bg-opacity-75 "  >{selector.message}</div> :'' }
                    <div className="px-4 py-5 form-container text-grey mb-5">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="review-form-wrap">
                                    <div className="form-heading-wrap">
                                        <h3 className="mb-4">Registered Customers</h3>
                                        <p className="my-4 text-13">If you have an account, sign in with your email address.</p>
                                    </div>

                                    <Formik initialValues={initialState} validationSchema={loginSchema} onSubmit={(values) => { dispatch(useraction.LoginRequest(values)) }} >
                                        {({ touched, errors, values }) => (
                                            <Form>
                                                <div className="form-group">
                                                    <label className="label-txt" htmlFor="Email Address">Email Address<sup className="red">*</sup></label>
                                                    <Field
                                                        name="username"
                                                        type="username"
                                                        id="username"
                                                        values={values.username}
                                                        className={
                                                            "form-control" +
                                                            (errors.username && touched.username
                                                                ? " is-invalid"
                                                                : "")
                                                        }
                                                    />
                                                    <ErrorMessage
                                                        name="username"
                                                        component="div"
                                                        className="invalid-feedback"
                                                    />

                                                </div>
                                                <div className="form-group">
                                                    <label className="label-txt" htmlFor="Password">Password<sup className="red">*</sup></label>
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

                                                </div>
                                                {/* <div className="form-check my-4">
                                                    <input className="form-check-input mt-0"  onChange={onHandle} type="checkbox" value="" id="show-password" />
                                                    <label className="form-check-label" htmlFor="show-password">
                                                        Show Password
                                                    </label>
                                                </div> */}
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <button type="submit" className="btn btn-black">Sign In</button>
                                                        <a href="/forgetpassword" className="checkout-forgot-password text-13 text-black ml-2">Forgot Your Password?</a>
                                                    </div>
                                                </div>
                                                <p className="my-4 red text-13">*Required Fields</p>
                                            </Form>)}
                                    </Formik>
                                </div>
                            </div>

                            <div className="col-lg-2 d-none d-lg-block d-xl-block"></div>

                            <div className="col-lg-6 col-md-6">
                                <h3 className="mb-4">New Customers</h3>
                                <p className="my-4 text-13">Creating an account has many benefits: check out faster, keep more than one address, track orders and more.</p>
                                <a href="/signup" className="btn btn-black">Create an account</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* <div className="login">
                <div className="form">
                    <span className="material-icons">Login</span>
                    <input name='email' type="text" className='email' onChange={getLoginData} placeholder="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required />
                    <input name ='password' type="password" className='password' onChange={getLoginData} placeholder="password" />
                    <button className='btnn' onClick={submitlogin}>login</button>
                <a href="/forgetpassword">Forget Your Password?</a>
                    <div className="SignUp">
                         <p>Don't Have account? SignUp first</p>
                        <a href="/signup">Sign Up</a>
                     </div>

                </div>
            </div> */}
            {/* <JewellryFooter /> */}
        </>
    )
}

export default Login


