import React, { useState, useEffect } from 'react'
import { product } from '../services/productServices';
import { useraction } from '../actions/action';
import { useDispatch, useSelector} from 'react-redux';

const Wishlist_page = () => {
    const dispatch = useDispatch();
    const [value, setvalue] = useState();
  const selector = useSelector((state)=>state);
  console.log(selector);
    useEffect(()=>{
      GetWishList();
    },[])
    useEffect(async () => {
        const result = await product.wishlistItem();
        setvalue(result.data);
        console.log("wishlist page item", result.data)
    }, [])
    async function GetWishList(){
        if(localStorage.getItem('user')){
         dispatch(useraction.AddToWishListRequest());
        }
       }
       const AddToCart = async (sku) => {
         const user_id = localStorage.getItem('card_id');
         let product_details = {
           sku_name: sku,
           qty: 1,
           quote_id: user_id
         }
         dispatch(useraction.AddToCartRequest(product_details));
       }
       const RemoveWishList = (wishList_item_id)=>{
         dispatch(useraction.RemoveFromWishListRequest(wishList_item_id));
       }
    return (
        <div>
   
        <div className='container'>
          {selector?.WishListProcess?.wishlist?.map((item,index)=>(
        <div key={index}  className='row'>
                    <div className='col-4' ></div>
                    <div className='col-8'>
                        <div className='col'>
                          <img src={item.img_src} alt="img" /> 
                          </div>
                        <div className='col-12'>{item.name}</div><br/>
                        <div className='col-12'>${item.price}</div><br/>
                        <div className='col-12'> QTY : <input type='number' min="1" defaultValue={item.qty} /></div><br/>
                        <div className='row'>
                            <div className='col-2'>
                              <input className='w-100' placeholder='comment' type='text' /></div>
                            <div className='col-2'>
                              <button className='btn btn-dark' onClick={()=>{
                                AddToCart(item.sku)
                              }} >Add to cart</button></div>
                        </div><br/><br/>   
                         <div className='row'>
                            <div className='col-2'>
                              <button className='btn btn-dark'  >Edit</button>
                              </div>
                            <div className='col-2'><button className='btn btn-dark' onClick={()=>{RemoveWishList(item.wishlist_item_id)}} >Remove</button></div>
                        </div>
    
                    </div>
    
    
          
                </div>
          ))}      
        </div>
          </div>
    )
}

export default Wishlist_page