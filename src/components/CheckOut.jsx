import React, {useState,useEffect} from 'react';
import { product } from '../services/productServices';
import { useraction } from '../actions/action';
import { Field, ErrorMessage, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch} from 'react-redux';
import Header from './header';
import JewellryFooter from './jewellryFooter'

export default function CheckOutPage() {
  const dispatch = useDispatch()
  const initialState = {
    email: '',
    firstname: '',
    lastname: '',
    region:'',
    city: '',
    country_id: '',
    country_name:'',
    postcode: '',
    telephone: '',
    street:['','',''],
    region_id:'',
    state: '',
    shipping_method_code: '',
    shipping_carrier_code: '',
  }
  const [value, setvalue] = useState([]);
  const [id, setid] = useState();
  const [countries,setcountries] = useState([])
  const [states,setstates] = useState([]); 
  const [signform,setsignform] = useState(false);
  const [summarybox,setsummarybox] = useState(false);
  const [summary,setsumarry] = useState()
    const [handlediscount,setdiscount] = useState(false)
    const [handlegift,setgift] = useState(false)
    const [show,setshow] = useState(false);
    const [signtoggle,setsigntoggle] = useState(false);
    const [methodradio,setmethodradio] = useState({
      cashorder:false,
      creditcard:false,
    })
    const [billchecked,setchecked] = useState({
      billingdefault:true,
      billingdefault2:true,
    })
    const signbuttontoggle = ()=>{
      setsigntoggle(!signtoggle);
    }
    const handledis = ()=>{
      setdiscount(!handlediscount)
    }
    const handlgift = ()=>{
      setgift(!handlegift);
    }
    const onHandleCheck = (e)=>{
      const {name,checked} = e.target;
      console.log(name,checked);
      if(name === 'billingdefault'){
        setchecked({ ...billchecked,billingdefault:checked});
      }
      if(name === 'billingdefault2'){
        setchecked({...billchecked,billingdefault2:checked})
      }
    }
    const onHandleRadio = (e)=>{
      const {name,checked} = e.target;
      
        setmethodradio({...methodradio,cashorder:checked,creditcard:false})
      
    }
    useEffect(()=>{
      GetTotal();
    },[])


    const onHandleOrderMenu = ()=>{
      setshow(!show);
    }
    async function GetTotal(){
      // if(localStorage.getItem('user')){
      //   const user = JSON.parse(localStorage.getItem('user'));
      //   const result = await product.subtotal(user.qouteid);
      //   const result2 = await product.GetCartTotal(user.qouteid);
      //   console.log(result);
      //   console.log(result2);
      //   setvalue(result2.data)
      //   setsumarry(result.data)  
      // }
      // if(localStorage.getItem('cart_id')){
        const cart_id = JSON.parse(localStorage.getItem('cart_id'));
        const result = await product.subtotal(cart_id.id.id);
        const result2 = await product.GetCartTotal(cart_id.id.id);
        console.log(result2);
        console.log(result);
        setsumarry(result.data)
        setvalue(result2.data);
      // } 
    }
    const onHandle=(e)=>{
     console.log(e.target.name);
     console.log(e.target.checked);
     console.log(e.target.value)
    }
    const PaymentSchema = Yup.object().shape({
        cardnumber:Yup.number().required(),
        cvv:Yup.string().required(),
        expries:Yup.string().required()
    })
    const AddpaymentMethod=(e)=>{
        e.preventDefault();
        const detials = {
          "paymentMethod": {
          "method":'cashondelivery'
}     
}
 dispatch(useraction.PaymentRequest(detials))
    }
  const onHandleSigninForm = ()=>{
    setsignform(!signform);
  }
  const onHandleSummary = ()=>{
    setsummarybox(true);
  }
  const ValidatoinShippingAddress = Yup.object().shape({
    email: Yup.string().nullable().email("Email format is required").required('Email filed is required'),
    firstname: Yup.string().nullable().required('First Name is required'),
    lastname: Yup.string().nullable().required('Last Name is required'),
    country_id: Yup.string().nullable().required('Country Name is required'),
    country_name:Yup.string().nullable().required("Country Name is required"),
    region:Yup.string().required('State is required'),
    state: Yup.string().nullable().required('State is required'),
    postcode: Yup.string().nullable().required('Zip code is required'),
    telephone: Yup.string().nullable().required('Phone Number is required'),
    city: Yup.string().nullable().required('City is required'),
    street: Yup.array().nullable().required('Street Address is required'),
    shipping_method_code:Yup.string().required('Shipping method is required'),
  })
  async function GetCountries(){
    const result = await product.GetAllCountryApi();
    console.log(result.data);
    setcountries(result.data)
  }

  async function GetStateByCountries(id){
    console.log(id,"id");
    const result = await product.GetStatesByCountryApi(id);
    console.log(result.data.available_regions);
    setstates(result.data.available_regions)
  }
const [check,setcheck] = useState(false)

const [showAddAddress, setshowAddAddress] = useState(false);
const toggleShowAddress =() =>{
  setshowAddAddress(true);
}
const toggleShowCancel = () =>{
  setshowAddAddress(false);
}

//     const dispatch = useDispatch();
//   const placeorder = () => {
//     const details = {
//       "paymentMethod": {
//           "method": "cashondelivery"
//       }
//   }
   
//     dispatch(useraction.PaymentRequest(details))
//   }
//   const initialState = {};
//   const [val, setvalue] = useState(initialState);

//   const onChangeHandler = (e) => {
//     const { name, value } = e.target;
//     setvalue({ ...val, [name]: value })
//   }

//   const onSubmit = (e) => {
//     e.preventDefault();
//     console.log(val);
//     dispatch(useraction.AddShippingRequest(val))
//   }
  return(
    <>
    {/* <Header /> */}
      <section className="cart-page">
      <div className="container">
          <div className="progress-bar-sign-in">
            <div className="progress-bar-checkout-wrap">
                <ol className="progress-bar-checkout">
                    <li className="step-active">Shipping</li>
                    <li className="step">Review & Payments</li>
                </ol>    
            </div>
            
            <div className="estimated-total">
              <div className="estimated-title mb-2">
                Estimated Total
              </div>
              <div className="estimated-cost">
                $568.00
              </div>
            </div>
            <div className="sign-in-form">            
              <div className="mini-cart-icon">
                <a href="#" className="mini-cart-ref">
                  <i className="fa fa-bag-shopping"></i>
                  <span className="cart-qty">23</span>
                </a>
              </div>  
              {localStorage.getItem('cart_id') ?          
              <div className="sign-in-link-wrap">
                  <a onClick={onHandleSigninForm} className="checkout-signin mt-3 d-inline-block">Sign In</a>
              </div>
              :''}
              <div className={signform === true ? "review-form-wrap checkout-sign-in-form show" : 'review-form-wrap checkout-sign-in-form'}>
                <div  className="form-heading-wrap">
                    <h3 className="mb-4">Sign In</h3>
                    <a onClick={onHandleSigninForm} className="close-form"><i className="fa fa-times"></i></a>
                </div>
                <form>
                  <div className="form-group">
                    <label className="label-txt" for="Email Address">Email Address</label>
                    <input type="email" className="form-control" placeholder="" />
                   
                  </div>
                  <div className="form-group">
                    <label className="label-txt" for="Password">Password</label>
                    <input type="password" className="form-control" placeholder="" />
                   
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <a href="#" className="checkout-forgot-password">Forgot Your Password?</a>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-black">Submit</button>
                    </div>
                  </div>
                </form> 
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-4 mb-5">
                <div className="checkout-step-one p-3 border">
                    <h2 className="checkout-step-heading pb-3 border-bottom">Shipping Address</h2>
                    <div className="customer-details-wrap p-3">
                        <h2 className="mb-2 font-weight-bold">Billing/Shipping Address</h2>
                        <p className="first-last-name">First Last</p>
                        <p className="address">sdf, dfjal, dsfals</p>
                        <p className="state">Chandigarh, Chandigarh 160001</p>
                        <p className="country">India</p>
                        <p className="mobile-no"><a href="tel:+4733378901">+47 333 78 901</a></p>
                        <div className="form-check mt-2">
                            <input className="form-check-input mt-0" type="checkbox" value="" id="address-check" checked/>
                            <label className="form-check-label" for="address-check">
                                Use this Address
                            </label>
                        </div>
                    </div>
                    <div className="customer-details-wrap p-3">
                        <h2 className="mb-2 font-weight-bold">Billing/Shipping Address</h2>
                        <p className="first-last-name">First Last</p>
                        <p className="address">sdf, dfjal, dsfals</p>
                        <p className="state">Chandigarh, Chandigarh 160001</p>
                        <p className="country">India</p>
                        <p className="mobile-no"><a href="tel:+4733378901">+47 333 78 901</a></p>
                        <div className="form-check mt-2">
                            <input className="form-check-input mt-0" type="checkbox" value="" id="address-check2" />
                            <label className="form-check-label" for="address-check2">
                                Use this Address
                            </label>
                        </div>
                    </div>
                    <div className={showAddAddress=== true ? "review-form-wrap shipping-address-form mt-2 open-new-address collapse show": "review-form-wrap shipping-address-form mt-2 open-new-address collapse"}>
                    <Formik initialValues={initialState} validationSchema={ValidatoinShippingAddress} onSubmit={(values) => { dispatch(useraction.AddShippingRequest(values,id))}}   >
                        {({ touched, errors, values, setFieldValue }) => {
                          const onSetRegionid=(country_name)=>{
                            let id ;
                                countries?.map(item=>{
                                 if(country_name == item.full_name_english){
                                   id = item.id
                                   setFieldValue('country_id',item.id)
                                 }
                                })
                              console.log(id);
                                GetStateByCountries(id);
                              }
                              const onSetRegionId = (statename)=>{
                                states?.map((item)=>{
                                  if(item.name===statename){
                                    setFieldValue('region_id',item.id)
                                    setFieldValue('region_code',item.code)
                                  }
                                })
                                
                              }

                            const setmethodvalue = (e)=>{
                              setcheck(!check);
                              setFieldValue('shipping_method_code',e.target.value);
                              setFieldValue('shipping_carrier_code',e.target.value)
                            }

                          // eslint-disable-next-line react-hooks/rules-of-hooks
                          useEffect(async () => {
                            GetCountries();
                            let result;
                            if (localStorage.getItem('cart_id')) {
                              const cart_id = JSON.parse(localStorage.getItem('cart_id'));
                              result = await product.GetCartTotal(cart_id.id.id);
                            }
                            if (localStorage.getItem('user')) {
                              const user = JSON.parse(localStorage.getItem('user'));
                              result = await product.GetCartTotal(user.quote_id)
                            }
                            console.log(result);
                            setid(result.data.id)
                            const fields = ['email', 'firstname', 'lastname', 'city', 'region', 'postcode', 'street', 'country', 'telephone'];
                            fields.forEach(field => setFieldValue(field, result.data.billing_address[field], false))
                            setvalue(result.data.items);

                          }, [])
                          return (
                        <Form>
                          {/* { localStorage.getItem('user') ?  "" : */}
                          <>
                          <div className="form-group">
                            <label className="label-txt" for="Email Address">Email Address<sup>*</sup></label>
                            <div className="input-group">
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
                              <div className="input-group-append">
                                <span className="input-group-text" data-toggle="tooltip" data-placement="right" title="" data-original-title="We'll send your order confirmation here."><i className="far fa-question-circle"></i></span>
                              </div>
                            </div>
                            <div className="txt-13">You can create an account after checkout.</div>
                          </div>
                          <div className="form-group">
                            <label className="label-txt" for="First Name">First Name<sup>*</sup></label>
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
                            <label className="label-txt" for="Last Name">Last Name<sup>*</sup></label>
                            <Field
                                  name="lastname"
                                  type="text"
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
                          <div className="form-group">
                            <label className="label-txt" for="Company">Company<sup>*</sup></label>
                            <Field
                                  name="company"
                                  type="text"
                                  id="company"
                                  values={values.company}
                                  className={
                                    "form-control" +
                                    (errors.company && touched.company
                                      ? " is-invalid"
                                      : "")
                                  }
                                />
                                <ErrorMessage
                                  name="company"
                                  component="div"
                                  className="invalid-feedback"
                                />
                          </div>
                          <div className="form-group">
                            <label className="label-txt" for="Street Address">Street Address<sup>*</sup></label>
                            <Field
                                  name="street[0]"
                                  type="text"
                                  id="street[0]"
                                  values={values.street[0]}
                                  className={
                                    "form-control"+
                                    (errors.street && touched.street
                                      ? " is-invalid"
                                      : "")

                                  }
                                />
                                <Field
                                  name="street[1]"
                                  type="text"
                                  id="street[1]"
                                  values={values.street[1]}
                                  className={
                                    "form-control"
                                  }
                                />
                                <Field
                                  name="street[2]"
                                  type="text"
                                  id="street[2]"
                                  values={values.street[2]}
                                  className={
                                    "form-control" 
                                  }
                                />
                                <ErrorMessage
                                  name="street"
                                  component="div"
                                  className="invalid-feedback"
                                />

                           
                          </div>
                          <div className="form-group">
                            <label className="label-txt" for="Country">Country<sup>*</sup></label>
                            <Field
                                  name="country_name"
                                  type="text"
                                  id="country_name"
                                  as="select"
                                  onClick={(e)=>{onSetRegionid(e.target.value)}}
                                  className={
                                    "form-control" +
                                    (errors.country_name  && touched.country_name
                                      ? " is-invalid"
                                      : "")
                                  }
                                >
                                  
                                 {countries?.map((item,index)=>(
                                     <option key={index}  value={item.full_name_english} >{item.full_name_english}</option>
                                 ))
                                 }
                                
                                </Field>
                                <ErrorMessage
                                  name="country_name"
                                  component="div"
                                  className="invalid-feedback"
                                />
                               </div>
                          <div className="form-group">
                            <label className="label-txt" for="State/Province">State/Province<sup>*</sup></label>
                            {states?.length > 0 ?
                                <Field
                                  name="region"
                                  type="text"
                                  id="region"
                                  as="select"
                                  onClick={(e)=>{onSetRegionId(e.target.value)}}
                                  values={values.region}
                                  className={
                                    "form-control" +
                                    (errors.region && touched.region
                                      ? " is-invalid"
                                      : "")
                                  }
                                >
                                  { states?.map((item,index)=>( <option key={index} value={item.name}>{item.name}</option>))}
                                  
                                </Field>
                                : <Field
                                name="region"
                                type="text"
                                id="region"
                                values={values.region}
                                className={
                                  "form-control" +
                                  (errors.region && touched.region
                                    ? " is-invalid"
                                    : "")
                                }
                              >
                               
                                
                              </Field>}
                                <ErrorMessage
                                  name="region"
                                  component="div"
                                  className="invalid-feedback"
                                />
                            
                          </div>
                          <div className="form-group">
                            <label className="label-txt" for="City">City<sup>*</sup></label>
                            <Field
                                  name="city"
                                  type="text"
                                  id="city"
                                  values={values.city}
                                  className={
                                    "form-control" +
                                    (errors.city && touched.city
                                      ? " is-invalid"
                                      : "")
                                  }
                                />
                                <ErrorMessage
                                  name="city"
                                  component="div"
                                  className="invalid-feedback"
                                />
                          </div>
                          <div className="form-group">
                            <label className="label-txt" for="Zip/Postal">Zip/Postal Code<sup>*</sup></label>
                            <Field
                                  name="postcode"
                                  type="text"
                                  id="postcode"
                                  values={values.postcode}
                                  className={
                                    "form-control" +
                                    (errors.postcode && touched.postcode
                                      ? " is-invalid"
                                      : "")
                                  }
                                />
                                <ErrorMessage
                                  name="postcode"
                                  component="div"
                                  className="invalid-feedback"
                                />
                          </div>
                          <div className="form-group">
                            <label className="label-txt" for="Phone Number">Phone Number<sup>*</sup></label>
                            <Field
                                    name="telephone"
                                    type="telephone"
                                    id="telephone"
                                    values={values.telephone}
                                    className={
                                      "form-control" +
                                      (errors.telephone && touched.telephone
                                        ? " is-invalid"
                                        : "")
                                    }
                                  />
                                  <ErrorMessage
                                    name="telephone"
                                    component="div"
                                    className="invalid-feedback"
                                  />
                            <div className="input-group">
                              <div className="input-group-append">
                                <span className="input-group-text" data-toggle="tooltip" data-placement="right" title="" data-original-title="For delivery questions."><i className="far fa-question-circle"></i></span>
                              </div>
                            </div>
                          </div>
                          <div className="d-flex justify-content-between">
                            <a href="#" className="btn btn-black">Save</a>
                            <button onClick={toggleShowCancel} className="btn btn-black disabled">Cancel</button>
                          </div>
                          <div>
                          </div>
                          </>
                        {/* } */}
                       </Form>
                        )
                      }}
                    </Formik>
                    </div>
                    <div className="d-flex mt-3">
                        <button onClick={toggleShowAddress} className="btn btn-black" data-target=".open-new-address" data-toggle="collapse">+ Add Address</button>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 mb-5">
                <div className="shipment-payment-wrap p-3 border">
                    <div className="new-shipping-method">
                        <h2 className="checkout-step-heading pb-3 border-bottom">Shipping Method</h2>
                        <table className="table">
                            <tbody>
                                <tr className="border-bottom border-top-0">
                                    <td className="border-top-0"><input type="radio" name="flat-rate" selected /></td>
                                    <td className="border-top-0">$15.00</td>
                                    <td className="border-top-0">Fixed</td>
                                    <td className="border-top-0">Flat Rate</td>
                                </tr>
                            </tbody>
                        </table>                  
                    </div>
                    <div className="new-payment-method mt-5">
                        <h2 className="checkout-step-heading pb-3 border-bottom">Payment Method</h2>                    
                        <div className="p-3">
                          Space for Payment Options
                        </div>                        
                        <div className="mybilling-checkbox mt-3 mb-4">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="billingShipping" checked="" />
                                <label className="form-check-label" for="billingShipping">
                                My billing and shipping address are the same
                                </label>
                            </div>
                        </div>
                        <div className="d-flex">
                            <button onClick={AddpaymentMethod} className="btn btn-black btn-block">Place Order</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 mini-cart">
              <div className="order-summary-wrap mt-0">
                <h3>Order Summary <span className="fa fa-times close-order-summary"></span></h3>
                <div onClick={onHandleSummary} className={summarybox===true ? "item-count drop-arrow" : "item-count drop-arrow rotate collapsed"} data-toggle="collapse" data-target=".checkout-cart-list-wrap">{value?.length} Items in Cart</div>
                <div className={summarybox===true ? "checkout-cart-list-wrap collapse show" : "checkout-cart-list-wrap collapse"}>
                {value.map((item,index)=>(   
                  <div key ={index} className="checkout-cart-list-item">
                    <div className="product-img"><img src={item.extension_attributes.image_url} /></div>
                    <div className="product-name-qty"><p>{item.name}</p><p>Qty: {item.qty}</p></div>
                    <div className="product-price">${item.price}</div>
                  </div>
                  ))}
                </div>
                <div className="cart-subtotal">
                    <div className="d-flex justify-content-between">
                      <div>Cart Subtotal</div>
                      <div>$1,150.00</div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div>Shipping
                        <p>Flat Rate - Fixed</p>
                      </div>
                      <div>$20.00</div>
                    </div>
                  </div>
                <div className="d-flex justify-content-between font-weight-bold pb-5">
                    <div>Order Total</div>
                    <div>$120.00</div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
{/* 
    <JewellryFooter /> */}
    
    </>
  )

     
}