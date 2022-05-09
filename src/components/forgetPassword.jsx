import React, { useState } from 'react';
import { useDispatch} from 'react-redux'
import { useraction} from '../actions/action'
import {Formik, Form,ErrorMessage,Field} from 'formik'
import * as Yup from 'yup'
import Header from './header'
import JewellryFooter from './jewellryFooter'

const ForgetPassword = () => {
    const dispatch = useDispatch();
  const initialState = {
    email:'',
  }
  const ForgetPassword = Yup.object().shape({
    email: Yup.string().email('Invalid Email address format').required('Email is required'),
  })
  return (
    <div>
        {/* <Header /> */}
        <div>
     <Formik initialValues={initialState} validationSchema={ForgetPassword} onSubmit={(values) => {dispatch(useraction.ForgetPasswordRequest(values))}} >
        {({ touched, errors, values}) => (
          <Form>
            <div className='container'>
            <div className="card">
              <div className="card-body">
                <strong> Forget You Password ?</strong>
                <br></br>
                <p>Please enter your email address below to receive a password reset link.</p>
                <br></br>
                <div style={{ width: '40%' }} className="form-row row">
                  <div className="form-group col-6">
                    <label> Email<span style={{color:'red'}} >*</span> </label>
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
                </div>
                <br></br>
                <button
                  type="submit"
                  className="btn btn-dark"
                >
                  Reset My Password
                </button> 
                <br></br>
                <br></br>
                <p style={{color:'red'}} >* Required Fields</p>
              </div>
            </div>
            </div>
          </Form>
        )}
      </Formik>
      </div>
      {/* <JewellryFooter /> */}
    </div>
  )
}


    
//     const dispatch = useDispatch();
//     const [email, setemail] = useState();
//     const onchange= (e) =>{
//         setemail(e.target.value);
//     }
//     const onsubmit = (e) => {
//         e.preventDefault();
//         dispatch(useraction.ForgetPasswordRequest(email));
        
//     }
//     return(
//     <>
//         <form>
//             <div className="form-group">
//                 <label for="exampleInputEmail1">Email address</label>
//                 <input type="email" onChange={onchange}className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
//             </div>
          
//             <button onClick={onsubmit} type="submit" className="btn btn-primary">Submit</button>
//         </form>
//     </>
//     )
// }

export default ForgetPassword