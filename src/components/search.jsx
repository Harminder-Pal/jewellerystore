import React, { useState, useEffect } from 'react'
import { product } from '../services/productServices';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useraction } from '../actions/action';
import ReactLoading from 'react-loading';




const Search = () => {

  const dispatch = useDispatch();

  const [value, setvalue] = useState();
  const [searchresult ,setresult] = useState();
  const [search,setsearch] = useState(' ');
  const [show, setshow] = useState();
  const [loading,setloading] = useState(false);

  const onSearch = async (e) => {
    e.preventDefault()
    const result = await product.searchApi(value)
    console.log(result)
  }

  const onChangeHandle = async (e)=>{
    setsearch(e.target.value);
    // if(e.target.value.split('').length > 2){
    //   console.log(e.target.value);
    //  setloading(true);
    const result = await product.searchApi(search);
    console.log(result);
    setresult(result.data.items);
//     setresult(result?.data);
//  if(searchresult?.items?.length > 0){
//   setloading(false);
//  }
//  setloading(false);
// }
// if(e.target.value.split('').length <= 2){
//   setresult('');
//   setloading(false)
// }
  }
  useEffect(()=>{
    if(localStorage.getItem('user') || localStorage.getItem('cart_id')){
      dispatch(useraction.GetCartItemRequest());
    }
  },[])
  const onhandle = () =>{
    setshow(!show);
  }
  const history= useHistory();

  const onKeyPressEnter = (e) =>{
    var code = e.keyCode || e.which;
    if(code ===13){
      e.preventDefault();
      history.push(`/catalogsearch/result?q=${search}`);
    }
  }

  const onSubmit = async(e) =>{
    e.preventDefault();
    if(search === " "){
      Notification('info',"Search field cannot be empty")
    }else{
    history.push(`/catalogsearch/result?q=${search}`);
    }
  }




  return (

    <>
    

        <div className="search-bar">
          <form className="input-group">
            <input type="text" className="form-control" onKeyPress={onKeyPressEnter} onChange={onChangeHandle}  placeholder="Search..." />
            <div className="input-group-append">
              <button className="btn btn-secondary" type="button" onClick={onSubmit}>
                
                <i className="fa fa-search"></i>
              </button>
            </div>
          </form>
          <div className="search-results-wrap">

            {searchresult?.length > 0 ?
              <>
                {searchresult?.map((item, index) => (
                  <Link to={"/product/" +item.sku} key={index} className="result-ridect">
                    <div className="result-img">
                      <img src={item.custom_attributes[0].value} className="img-fluid" />
                    </div>
                    <div className="result-desc">
                      <div className="result-desc-name">{item.name}</div>
                      <div className="result-desc-price">Price <span>${item.price}</span></div>
                      <div className="result-desc-txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo...</div>
                    </div>
                  </Link>
                ))}
              </>
              : ''}
          </div>
        </div>
    
     

    



</>

    )

}



export default Search