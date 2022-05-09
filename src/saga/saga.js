import { useraction } from "../actions/action";

import { product } from '../services/productServices'

import { takeEvery, call, put } from 'redux-saga/effects'

import request from "../services/http_axios";

import {Notification} from '../UI/notification'







function* register(user) {

    const customer = {

        "customer": {

            "email": user.payload.email,

            "firstname": user.payload.firstname,

            "lastname": user.payload.lastname,

            "store_id": 3

        },

        "password": user.payload.password



    }
    const result = yield call(() => { 
        return request('rest/all/V1/customers', customer, "post", "", "jnztsl452zn753eq0znr6bxzmnupvdu9");
     })

        if(result.status===200){

            yield put(useraction.Signupsuccess(result))

            Notification('success','Registered Successfully')
        }

   

        else {

            yield put(useraction.Signupfail(result))

            Notification('warning','There is some problem')

        }

    console.log(user)

    console.log(JSON.stringify(customer))

    

    




}
export function* fetchapi() {

    yield takeEvery('signuprequest', register)

    yield takeEvery('loginrequest', login)

    yield takeEvery('addtocartrequest', AddToCart)

    yield takeEvery('removefromcartrequest', DeleteFromCart)

    yield takeEvery('addtowishlistrequest', AddToWishList)

    yield takeEvery('forgetpasswordrequest',forgetPassword)

    yield takeEvery('resetpasswordrequest', resetPassword)

    yield takeEvery('addshippingrequest',shipping)

    yield takeEvery('paymentrequest',placeorder)

    yield takeEvery('getcartitemrequest', GetCartItems)
}



//login



function* login(use) {

   



        const result1 = yield call(() => { return loginapi(use) })
        console.log(use);
        console.log(result1);

        if(result1.status===200){
            
       
        

        const details = yield call(() => {
            
             return product.userdetailApi(result1.data) });
             const quoteuser= yield call(()=>{
                return product.getquote_id(result1.data)
            })
            console.log(quoteuser);
            console.log("logindetails",details);
              const token = result1.data
              const userdetails = JSON.stringify(details.data); 
              const qouteid = JSON.stringify(quoteuser.data);
              const user = { token, userdetails , qouteid }; 
              localStorage.setItem('user', JSON.stringify(user));




        console.log(result1)
        yield put(useraction.LoginSuccess(result1))
        Notification('success',' Logged In successfully')
        }
        else{
    

    

        yield put(useraction.Loginfail(result1))
        Notification('warning','There is some problem')
        }
  

}
function loginapi(user) {

    const customer = {



        "username": user.payload.username,

        "password": user.payload.password



    }

    console.log(user)

    console.log(JSON.stringify(customer))

    

    return  request('jewellery_store_view/rest/V1/integration/customer/token',JSON.stringify(customer), "post", " ", "jnztsl452zn753eq0znr6bxzmnupvdu9" )




}

function* AddToCart(product_details) {
   

    const result = yield call(() => {
        return product.AddToCart(product_details.payload)
    })
    console.log(result)
    console.log(product_details)
    if (result.status === 200) {
        yield put(useraction.AddToCartsuccess(result.data))
        Notification('success','Added successfully')
    }

    else {
        yield put(useraction.AddToCartfail(result.data))
        Notification('warning','There is some problem')
    }
}

// Remove items from cart

function* DeleteFromCart(productdetails) {
    const { payload } = productdetails;
    console.log(payload);
    const result = yield call(() => {
        return product.DeleteProductFromCart(payload.item_id, payload.quote_id);
    });
    console.log(result);
}

//add to wishlist

function* AddToWishList(productdetails) {
    const user = JSON.parse(localStorage.getItem("user"));
    
    if (user && user.token && user.userdetails) {
        const { id } = JSON.parse(user.userdetails);
        const Customer_id = {
            customerId: id,
        };
        const result = yield call(() => {
            return product.AddToWishList(productdetails.payload, Customer_id);
        });
        if (result.status === 200) {
            yield put(useraction.AddToWishListSuccess(result.data[0].message));
            Notification('success','Added to wishlist successfully')
        } else {
            yield put(useraction.AddToWishListfail(result.data[0].message));
            Notification('warning','There is some problem')
        }
    } else {
        yield put(useraction.AddToWishListfail("Please Login First"));
        Notification('warning','Please login first')
    }
}

// forget password

function* forgetPassword(payload) {
    const details = {
       
            "email": payload.payload,
            "template":"email_reset"
           
    }
    const result = yield call(()=>{
        return product.forgetpassword(details)
    })
    console.log(payload);
    console.log(payload.payload);
    console.log(result);
}

function* resetPassword(payload) {
    const details = {
        "email": payload.payload.email,
        "resetToken": payload.payload.resetToken,
        "newPassword": payload.payload.newPassword
    }
    const result = yield call(()=>{
        return product.resetpassword(details)
    })
    console.log(payload);
    console.log(payload.payload);
    console.log(result);
}

function* shipping(payload){
    if(localStorage.getItem('cart_id')){
        const cart_id = JSON.parse(localStorage.getItem('cart_id'))

        const result = yield call(()=>{ 
            console.log(payload)
            return  product.shippingapi(cart_id.cart_id, payload.payload)
            

            
        })
        if(result.status ==="200"){
            console.log(result)
        }
        else{
            console.log(result)
        }
    }
}

function* placeorder(payload){
    if(localStorage.getItem('user')){
        const user = JSON.parse(localStorage.getItem('user'))
        const result = yield call(()=> {
            product.orderPlacement(user.qouteid,payload.payload);
            
        })
        console.log("user",user);
        console.log("palceodrder",result);
    }
    if(localStorage.getItem('cart_id')){
        const cart_id = JSON.parse(localStorage.getItem('cart_id'))
        const result = yield call(()=>{
            product.guestorderplace(cart_id.cart_id, payload.payload)
        })
        console.log("guestorderplace", result);
    }
    
}

// function*getallitemsincart(){

// }

function* GetCartItems(){
    const result = yield call (()=>{ return  product.GetCartItem()});
    console.log(result);
    if(result.status === 200){
        console.log("hello")
      console.log(result, "getcartitems");
      if(localStorage.getItem('user')){
      yield put(useraction.GetCartItemsuccess(result.data.items))
      }
      if(localStorage.getItem('cart_id')){
        yield put(useraction.GetCartItemsuccess(result.data))
      }
    }
    else{
      yield put(useraction.GetCartItemfail(result.data));
    }
  
  }