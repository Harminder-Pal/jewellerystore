import React from 'react';
import { useraction} from '../actions/action';
import { useDispatch } from 'react-redux'



const Payment= () =>{
  const dispatch = useDispatch();
  const placeorder = () => {
    const details = {
      "paymentMethod": {
          "method": "cashondelivery"
      }
  }
   
    dispatch(useraction.PaymentRequest(details))
  }

    return(
        <>
        <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Credit/Debit Card</label>
  </div>
  <div class="form-group form-check">
  <input type="checkbox" class="form-check-input" id="exampleCheck1" />
  <label class="form-check-label" for="exampleCheck1">Cash Money</label>
</div>
<div class="form-group">
    <label for="exampleInputEmail1">Apply Discount Code</label>
    <input type="discount" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter discount" />
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <button type="submit" class="btn btn-primary">Apply Discount</button>
  <div class="form-group">
    <label for="exampleInputEmail1">Apply Gift Card</label>
    <input type="giftcard" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter gift card" />
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <button type="submit" class="btn btn-primary">Apply Gift Card</button>
  <button onClick={placeorder} type="submit" class="btn btn-primary">Place order</button>
</>
    )
}

export default Payment