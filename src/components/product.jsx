import React, { useEffect, useState } from 'react'
import { product } from '../services/productServices';
import { useParams } from 'react-router-dom';
import JewellryFooter from './jewellryFooter';
import Header from './header';
import { useraction } from '../actions/action';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import {Form, Formik, Field, ErrorMessage} from 'formik'

function Products(props) {
  const initialState = {
    nickname:'',
    summary:'',
    review:'',
    rating:'',
    product_id:'',
  }

  const { sku_name } = useParams()

  const [value, setvalue] = useState();
  const [qty, setqty] = useState(1);
  const [wishlist,setwishlist] = useState({product:false});

  const increment = () => {
    setqty(qty=>qty+1)
  }
  const decrement = () => {    
    if (qty>1){
      setqty(qty=>qty-1)
    }
  }

  const dispatch = useDispatch();
  const AddToCart = async (sku) => {
    const user_id = localStorage.getItem('card_id');
    let product_details = {
      sku_name: sku,
      qty: 1,
      quote_id: user_id
    }
    dispatch(useraction.AddToCartRequest(product_details));
  }

  const AddToWishList = (sku_name) => {
    dispatch(useraction.AddToWishListRequest(sku_name))
  }



  useEffect(async () => {

    const result = await product.productApi(sku_name)

    setvalue(result.data)

  }, []);

  const ReviewSchema = Yup.object().shape({
    nickname:Yup.string().required('Nickname is required'),
    summary:Yup.string().required('Summary is required'),
    review:Yup.string().required('Review is required')
  })

  console.log(value)

  return (


    <>
      {/* <Header /> */}

      {value ?
        <>
        <section className="breadcrumb-section py-3">
                        <div className="custom-breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="/">Home</a></li>
                                <li className="breadcrumb-item active">{value.name}</li>
                            </ol>
                        </div>
                    </section>
          <section className="pdp-content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6">
                  <div className="pdp-product-image">
                    <img src={value.media_gallery_entries[0].file} alt="" className="img-fluid" />
                    {/* <div className="magnifying-glass">
                      <i className="fas fa-times"></i>
                    </div> */}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="pdp-product-description">
                    <div className="page-title-wrapper">
                      <h1 className="page-title">
                        {value.name}
                      </h1>
                      {/* <div className="title-right-icon">
                        <div className="hover-product-wrap">
                          <a href="#" className="icon-link"><i className="fa fa-chevron-left"></i></a>
                          <div className="hover-product">
                            <img src="images/diamond_neclace3.jpg" />
                            <p>Left Image</p>
                          </div>
                        </div>
                        <div className="hover-product-wrap">
                          <a href="#" className="icon-link"><i className="fa fa-chevron-right"></i></a>
                          <div className="hover-product">
                            <img src="images/31lynjjwj6l.jpg" />
                            <p>Right Image</p>
                          </div>
                        </div>
                      </div> */}
                    </div>

                    <div className="pdp-star-review mb-4">
                      <div className="star-rating">
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <a href="#" className="review-txt">Be the first to review this product</a>
                      </div>
                    </div>

                    <div className="pdp-description-txt mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
   </div>

                    <div className="pdp-price-availability mb-4">
                      <div className="product-price">
                        ${value.price}
                        </div>
                      <div className="product-availability">
                      <p>Availability : <span>{value.extension_attributes.stock_item.is_in_stock === true ? "In Stock " : "Out Stock"}</span></p>
                      <p>SKU : <span>{value.sku}</span></p>
                     
                      </div>
                      
                    </div>

                    <hr></hr>
                    <div className="quantity-addtocart-wrap my-4">
                      <div className="quantity-switcher">
                        <input id="product-qty" className="quantity-input" value={qty} type='number' min='1' max='10' />
                        <div className="increment-decrement-wrap">
                          <a href="javascript:;" onClick={increment} className="increment-btn"><i className="fas fa-caret-up"></i></a>
                          <a href="javascript:;" onClick={decrement} className="decrement-btn" ><i className="fas fa-caret-down"></i></a>
                        </div>
                 
                     <div className="addtocart-wrap">
                        <button onClick={() => { AddToCart(value.sku) }} className="btn btn-primary btn-black">Add to cart</button>
                      </div>
                      { wishlist?.product === true ?    <div className="pdp-wishlist-compare-outer d-inline">
                  <button onClick={()=>{AddToWishList(value.sku)}} className="icon wishlist-btn"><i className={"fa fa-solid fa-heart"}></i></button>
                </div> :
                      <div className="pdp-wishlist-compare-outer d-inline">
                        <button onClick={() => { AddToWishList(value.sku) }} className="icon wishlist-btn"><i className="fa fa-solid fa-heart"></i></button>
                      </div>
                      }
                 
                       
                      </div>
                    </div>
                    <hr></hr>

                    <div className="pdp-social-icons">
                      <ul className="list-inline">
                        <li className="list-inline-item"><a href="https://www.linkedin.com"><img src="../assets/images/linkedin.png" /></a></li>
                        <li className="list-inline-item"><a href="https://www.facebook.com"><img src="../assets/images/facebook.png" /></a></li>
                        <li className="list-inline-item"><a href="https://www.twitter.com"><img src="../assets/images/twitter.png" /></a></li>
                        {/* <li className="list-inline-item"><a href="#"><img src="../assets/images/print-filled.png" /></a></li> */}
                        {/* <li className="list-inline-item"><a href="#"><img src="../assets/images/addition.png" /></a></li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pdp-review-pane-bottom">
                <div className="review-tab-section my-5">
                  <ul className="nav nav-tabs" id="reviewTab" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" id="details-tab" data-toggle="tab" href="#details" role="tab">Product Details</a>
                    </li>
                  </ul>
                  <div className="tab-content" id="reviewTabContent">
                    <div className="tab-pane fade show active" id="details" role="tabpanel" aria-labelledby="details-tab">
                      <p className="tab-product-details">This dazzling bar necklace crafted in 14k e gold exhibits surreal charm. It features round shape necklaces</p>
                    </div>
                  </div>
                </div>
{/* 
                <div className="more-information-wrap">
                  <h4 className="heading-with-border">More Information</h4>
                  <hr></hr>
                  <table className="more-info-table">
                    <tbody>
                      <tr>
                        <th>Necklace Type</th>
                        <td>Pendant</td>
                      </tr>
                    </tbody>
                  </table>
                </div> */}

               
               {/* {localStorage.getItem('user') ? */}
              
               <div className="review-information-wrap my-5">
                  <h4 className="heading-with-border">Reviews</h4>
                  <hr></hr>
                  <div className="tab-review-heading">
                    <h3>YOU'RE REVIEWING:</h3>
                    <h4>{value.name}</h4>
                  </div>
                </div>
                {/* :""}
       {localStorage.getItem('user') ? */}
        <Formik initialValues={initialState} validationSchema={ReviewSchema} onSubmit={(values)=>{dispatch(useraction.AddReviewRequest(values))}} >
          {({ touched, errors, values,setFieldValue}) => {
        return (
          <Form>

                <div className="review-form-wrap mb-5">
                  <div className="row">
                    <div className="col-lg-5">
                     
                        <div className="form-group">
                          <label className="label-txt" htmlFor="nickname">Nickname <span style={{color:'red'}}>*</span> </label>
                          <Field
                      name="nickname"
                      type="nickname"
                      id="nickname"
                      values={values.nickname}
                      className={
                        "form-control" +
                        (errors.nickname && touched.nickname
                          ? " is-invalid"
                          : "")
                      }                   
                    />
                    <ErrorMessage
                      name="nickname"
                      component="div"
                      className="invalid-feedback"
                    />
                          {/* <input type="email" className="form-control" placeholder="" /> */}
                          {/* <span className="validation-txt">This is a required field.</span> */}
                        </div>
                        <div className="form-group">
                          <label className="label-txt" for="summary">Summary <span style={{color:'red'}}>*</span> </label>
                          <Field
                      name="summary"
                      type="text"
                      id="summary"
                      values={values.summary}
                      className={
                        "form-control" +
                        (errors.summary && touched.summary
                          ? " is-invalid"
                          : "")
                      }                    
                    />
                    <ErrorMessage
                      name="summary"
                      component="div"
                      className="invalid-feedback"
                    />
                          {/* <input type="email" className="form-control" placeholder="" /> */}
                          {/* <span className="validation-txt">This is a required field.</span> */}
                        </div>
                        <div className="form-group">
                          <label className="label-txt" for="review">Review</label>
                          <Field
                      name="review"
                      type="text"
                      id="review"
                      values={values.review}
                      className={
                        "form-control" +
                        (errors.review && touched.review
                          ? " is-invalid"
                          : "")
                      }                   
                    />
                    <ErrorMessage
                      name="review"
                      component="div"
                      className="invalid-feedback"
                    />
                          <textarea className="form-control" rows="3"></textarea>
                        </div>
                        <div className="submit-btn-wrap mt-5">
                          <button type="submit" className="btn btn-primary btn-black">Submit Review</button>
                        </div>
                      
                    </div>
                  </div>
                </div>
                </Form>
   )}}
           </Formik>
{/* : ""} */}
              </div>
            </div>
          </section>


        </>
        : ''}

      {/* <JewellryFooter /> */}
    </>


  )

}



export default Products