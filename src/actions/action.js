//Signup 
const SignupRequest = (user) => {
    return {
        type: 'signuprequest',
        payload: user
    }
}

const Signupsuccess = (success) => {
    return {
        type: 'signupsuccess',
        payload: success
    }
}

const Signupfail = (error) => {
    return {
        type: 'signupfail',
        payload: error
    }
}

//Login action
const LoginRequest = (user) => {
    return {
        type: 'loginrequest',
        payload: user
    }
}

const LoginSuccess = (success) => {
    return {
        type: 'loginsuccess',
        payload: success
    }
}

const Loginfail = (error) => {
    return {
        type: 'loginfail',
        payload: error
    }
}

//signout
const SignOut = ()=>{
    return {
    type: 'SignOut',
    }
  }

//add to cart

const AddToCartRequest = (user) => {
    return {
        type: 'addtocartrequest',
        payload: user
    }
}

const AddToCartsuccess = (success) => {
    return {
        type: 'addtocartsuccess',
        payload: success
    }
}

const AddToCartfail = (error) => {
    return {
        type: 'addtocartfail',
        payload: error
    }
}

//Remove from cart

const RemoveFromCartRequest = (user) => {
    return {
        type: 'removefromcartrequest',
        payload: user
    }
}

const RemoveFromCartsuccess = (success) => {
    return {
        type: 'removefromcartsuccess',
        payload: success
    }
}

const RemoveToCartfail = (error) => {
    return {
        type: 'removefromcartfail',
        payload: error
    }
}


//add to wishlist

const AddToWishListRequest = (user) => {
    return {
        type: 'addtowishlistrequest',
        payload: user
    }
}

const AddToWishListSuccess = (success) => {
    return {
        type: 'addtowishlistsuccess',
        payload: success
    }
}

const AddToWishListfail = (error) => {
    return {
        type: 'addtowishlistfail',
        payload: error
    }
}

//Remove from wishlist

const RemoveFromWishListRequest = (user) => {
    return {
        type: 'removefromwishlistrequest',
        payload: user
    }
}

const RemoveFromWishListsuccess = (success) => {
    return {
        type: 'removefromwishlistsuccess',
        payload: success
    }
}

const RemoveToWishListfail = (error) => {
    return {
        type: 'removefromwishlistfail',
        payload: error
    }
}

//forget password

const ForgetPasswordRequest = (user) => {
    return {
        type: 'forgetpasswordrequest',
        payload: user
    }
}


const ForgetPasswordsuccess = (success) => {
    return {
        type: 'forgetpasswordsuccess',
        payload: success
    }
}

const ForgetPasswordfail = (error) => {
    return {
        type: 'forgetpasswordfail',
        payload: error
    }
}

//Reset password

const ResetPasswordRequest = (user) => {
    return {
        type: 'resetpasswordrequest',
        payload: user
    }
}


const ResetPasswordsuccess = (success) => {
    return {
        type: 'resetpasswordsuccess',
        payload: success
    }
}

const ResetPasswordfail = (error) => {
    return {
        type: 'resetpasswordfail',
        payload: error
    }
}

// Add Shipping Method

function getdetailsvalue(detail) {

    const details ={  "addressInformation": {
        "shipping_address": {
         "region": "New York",
         "region_id": 43,
         "region_code": "NY",
         "country_id": "US",
         "street": [
        "123 Oak Ave"
      ],
      "postcode": "10577",
      "city": "Purchase",
      "firstname": "chetna",
      "lastname": "gupta",
      "email": "chetna.ntz@netsmartz.net",
      "telephone": "512-555-1111"
    },
    "billing_address": {
        "region": "New York",
      "region_id": 43,
      "region_code": "NY",
      "country_id": "US",
      "street": [
        "123 Oak Ave"
      ],
      "postcode": "10577",
      "city": "Purchase",
      "firstname": detail.firstname,
      "lastname": detail.lastname,
      "email": detail.email,
      "telephone": detail.telephone
    },
    "shipping_carrier_code": "flatrate",
    "shipping_method_code": "flatrate"
    }
  }
  return details
}

const AddShippingRequest = (user) => {
    return {
        type: 'addshippingrequest',
        payload: getdetailsvalue(user)
    }
}


const AddShippingsuccess = (success) => {
    return {
        type: 'addshippingsuccess',
        payload: success
    }
}

const AddShippingfail = (error) => {
    return {
        type: 'addshippingfail',
        payload: error
    }
}

//Payment 
const PaymentRequest = (user) => {
    return {
        type: 'paymentrequest',
        payload: user
    }
}


const Paymentsuccess = (success) => {
    return {
        type: 'paymentsuccess',
        payload: success
    }
}

const Paymentfail = (error) => {
    return {
        type: 'paymentfail',
        payload: error
    }
}

//placeorder
const PlaceOrderRequest = (user) => {
    return {
        type: 'placdeorderrequest',
        payload: user
    }
}


const PlaceOrdersuccess = (success) => {
    return {
        type: 'placeordersuccess',
        payload: success
    }
}

const PlaceOrderfail = (error) => {
    return {
        type: 'placeorderfail',
        payload: error
    }
}

//add review
const AddReviewRequest = (user) => {
    return {
        type: 'addreviewrequest',
        payload: user
    }
}


const AddReviewsuccess = (success) => {
    return {
        type: 'addreviewsuccess',
        payload: success
    }
}

const AddReviewfail = (error) => {
    return {
        type: 'addreviewfail',
        payload: error
    }
}

//delete review
const DeleteReviewRequest = (user) => {
    return {
        type: 'deletereviewrequest',
        payload: user
    }
}


const DeleteReviewsuccess = (success) => {
    return {
        type: 'deletereviewsuccess',
        payload: success
    }
}

const DeleteReviewfail = (error) => {
    return {
        type: 'deletereviewfail',
        payload: error
    }
}


//getcartitem
const GetCartItemRequest = () => {
    return {
        type: 'getcartitemrequest'
    }
}


const GetCartItemsuccess = (Items) => {
    return {
        type: 'getcartitemsuccess',
        payload: Items
    }
}

const GetCartItemfail = (error) => {
    return {
        type: 'getcartitemfail',
        payload: error
    }
}

//get all items in cart
const GetAllItemsInCartRequest = () => {
    return {
        type: 'getallitemsincartrequest'
    }
}


const GetAllItemsInCartsuccess = (Items) => {
    return {
        type: 'getallitemsincartsuccess',
        payload: Items
    }
}

const GetAllItemsInCartfail = (error) => {
    return {
        type: 'getallitemsincartfail',
        payload: error
    }
}

//get wishlist items in cart
const GetWishlistItemsRequest = () => {
    return {
        type: 'getwishlistitemrequest'
    }
}


const GetWishlistItemssuccess = (Items) => {
    return {
        type: 'getwishlistitemsuccess',
        payload: Items
    }
}

const GetWishlistItemsfail = (error) => {
    return {
        type: 'getwishlistitemfail',
        payload: error
    }
}

//alert

const success =(message)=>{
    return{
        type: 'success',
        message
    }
}

const error =(message)=>{
    return{
        type: 'error',
        message
    }
}

const clear =(message)=>{
    return{
        type: 'clear',
       
    }
}

export const useraction={
    SignupRequest,
    Signupfail,
    Signupsuccess,
    LoginRequest,
    Loginfail,
    LoginSuccess,
    SignOut,
    AddToCartRequest,
    AddToCartfail,
    AddToCartsuccess,
    RemoveFromCartRequest,
    RemoveFromCartsuccess,
    RemoveToCartfail,
    AddToWishListRequest,
    AddToWishListSuccess,
    AddToWishListfail,
    RemoveFromWishListRequest,
    RemoveFromWishListsuccess,
    RemoveToWishListfail,
    ForgetPasswordRequest,
    ForgetPasswordsuccess,
    ForgetPasswordfail,
    ResetPasswordRequest,
    ResetPasswordsuccess,
    ResetPasswordfail,
    AddShippingRequest,
    AddShippingsuccess,
    AddShippingfail,
    PaymentRequest,
    Paymentsuccess,
    Paymentfail,
    AddReviewRequest,
    AddReviewsuccess,
    AddReviewfail,
    DeleteReviewRequest,
    DeleteReviewsuccess,
    DeleteReviewfail,
    GetCartItemRequest,
    GetCartItemsuccess,
    GetCartItemfail,
    PlaceOrderRequest,
    PlaceOrdersuccess,
    PlaceOrderfail,
    GetAllItemsInCartRequest,
    GetAllItemsInCartsuccess,
    GetAllItemsInCartfail,
    GetWishlistItemsRequest,
    GetWishlistItemssuccess,
    GetWishlistItemsfail,
    success,
    error,
    clear
}


