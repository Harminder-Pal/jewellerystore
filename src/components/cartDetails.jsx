import React from 'react';
import { useEffect, useState } from 'react';
import {GusetUserServices} from '../services/guestServices';
import {useDispatch,useSelector} from 'react-redux';
import { useraction } from '../actions/action';
import Header from './header';
import JewellryFooter from './jewellryFooter';
import { product } from '../services/productServices';
import { Link } from 'react-router-dom'

const CartDetails = () => {
  // const dispatch = useDispatch();
  // const selector = useSelector((state)=> state?.CartProcess);
  //   const [Quantity,setQuantity] = useState([]);
  //   const [update,setupdate] = useState([]);
  //   const [ApplyCoupon,setApplyCoupon] = useState()
  //   const [Total,setTotal] = useState('');
  //   const [countries,setcountries] = useState([]);
  //   const [countrystate,setcountrystate] = useState([]);
  //   const [show,setshow] = useState(false)
  //   const [giftshow,setgiftshow] = useState(false)
  //   useEffect(()=>{
  //     GetCartItems();
  //     subTotal();
  //     GetCountries();
  //   },[])
  //   const toggleGiftOptions = ()=>{
  //     setgiftshow(!giftshow);
  //   } 
  //   async function GetCartItems(){
  //   dispatch(useraction.GetAllItemsInCartRequest());
  //   }
  //   async function GetCountries(){
  //     const result = await product.GetCountries();
  //     setcountries(result.data)
  //   }
  //   const onChandeCountryid = (e)=>{
  //     GetStateByCountries(e.target.value)
  //   }
  //   async function GetStateByCountries(id){
  //     const result = await product.GetStatesByCountryApi(id);
  //     setcountrystate(result.data.available_regions)
  //   }
  //   async function subTotal(){
  //     let result;
  //     if(localStorage.getItem('cart_id')){
  //     const cart_id = JSON.parse(localStorage.getItem('cart_id'));
  //      result =  await product.subtotal(cart_id.id.id);
  //     }
  //     if(localStorage.getItem('user')){
  //       const user = JSON.parse(localStorage.getItem('user'))
  //       result = await product.subtotal(user.quote_id);

  //     }
  //     setTotal(result.data);
  //     console.log(result.data);  
  //   }

  //    const showCountriestoggle = ()=>{
  //      setshow(!show);
  //    }

  //    const onHandleChange = (e)=>{
  //     const {name,value} = e.target;
  //      setApplyCoupon({...ApplyCoupon,[name]:value})
  //    }
  //   const onChangeQty = (e,index)=>{
  //     update[index].qty = e.target.value;
  //   }
  //   const onClickHandle = (e)=>{
  //     e.preventDefault();
  //     console.log(ApplyCoupon);
  //   }
  //   const UpdateProductInCart = () =>{
  //     const cart_id = JSON.parse(localStorage.getItem('cart_id'));
  //     console.log(update)
  //     console.log(cart_id);
  //   }
  //   const DeleteProductCart = async (item_id) =>{
  //     let quote_id ;
  //     let product_details = {};
  //     if(localStorage.getItem('cart_id')){
  //     const cart_id = JSON.parse(localStorage.getItem('cart_id'));
  //     quote_id = cart_id.id.id;
  //     product_details = {item_id,quote_id};
  //     }
  //     if(localStorage.getItem('user')){
  //     const user = JSON.parse(localStorage.getItem('user'));
  //     quote_id = user.quote_id;
  //     product_details = {item_id,quote_id};
  //     }
  //     dispatch(useraction.RemoveFromCartRequest(product_details))
      
  //   }
    const [value, setvalue] = useState([]);
    const [val , setval] = useState();
    const [qty, setqty] = useState();

    const increment = () => {
      setqty(qty=>qty+1)
    }
    const decrement = () => {    
      if (qty>1){
        setqty(qty=>qty-1)
      }
    }

    const dispatch= useDispatch()

    const DeleteProductCart = async (item_id) =>{
      const cart_id = JSON.parse(localStorage.getItem('cart_id'));
      const quote_id = cart_id.id.id;
      console.log(item_id,"DeleteProductCart")
      const product_details = {item_id,quote_id};
      dispatch(useraction.RemoveFromCartRequest(product_details))
    }
    

    useEffect(async () => {

        // const cart_id = JSON.parse(localStorage.getItem('cart_id'))

        const cart_id = JSON.parse(localStorage.getItem('cart_id'));
        console.log("cartdetails",cart_id);
        const result = await GusetUserServices.GetProductFromCart(cart_id.cart_id);

        const subtotal =  await(product.subtotal(cart_id.id.id));

        console.log(subtotal);

        setval(subtotal.data);

        setvalue(result.data);


    }, []);
    return(
      
        <div>
          {/* <Header /> */}
          <section className="cart-page" >
        <div className="container">
            <div className="heading-cart">
                <h3>Shopping Cart</h3>
            </div>
            <div className="row">
                <div className="col-lg-8 cart-item-order">
                    <div className="cart-details-table-wrap">
                        <div className="custom-table">
                            <table className="table">
                                <thead>
                                  <tr>
                                    <th className="col">Item</th>
                                    <th className="col">Price</th>
                                    <th className="col">Qty</th>
                                    <th className="col">Subtotal</th>
                                  </tr>
                                </thead>
                                {value.map((item,index)=>(
                          <tbody key={index} >
                                  <tr>
                                    <td className="col td-cart-image">
                                        <div className="cart-title-image-wrap">
                                        <div className="cart-image">
                        <Link to={'/product/'+item.sku}><img src={item.extension_attributes?.image_url }  /></Link>
                      </div>
                                            {/* <a href="/product/:sku_name" className="cart-image">
                                                <img src={item.extension_attributes?.image_url } alt="productimage"/>
                                            </a> */}
                                            <a href={'/product/'+item.sku} className="cart-title">
                                                {item.name}
                                            </a>
                                        </div>
                                    </td>
                                    <td className="col td-cart-price"><div className="cart-product-price">${item.price}</div></td>
                                    <td className="col td-cart-qty">
                                        <div className="cart-product-qty">
                                            <div className="quantity-switcher">
                                                <input id="product-qty" className="quantity-input" value={ item.qty } type="number" min="1" max="10" />
                                                <div className="increment-decrement-wrap">
                                                  <a href="javascript:;" onClick={increment} className="increment-btn"><i className="fas fa-caret-up"></i></a>
                                                  <a href="javascript:;" onClick={decrement} className="decrement-btn"><i className="fas fa-caret-down"></i></a>  
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="col td-cart-subtotal">
                                      <div className="cart-subtotal-price">${item.price * item.qty}</div>
                                    </td>
                                  </tr>
                                  <tr>
                                      <td className="col" colSpan="4">
                                        <div className="cart-edit-delete">
                                            <a onClick={()=>{DeleteProductCart(item.item_id)}} ><i className="fa fa-times"></i></a>
                                        </div>
                                      </td>
                                  </tr>
                                </tbody>
                                ))}
                               
                            </table>
                        </div>
                        <div className="update-cart-btn-wrap mb-5">
                          <a href="#" className="btn btn-white">
                            Update Cart
                          </a>
                        </div>
                        <div className="cart-gift-block">
                            <div  className="gift-card-title" data-toggle="collapse" data-target="#gift-collapse" role="button">
                              Gift Options <i className="fa fa-chevron-down"></i>
                            </div>
                            <div className=" collapse" id="gift-collapse">
                              <h4 className="pick-a-paper my-5">Pick a paper of your choice (optional)</h4>
                              <form className="form">
                                <div className="form-check">
                                  <input type="checkbox" className="form-check-input" id="gift-receipt" />
                                  <label className="form-check-label" htmlFor="gift-receipt">Gift Receipt</label>
                                </div>
                                <div className="form-check">
                                  <input type="checkbox" className="form-check-input" id="printed-card" />
                                  <label className="form-check-label" htmlFor="printed-card">Printed card</label>
                                </div>
                              </form>
                              <p className="gift-price">Price: <strong>$0.00</strong></p>
                              <div className="cancel-update-wrap my-5">
                                <a href="#" className="btn btn-blank">Cancel</a>
                                <a href="#" className="btn btn-white">Update</a>
                              </div>
                            </div>
                        </div>
                        <div className="apply-discount-block mt-4 mb-5">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <label htmlFor="ApplyDiscountCode" id="ApplyDiscountCode" className="discount-label">Apply Discount Code</label>
                                <div className="mobile-view apply-discount">
                                  <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Enter Discount Code" />
                                    <div className="input-group-append">
                                      <button className="btn btn-black" type="button">Apply Discount</button>
                                    </div>
                                  </div>
                                
                                  <div className="my-3"></div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label htmlFor="GiftCards" id="GiftCards" className="discount-label">Gift Cards</label>
                                <div className="mobile-view apply-gift-card">
                                  <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Enter the Gift Card Code" />
                                    <div className="input-group-append">
                                      <button className="btn btn-black" type="button">Add Gift Card</button>
                                    </div>
                                  </div>
                                
                                  <div className="my-3"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mb-5"></div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 cart-summary-order">
                  <div className="cart-summary-section mb-3">
                    <h3 className="summary-title">Summary</h3>
                    <div className="estimate-tax" >
                      <div className="estimate-title drop-arrow"   data-toggle="collapse">Estimate Shipping and Tax</div>
                      <div className="border-bottom">
                        <div className= "collapse" id="estimate-collapse">
                          <form>
                            {/* <div className="form-group">
                              <label htmlFor="Country">Country</label>
                              <select className="form-control"  onChange={onChandeCountryid}  id="Country">
                              { countries?.map((item,index)=>( 
                          <option key={index} value={item.id}>{item.full_name_english}</option> 
                          ))}
                              </select>
                            </div>
                            <div className="form-group">
                              <label htmlFor="State/Province">State/Province</label>
                              <select className="form-control" id="State/Province">
                              {countrystate?.map((item,index)=>(  
                        <option key={index} value={item.id} >
                          {item.name}  
                        </option> ))}  
                              </select>
                            </div> */}
                            <div className="form-group">
                              <label htmlFor="Zip/Postal">Zip/Postal Code</label>
                              <input type="number" className="form-control" id="Zip/Postal" />
                            </div>
                            <div className="form-group my-4 flat-rate">
                              <label htmlFor="Flat-Rate">Flat Rate</label>
                              <div className="form-check">
                                <input className="form-check-input" type="radio" name="gridRadios" id="Flat-Rate" value="option1" checked />
                                <label className="form-check-label" htmlFor="Flat-Rate">
                                  Fixed <strong>$20.00</strong>
                                </label>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="subtotal-shipping-order">
                      <div className="subtotal-wrap">
                        <div className="subtotal-head">Subtotal</div>
                        <div className="txt-black font-weight-bold">$20</div>
                      </div>
                      <div className="subtotal-wrap pb-3 border-bottom">
                        <div className="subtotal-head">Shipping (Flat Rate - Fixed)</div>
                        <div className="txt-black font-weight-bold">$50</div>
                      </div>
                      <div className="subtotal-wrap order">
                        <div className="subtotal-head">Order Total</div>
                        <div className="txt-black font-weight-bold">$200</div>
                      </div>
                    </div>
                    <div className="cart-checkout-btn mt-5">
                      <a href="/shipping" className="btn btn-black btn-block">Go to Checkout</a>
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </section>
   
   
    {/* <strong>
        Shopping Cart
    </strong>
    { value.length > 0 ?  
    <div className='container' >
    <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Item</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col" >Subtotal</th>
      <th scope='col' >Edit</th>
      <th scope='col' >Delete</th>
    </tr>
  </thead>
  <tbody>
  { value.map((item,index)=>{
   return (<tr key={index} >
      <th scope="row">{index + 1}</th>
      <td><img src='' alt='img' /></td>
      <td>${item.price}</td>
      <td><input type="number"  min="1" defaultValue={item.qty}/></td>
      <td>${item.price * item.qty }</td>
      <td> <button className='btn btn-dark' > Update </button></td>
    <td> <button onClick={()=>{DeleteProductCart(item.item_id)}} className='btn btn-dark'  >Delete</button> </td>
    </tr>
  )})}
    </tbody>
    </table>
    </div>
:""}
<br/>
<br/>
<button className='btn btn-dark'>  Update</button>
    <div className='container' >
     <strong>Summary</strong>
     <br/>
     <strong>Emstimate Shipping and Tax : </strong>
     <br/>
     <strong>Subtotal : </strong>
     <br/>
     <strong>Shipping (Falt Rate - Fixed)</strong>
     <br/>
     <strong>Order Total</strong>
     <br/>
     <button className='btn btn-dark' >Go to Checkout </button>
    </div>
    <br/>
    <br/>
    <br/>
    <input type="text" placeholder='Enter Discount Code' /> <button className='btn btn-dark' >Add Discount</button>
    <br/>
    <input type="text" placeholder='Enter Gift Card Code' /> <button className='btn btn-dark' >Add Gift Card</button> */}
    {/* <JewellryFooter /> */}
    </div>
    )
}

export default CartDetails