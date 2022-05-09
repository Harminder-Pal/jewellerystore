import React, { useEffect, useState } from 'react';
import { GusetUserServices } from '../services/guestServices';
import { ReactLoading } from 'react-loading';
import { useDispatch, useSelector } from 'react-redux';
import { useraction } from '../actions/action';
import { product } from '../services/productServices'


const CartBag = (props) => {


  // async function GuestUser() {
  //   const cart_id = JSON.parse(localStorage.getItem('cart_id'));
  //   const result = await GusetUserServices.GetProductFromCart(cart_id.cart_id);
  //   console.log(result.data);
  //   setvalue(result.data);
  // }
  const onhandle = () => {
    setshow(!show);
  }

  const onchangeshow = () =>{
    setshow(!show);
  }
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.getallitemsincart);
  // const [value, setvalue] = useState();
 const [show, setshow] = useState(false);
 const [Total, setTotal] = useState([]);

    async function subTotal(){
      let result;
      if(localStorage.getItem('cart_id')){
      const cart_id = JSON.parse(localStorage.getItem('cart_id'));
       result =  await product.subtotal(cart_id.id.id);
      }
      if(localStorage.getItem('user')){
        const user = JSON.parse(localStorage.getItem('user'))
        result = await product.subtotal(user.quote_id);

      }
      setTotal(result.data);
      console.log("minicartsubtotal",result.data);  
    }

 const [value, setvalue] = useState([]);
  useEffect(async () => {
    const cart_id = JSON.parse(localStorage.getItem('cart_id'))
    // const result = await GusetUserServices.GetProductFromCart(cart_id.cart_id);
    // setvalue(result.data);
    // console.log("minicart", result.data)
    if (localStorage.getItem('user') || localStorage.getItem('cart_id')) {
          dispatch(useraction.GetCartItemRequest());
        }
  }, [])


  // useEffect(() => {
  //   if (localStorage.getItem('user') || localStorage.getItem('cart_id')) {
  //     dispatch(useraction.GetCartItemRequest());
  //   }
  // }, [])

  // const DeleteProductCart = async (item_id) => {
  //   let quote_id;
  //   let product_details = {};
  //   if (localStorage.getItem('cart_id')) {
  //     const cart_id = JSON.parse(localStorage.getItem('cart_id'));
  //     quote_id = cart_id.id.id;
  //     product_details = { item_id, quote_id };
  //   }
  //   if (localStorage.getItem('user')) {
  //     const user = JSON.parse(localStorage.getItem('user'));
  //     quote_id = user.quote_id;
  //     product_details = { item_id, quote_id };
  //   }
  //   dispatch(useraction.RemoveFromCartRequest(product_details))

  // }
  const DeleteProductCart = async (item_id) =>{
    const cart_id = JSON.parse(localStorage.getItem('cart_id'));
    const quote_id = cart_id.id.id;
    console.log(item_id,"DeleteProductCart")
    const product_details = {item_id,quote_id};
    dispatch(useraction.RemoveFromCartRequest(product_details))
  }


  return (
  
    
    <div onClick={onchangeshow} className="cart">
      <div>
        <a className="position-relative">
          <i className="fa fa-bag-shopping"></i>
          <span className="cart-qty">0</span>
        </a>
      </div>
      {show === true ?
        <div className="cart-details-wrap">
          {value.length > 0 ?
            <>
              <div className="cart-close" onClick={onhandle}>
                <a onHide={props.onhandle}><i className="fa fa-times"></i></a>
              </div>
              <div className="cart-subtotal-out">
                <div className="cart-subtotal-inner">
                  <div className="cart-subtotal-txt">Cart Subtotal : <span className="strong-font">${value?.subTotal}</span></div>
                  <div className="cart-items-count"><span className="strong-font">11</span> Items in Cart</div>
                </div>
                <div className="checkout-btn-wrap">
                  <a href="/shipping" className="btn btn-primary btn-block">Go to Checkout</a>
                </div>
                
              </div>
              <div className="cart-scroll-wrap">
                {value.map((item, index) => (
                  <div key={index} className="cart-products-wrap">
                    <div className="cart-product-img"><a href={'product/'+item.sku}><img src={item.extension_attributes.image_url} className="img-fluid" /></a></div>
                    <div className="cart-product-desc">
                      <div className="cart-product-name"><a href={'product/'+item.sku}>{item.name}</a></div>
                      <div className="cart-product-price">${item.price}</div>
                      <div className="cart-quantity-edit">
                        <div className="cart-qty-counter">Qty<input defaultValue={item.qty} type="number"  /></div>
                        <div className="cart-edit-delete">
                          <a onClick={()=>{DeleteProductCart(item.item_id)}}><i className="fa fa-times"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="view-edit-wrap">
                <a href="/cartDetails" className="btn btn-primary btn-block">view and edit cart</a>
              </div>
            </>
            :
            <>
              <div className="cart-close" onClick={onhandle}>
                <a href="#"><i className="fa fa-times"></i></a>
              </div>
              <div className="cart-subtotal-out">
                <p>You have no items in your shopping cart.</p>
              </div>

            </>
          }
        </div>
        : ''}

    </div>




  )
}

export default CartBag

{/* // <div className="cart">
    //   <div>
    //     <a onClick={onhandle} className="position-relative">
    //       <i className="fa fa-bag-shopping"></i>
    //       <span className="cart-qty">{selector?.products?.length === undefined ? "0" : selector?.products?.length}</span>
    //     </a>
    //   </div>
    //   {show===true ?
    //     <div className="cart-details-wrap">
    //       {selector?.products?.length > 0 ?
    //         <>
    //           <div className="cart-close" onClick={onhandle}>
    //             <a href="#"><i className="fa fa-times"></i></a>
    //           </div>
    //           <div className="cart-subtotal-out">
    //             <div className="cart-subtotal-inner">
    //               <div className="cart-subtotal-txt">Cart Subtotal : <span className="strong-font">${selector?.Subtotal}</span></div>
    //               <div className="cart-items-count"><span className="strong-font">{selector?.length}</span> Items in Cart</div>
    //             </div>
    //             <div className="checkout-btn-wrap d-grid">
    //               <a href="/shipping" className="btn btn-primary btn-block">Go to Checkout</a>
    //             </div>

    //           </div>
    //           <div className="cart-scroll-wrap">
    //             {selector?.products?.map((item, index) => (
    //               <div key ={index} className="cart-products-wrap">
    //                 <div className="cart-product-img"><a href={'/product/' + item.sku}><img src={item.extension_attributes.image_url} className="img-fluid" /></a></div>
    //                 <div className="cart-product-desc">
    //                   <div className="cart-product-name"><a href={"/product/" + item.sku}>{item.name}</a></div>
    //                   <div className="cart-product-price">${item.price}</div>
    //                   <div className="cart-quantity-edit">
    //                     <div className="cart-qty-counter">Qty<input defaultValue={item.qty} type="number" placeholder="1" /></div>
    //                     <div className="cart-edit-delete">
    //                       <a href="#"><i className="fa fa-pencil-alt"></i></a>
    //                       <a onClick={() => { DeleteProductCart(item.item_id) }}><i className="fa fa-times"></i></a>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             ))}
    //           </div>
    //           <div className="view-edit-wrap d-grid">
    //             <a href="/cartDetails" className="btn btn-primary btn-block">view and edit cart</a>
    //           </div>
    //         </>
    //         :
    //         <>
    //           <div className="cart-close" onClick={onhandle}>
    //             <a href="#"><i className="fa fa-times"></i></a>
    //           </div>
    //           <div className="cart-subtotal-out">
    //             <p>You have no items in your shopping cart.</p>
    //           </div>

    //         </>
    //       }
    //     </div>
    //     : ''}

    // </div> */}

      