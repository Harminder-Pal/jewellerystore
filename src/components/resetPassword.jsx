import React, { useEffect, useState } from 'react';
import { useDispatch} from 'react-redux'
import { useraction} from '../actions/action'
import { product } from '../services/productServices';

const ResetPassword = () => {

    
    
    const queryparams = new URLSearchParams(window.location.search)
    const token = queryparams.get("token")
    const id = queryparams.get("id")
     console.log(token);
     console.log(id);
    const dispatch = useDispatch();

    const initialState = {
        email: '',
        resetToken: token,
        newPassword: '',
      }
    const [details, setDetails] = useState(initialState);
    
    const onchange= (e) =>{
       setDetails({...details, newPassword: e.target.value})
    }
    const onsubmit = (e) => {
        e.preventDefault();
        console.log(details)
        dispatch(useraction.ResetPasswordRequest(details));
        
    }
    
    useEffect(()=>{
    getdetails(id);
    },[])
    async function getdetails (id){
     const result = await product.customerdetailbyid(id);
     console.log(result);
     setDetails({...details,email:result.data.email});
    }
    
    return(
    <>
        <form>
            <div className="form-group">
                <label for="exampleInputEmail1">New Password</label>
                <input type="email" onChange={onchange}className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>

            <div className="form-group">
                <label for="exampleInputEmail1">Confirm Password</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>
          
            <button onClick={onsubmit} type="submit" className="btn btn-primary">Submit</button>
        </form>
    </>
    )
}

export default ResetPassword