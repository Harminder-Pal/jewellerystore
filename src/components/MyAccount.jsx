import React, {useEffect, useState} from 'react'
import { product } from '../services/productServices'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import Header from './header'
import JewellryFooter from './jewellryFooter';

export default function MyAccount(props) {
    const value1 = useParams();
    console.log('MyAccount', value1);
    const selector = useSelector((state) => state.WishListProcess);
    console.log(selector);
    console.log(props);
    const [profile, setprofile] = useState();
    const [show, setshow] = useState(false);
    const [orders, setorder] = useState([]);
    const [check, setcheck] = useState({
        changeEmail: false,
        changePassword: false,
    })
    useEffect(async () => {
        const result = await product.userdetailApi();
        console.log(result);
        setprofile(result.data);
        console.log(profile);
        allorder(result.data.id)
    }, [])

    const onHandleEdit = () => {
        setshow(!show);
    }
    async function allorder(customer_id) {
        const result = await product.AllOrders(customer_id);
        console.log(result)
        setorder(result?.data?.items)
    }
    const handleChange = (e) => {
        const { name, checked } = e.target;
        setcheck({ ...check, [name]: checked })

    }

    return (
        <>
        {/* <Header /> */}
    <section className="myaccount-page">
    <div className="container">
      <div className="row mt-4">
        <div className="col-md-3 col-lg-3">
          <div className="v-tabs">
            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              <a className="nav-link active show" id="v-pills-MyAccount-tab" data-toggle="pill" href="#v-pills-MyAccount" role="tab" aria-controls="v-pills-MyAccount" aria-selected="false">My Account</a>
              <a className="nav-link" id="v-pills-MyOrder-tab" data-toggle="pill" href="#v-pills-MyOrder" role="tab" aria-controls="v-pills-MyOrder" aria-selected="false">My Order</a>
              <a className="nav-link" id="v-pills-MyWishlist-tab" data-toggle="pill" href="#v-pills-MyWishlist" role="tab" aria-controls="v-pills-MyWishlist" aria-selected="false">My Wishlist</a>
              <a className="nav-link" id="v-pills-AddressBook-tab" data-toggle="pill" href="#v-pills-AddressBook" role="tab" aria-controls="v-pills-AddressBook" aria-selected="true">Address Book</a>
            </div>
          </div>
        </div>
        </div>
        <div className="col-md-9 col-lg-9">
          <div className="v-tabs-content text-13">
            <div className="tab-content p-3" id="v-pills-tabContent">
            {props[0]?.location?.pathname ==="/myaccount" ?  <div className="tab-pane fade active show" id="v-pills-MyAccount" role="tabpanel" aria-labelledby="v-pills-MyAccount-tab">
                <h2 className="slim-heading">My Account</h2>
                <h3 className="mb-3">Account Information</h3>
                <div className="row">
                  <div className="col-lg-6 mb-4">
                    <div className="card">
                      <div className="card-header">
                        CONTACT INFORMATION
                      </div>
                      <div className="card-body">
                        <p>{profile.firstname} {profile.lastname}</p>
                        <p>{profile.email}</p>
                      </div>
                      <div className="card-footer">
                        <ul className="list-inline">
                          <li className="list-inline-item"><a nClick={onHandleEdit}className="list-inline-item" data-target=".edit-account-wrap" data-toggle="collapse">Edit</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-4">
                    <div className="card">
                      <div className="card-header">
                        NEWSLETTERS
                      </div>
                      <div className="card-body">
                        <p>You aren't subscribed to our newsletter.</p>
                      </div>
                      <div className="card-footer">
                        <ul className="list-inline">
                          <li className="list-inline-item"></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={ show === true ? "edit-account-wrap review-form-wrap collapsed collapse show" : "edit-account-wrap review-form-wrap collapsed collapse"} data-toggle="collapse">
                  <div className="px-4 py-5 form-container text-grey mb-5">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                          <div className="form-heading-wrap">
                            <h3 className="mb-4 mb-4 text-uppercase">Account Information</h3>
                          </div>
                        <form>
                          <div className="form-group">
                            <label className="label-txt" for="FirstName">First Name<sup className="red">*</sup></label>
                            <input type="text" className="form-control" placeholder="" />
                          </div>
                          <div className="form-group">
                            <label className="label-txt" for="LastName">Last Name<sup className="red">*</sup></label>
                            <input type="text" className="form-control" placeholder="" />
                          </div>
                            <div className="form-check mt-4">
                            <input class="form-check-input mt-1" type="checkbox" value="" onChange={handleChange} name="changeEmail" id="changeEmail"/>
                                <label className="form-check-label" for="changeEmail">
                                  Change Email
                                </label>
                            </div>
                            <div className="form-check mt-2 mb-4">
                                <input className="form-check-input mt-1" type="checkbox"  name='changePassword' onChange={handleChange}  value="" id="changepassword" />
                                <label className="form-check-label" for="changepassword">
                                    Change Password
                                </label>
                            </div>
                        </form> 
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <h3 className="mb-4 text-uppercase">Change Email and Password</h3>
                            <form>
                            {check.changeEmail === true ?
                              <div className="form-group">
                                <label className="label-txt" for="Email">Email<sup className="red">*</sup></label>
                                <input type="Email" className="form-control" placeholder="" />
                              </div> : ''}
                      {check?.changePassword === true ?    
                      <>   
                              <div className="form-group">
                                <label className="label-txt" for="CurrentPassword">Current Password<sup className="red">*</sup></label>
                                <input type="password" className="form-control" placeholder="" />
                              </div>
                              <div className="form-group">
                                <label className="label-txt" for="NewPassword">New Password<sup className="red">*</sup></label>
                                <input type="password" className="form-control" placeholder="" />
                                <p>Password Strength: <span>No Password</span></p>
                              </div>
                              <div className="form-group">
                                <label className="label-txt" for="ConfirmNewPassword">Confirm New Password<sup className="red">*</sup></label>
                                <input type="password" className="form-control" placeholder="" />
                              </div>
                                <div className="form-check mt-2 mb-4">
                                    <input className="form-check-input mt-1" type="checkbox" value="" id="showPassword" />
                                    <label className="form-check-label" for="showPassword">
                                      Show Password
                                    </label>
                                </div>
                                </>
                                  :''}
                            </form> 
                        </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                          <button onClick={onHandleEdit} className="btn btn-black" data-target=".edit-account-wrap" data-toggle="collapse">Cancel</button>
                          <button type="submit" className="btn btn-black">Save</button>
                      </div>
                    </div>
                    </div>
                </div>
              </div>
              :''}
              {props[0]?.location?.pathname === "/account/allorders" ?   
              <div className="tab-pane fade" id="v-pills-MyOrder" role="tabpanel" aria-labelledby="v-pills-MyOrder-tab">
                <h2 className="slim-heading">My Order</h2>
                <div className="myorder-table">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Order #</th>
                        <th scope="col">Date</th>
                        <th scope="col">Order Total</th>
                        <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                    {orders?.map((items,index)=>(<tr>
                        <td>{items.increment_id}</td>
                        <td>3/21/22	</td>
                        <td>${items.total_due}	</td>
                        <td>{items.status}</td>
                      </tr>
                    ))}
                    </tbody>
                  </table>
                </div>
              </div>
              : ''}
              {props[0]?.location?.pathname === "/mywishlist" ? 
              <div className="tab-pane fade" id="v-pills-MyWishlist" role="tab" aria-controls="v-pills-MyWishlist"  aria-labelledby="v-pills-MyWishlist-tab">
                <h2 className="slim-heading">My Wishlist</h2>
                {/* <div className="alert alert-warning" role="alert">
                  <i className="fas fa-exclamation-triangle"></i> You have no items in your wish list.
                </div> */}
                <div className="row">
                { selector?.wishlist?.map((item,index)=>(
                  <div className="col-lg-4">
                    <div className="product-info">
                      <div className="remove-product">
                        <a href="#" title="Remove from Wishlist"><i className="fas fa-times"></i></a>
                      </div>
                      <div className="product-image">
                        <a href="#"><img src={item.img_src}className="img-fluid" /></a>
                      </div>
                      <div className="star-rating-bg">
                        <div className="star-rating">
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                        </div>
                      </div>
                      <div className="product-title"><a href="#">{item.name}</a></div>
                      <div className="product-price">${item.price}</div>
                      <div className="add-wishlist-out">
                        <div className="add-to-cart-outer">
                            <a href="#" className="add-to-cart-btn"><i className="fa fa-solid fa-cart-shopping"></i>Add to cart</a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                </div>
              </div>
                 :""}
            { props[0]?.location?.pathname === "/account/address"     ? 
              <div className="tab-pane fade" id="v-pills-AddressBook" role="tabpanel" aria-labelledby="v-pills-AddressBook-tab">
                <h2 className="slim-heading">Address Book</h2>
                <h3 className="mb-3">Default Addresses</h3>
                <div className="row">
                  <div className="col-lg-6 mb-4">
                    <div className="card text-13">
                      <div className="card-header">
                        Default billing address
                      </div>
                      <div className="card-body">
                      <p>{profile?.firstname} {profile?.lastname} </p><br/>
                           <p> netsmartz </p><br/>
                           <p> ropar</p> <br/>
                            <p>chd, Punjab, 140118 </p> <br/>
                            <p>India </p><br/>
                          <p> T: 000000000000000</p>                   
                           </div>
                      <div className="card-footer">
                        <ul className="list-inline">
                          <li className="list-inline-item"><a href="#" className="list-inline-item" data-target=".add-address-wrap" data-toggle="collapse">Change Billing Address</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-4">
                    <div className="card">
                      <div className="card-header">
                        Default Shipping Address
                      </div>
                      <div className="card-body">
                      <p>Email Singh </p><br/>
                           <p> netsmartz </p><br/>
                           <p> ropar</p> <br/>
                            <p>chd, Punjab, 140118 </p> <br/>
                            <p>India </p><br/>
                          <p> T: 000000000000000</p> 
                      </div>
                      <div className="card-footer">
                        <ul className="list-inline">
                          <li className="list-inline-item"><a href="#" className="list-inline-item" data-target=".add-address-wrap" data-toggle="collapse">Change Shipping Address</a></li>
                        </ul>
                      </div>
                    </div >
                  </div >
                </div >
                <div>
                </div>
                </div>
              :'' }
                <div className="add-address-wrap review-form-wrap collapsed collapse">
                  <div className="px-4 py-5 form-container text-grey mb-5">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                          <div className="form-heading-wrap">
                            <h3 className="mb-4 mb-4 text-uppercase">Account Information</h3>
                          </div>
                        <form>
                          <div className="form-group">
                            <label className="label-txt" for="addressFirstName">First Name<sup className="red">*</sup></label>
                            <input type="text" className="form-control" placeholder="" />
                          </div>
                          <div className="form-group">
                            <label className="label-txt" for="addressLastName">Last Name<sup className="red">*</sup></label>
                            <input type="text" className="form-control" placeholder="" />
                          </div>
                          <div className="form-group">
                            <label className="label-txt" for="company">Company<sup className="red">*</sup></label>
                            <input type="text" className="form-control" placeholder="" />
                          </div>
                          <div className="form-group">
                            <label className="label-txt" for="PhoneNumber">Phone Number<sup className="red">*</sup></label>
                            <input type="text" className="form-control" placeholder="" />
                          </div>
                        </form> 
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="form-heading-wrap">
                              <h3 className="mb-4 mb-4 text-uppercase">Account Information</h3>
                            </div>
                            <div className="billing-shipping-address review-form-wrap">
                              <form>
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
                                <div className="form-check mt-4">
                                  <input className="form-check-input mt-1" type="checkbox" value="" id="billingAddress" />
                                  <label className="form-check-label" for="billingAddress">
                                    Use as my default billing address
                                  </label>
                                </div>
                                <div className="form-check mt-2 mb-4">
                                  <input className="form-check-input mt-1" type="checkbox" value="" id="shippingaddress" />
                                  <label className="form-check-label" for="shippingaddress">
                                    Use as my default shipping address
                                  </label>
                                </div>
                              </form>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                          <button type="submit" className="btn btn-black" data-target=".add-address-wrap" data-toggle="collapse">Cancel</button>
                          <button type="submit" className="btn btn-black">Save Address</button>
                      </div>
                    </div>
                    </div>
                </div>

              </div>
            
            </div >
          </div >
        </div >
      
    
</section >
{/* <JewellryFooter /> */}
</>
  
 )
}

