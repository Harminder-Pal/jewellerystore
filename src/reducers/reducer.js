import {combineReducers} from 'redux'

import {signup,login} from './user'
import {addtocart, removefromcart, getallitemsincart} from './cart'
import {WishListProcess} from './wishlist'
import {forgetpassword, resetpassword} from './password'
import { addshipping } from './shipping'
import { payment } from './payments'
import { addreview, deletereview } from './review'
import  {alert} from './alert'
import { CartProcess } from './cart'



const rootReducer=combineReducers(
    {
    signup,
    login, 
    addtocart, 
    alert,
    removefromcart, 
    WishListProcess,
    forgetpassword,
    resetpassword, 
    addshipping, 
    payment, 
    addreview, 
    deletereview,
    getallitemsincart,
    CartProcess
})



export default rootReducer;