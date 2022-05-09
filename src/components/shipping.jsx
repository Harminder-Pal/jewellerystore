import React from 'react'
import { useState } from 'react'
import { useraction } from '../actions/action';
import { useDispatch } from 'react-redux';
import Header from './header';
import JewelleryFooter from './jewellryFooter';

const Shipping = () => {

  const dispatch = useDispatch();

  const initialState = {};
  const [val, setvalue] = useState(initialState);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setvalue({ ...val, [name]: value })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(val);
    dispatch(useraction.AddShippingRequest(val))
  }


  return (
        <>
        <Header />
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
                      
              <div className="sign-in-link-wrap">
                  <a href="/login" className="checkout-signin mt-3 d-inline-block">Sign In</a>
              </div>
              <div className="review-form-wrap checkout-sign-in-form">
                <div className="form-heading-wrap">
                    <h3 className="mb-4">Sign In</h3>
                    <a href="/login" className="close-form"><i className="fa fa-times"></i></a>
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
                        <a href="/forgetpassword" className="checkout-forgot-password">Forgot Your Password?</a>
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
                            <input className="form-check-input mt-0" type="checkbox" value="" id="address-check" checked />
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
                    <div className="review-form-wrap shipping-address-form mt-2 collapse open-new-address">
                        <form>
                          <div className="form-group">
                            <label className="label-txt" for="Email Address">Email Address<sup>*</sup></label>
                            <div className="input-group">
                              <input type="email" className="form-control" placeholder="" />
                              <div className="input-group-append">
                                <span className="input-group-text" data-toggle="tooltip" data-placement="right" title="" data-original-title="We'll send your order confirmation here."><i className="far fa-question-circle"></i></span>
                              </div>
                            </div>
                           
                            <div className="txt-13">You can create an account after checkout.</div>
                          </div>
                          <div className="form-group">
                            <label className="label-txt" for="First Name">First Name<sup>*</sup></label>
                            <input type="text" className="form-control" placeholder="" />
                        
                          </div>
                          <div className="form-group">
                            <label className="label-txt" for="Last Name">Last Name<sup>*</sup></label>
                            <input type="text" className="form-control" placeholder="" />
                           
                          </div>
                          <div className="form-group">
                            <label className="label-txt" for="Company">Company<sup>*</sup></label>
                            <input type="text" className="form-control" placeholder="" />
                           
                          </div>
                          <div className="form-group">
                            <label className="label-txt" for="Street Address">Street Address<sup>*</sup></label>
                            <textarea name="address" rows="4" className="form-control"></textarea>
                           
                          </div>
                          <div className="form-group">
                            <label className="label-txt" for="Country">Country<sup>*</sup></label>
                            <select className="form-control txt-13" id="Country">
                              <option value="Afganistan">Afghanistan</option>
                              <option value="Albania">Albania</option>
                              <option value="Algeria">Algeria</option>
                              <option value="American Samoa">American Samoa</option>
                              <option value="Andorra">Andorra</option>
                              <option value="Angola">Angola</option>
                            </select>
                          </div>
                          <div className="form-group">
                            <label className="label-txt" for="State/Province">State/Province<sup>*</sup></label>
                            <select className="form-control txt-13" id="State/Province">
                              <option> Please Select a region, state or province</option>                
                              <option value="AL">Alabama</option> 
                              <option value="AK">Alaska</option> 
                              <option value="AZ">Arizona</option>
                            </select>
                          </div>
                          <div className="form-group">
                            <label className="label-txt" for="City">City<sup>*</sup></label>
                            <input type="email" className="form-control" placeholder="" />
                           
                          </div>
                          <div className="form-group">
                            <label className="label-txt" for="Zip/Postal">Zip/Postal Code<sup>*</sup></label>
                            <input type="text" className="form-control" id="Zip/Postal" />
                          </div>
                          <div className="form-group">
                            <label className="label-txt" for="Phone Number">Phone Number<sup>*</sup></label>
                            <div className="input-group">
                              <input type="text" className="form-control" placeholder="" />
                              <div className="input-group-append">
                                <span className="input-group-text" data-toggle="tooltip" data-placement="right" title="" data-original-title="For delivery questions."><i className="far fa-question-circle"></i></span>
                              </div>
                            </div>
                          
                          </div>
                          <div className="d-flex justify-content-between">
                            <a href="#" className="btn btn-black">Save</a>
                            <a href="#" className="btn btn-black disabled">Cancel</a>
                          </div>
                          <div>
                          </div>
                        </form> 
                    </div>
                    <div className="d-flex mt-3">
                        <a href="#" className="btn btn-black" data-target=".open-new-address" data-toggle="collapse">+ Add Address</a>
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
                            <a href="#" className="btn btn-black btn-block">Place Order</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 mini-cart">
              <div className="order-summary-wrap mt-0">
                <h3>Order Summary <span className="fa fa-times close-order-summary"></span></h3>
                <div className="item-count drop-arrow" data-toggle="collapse" data-target=".checkout-cart-list-wrap">3 Items in Cart</div>
                <div className="checkout-cart-list-wrap show">
                  <div className="checkout-cart-list-item">
                    <div className="product-img"><img src="images/tshirt1.jpg" /></div>
                    <div className="product-name-qty"><p>Diamond Neclace</p><p>Qty: 1</p></div>
                    <div className="product-price">$25.00</div>
                  </div>
                  <div className="checkout-cart-list-item">
                    <div className="product-img"><img src="images/tshirt1.jpg" /></div>
                    <div className="product-name-qty"><p>Diamond Neclace</p><p>Qty: 7</p></div>
                    <div className="product-price">$250.00</div>
                  </div>
                  <div className="checkout-cart-list-item">
                    <div className="product-img"><img src="images/tshirt1.jpg" /></div>
                    <div className="product-name-qty"><p>Diamond Neclace</p><p>Qty: 5</p></div>
                    <div className="product-price">$297.00</div>
                  </div>
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
          </div >
      </div >
    </section >

{/* <section className="cart-page">
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
            <div className="sign-in-link-wrap">
                <a href="/login" className="checkout-signin mt-3 d-inline-block">Sign In</a>
            </div>
            <div className="review-form-wrap checkout-sign-in-form">
              <div className="form-heading-wrap">
                  <h3 className="mb-4">Sign In</h3>
                  <a href="#" className="close-form"><i className="fa fa-times"></i></a>
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
        <div className="row">
          <div className="col-lg-8 mb-5 checkout-block">
              <div className="checkout-form-head mt-5 mb-4">
                  <h2>Shipping Address</h2>
                  <hr></hr>
              </div>
              <div className="row">
                  <div className="col-lg-9">
                      <div className="shipping-address-block">
                          <div className="review-form-wrap shipping-address-form">
                              <form>
                                <div className="form-group">
                                  <label className="label-txt" for="Email Address">Email Address<sup>*</sup></label>
                                  <div className="input-group">
                                    <input type="email" className="form-control" placeholder="" />
                                    <div className="input-group-append">
                                      <span className="input-group-text" data-toggle="tooltip" data-placement="right" title="We'll send your order confirmation here."><i className="far fa-question-circle"></i></span>
                                    </div>
                                  </div>
                                  <div className="txt-13">You can create an account after checkout.</div>
                                </div>
                                <hr className="my-4"></hr>
                                <div className="form-group">
                                  <label className="label-txt" for="First Name">First Name<sup>*</sup></label>
                                  <input type="text" className="form-control" placeholder="" />
                                  
                                </div>
                                <div className="form-group">
                                  <label className="label-txt" for="Last Name">Last Name<sup>*</sup></label>
                                  <input type="text" className="form-control" placeholder="" />
                                  
                                </div>
                                <div className="form-group">
                                  <label className="label-txt" for="Company">Company<sup>*</sup></label>
                                  <input type="text" className="form-control" placeholder="" />
                                  
                                </div>
                                <div className="form-group">
                                  <label className="label-txt" for="Street Address">Street Address<sup>*</sup></label>
                                  <div className="txt-13 mb-1">Street Address: Line 1</div>
                                  <input type="text" className="form-control" placeholder="" />
                                  <input type="text" className="form-control" placeholder="" />
                                  <input type="text" className="form-control" placeholder="" />
                                  
                                </div>
                                <div className="form-group">
                                  <label className="label-txt" for="Country">Country<sup>*</sup></label>
                                  <select className="form-control txt-13" id="Country">
                                    <option value="Afganistan">Afghanistan</option>
                                    <option value="Albania">Albania</option>
                                    <option value="Algeria">Algeria</option>
                                    <option value="American Samoa">American Samoa</option>
                                    <option value="Andorra">Andorra</option>
                                    <option value="Angola">Angola</option>
                                  </select>
                                </div>
                                <div className="form-group">
                                  <label className="label-txt" for="State/Province">State/Province<sup>*</sup></label>
                                  <select className="form-control txt-13" id="State/Province">
                                    <option> Please Select a region, state or province</option>                
                                    <option value="AL">Alabama</option> 
                                    <option value="AK">Alaska</option> 
                                    <option value="AZ">Arizona</option>
                                  </select>
                                </div>
                                <div className="form-group">
                                  <label className="label-txt" for="City">City<sup>*</sup></label>
                                  <input type="email" className="form-control" placeholder="" />
                               
                                </div>
                                <div className="form-group">
                                  <label className="label-txt" for="Zip/Postal">Zip/Postal Code<sup>*</sup></label>
                                  <input type="text" className="form-control" id="Zip/Postal" />
                                </div>
                                <div className="form-group">
                                  <label className="label-txt" for="Phone Number">Phone Number<sup>*</sup></label>
                                  <div className="input-group">
                                    <input type="text" className="form-control" placeholder="" />
                                    <div className="input-group-append">
                                      <span className="input-group-text" data-toggle="tooltip" data-placement="right" title="For delivery questions."><i className="far fa-question-circle"></i></span>
                                    </div>
                                  </div>
                                </div>
                              </form> 
                          </div>
                      </div>
                  </div>
              </div>
              <div className="checkout-form-head mt-5 mb-4">
                <h2>Shipping Method</h2>
                <hr></hr>
                <div className="form-group my-4 flat-rate">
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="gridRadios" id="Flat-Rate" value="option1" checked="" />
                    <label className="form-check-label" for="Flat-Rate">
                      <strong>$15.00</strong> Fixed Flat Rate
                    </label>
                  </div>
                </div>
              </div>
              <div className="action-btns-wrap text-right">
                  <a href="/placeorder" className="btn btn-black">Next</a>
              </div>
          </div>
          <div className="col-lg-4 mini-cart">
            <div className="order-summary-wrap">
              <h3>Order Summary <span className="fa fa-times close-order-summary"></span></h3>
              <div className="item-count drop-arrow" data-toggle="collapse" data-target=".checkout-cart-list-wrap">3 Items in Cart</div>
              <div className="checkout-cart-list-wrap show">
                <div className="checkout-cart-list-item">
                  <div className="product-img"><img src="/images/diamond_neclace3.jpg" /></div>
                  <div className="product-name-qty"><p>Diamond Neclace</p><p>Qty: 1</p></div>
                  <div className="product-price">$25.00</div>
                </div>
                <div className="checkout-cart-list-item">
                  <div className="product-img"><img src="/images/diamond_neclace3.jpg" /></div>
                  <div className="product-name-qty"><p>Diamond Neclace</p><p>Qty: 7</p></div>
                  <div className="product-price">$250.00</div>
                </div>
                <div className="checkout-cart-list-item">
                  <div className="product-img"><img src="/images/diamond_neclace3.jpg" /></div>
                  <div className="product-name-qty"><p>Diamond Neclace</p><p>Qty: 5</p></div>
                  <div className="product-price">$297.00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
	  </div>
	</section> */}

  < JewelleryFooter />


        </>
    )
}

export default Shipping
