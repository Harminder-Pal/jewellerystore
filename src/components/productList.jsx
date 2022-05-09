import React, { useEffect, useState } from 'react'
import { product } from '../services/productServices';
import {useDispatch,useSelector} from 'react-redux';
import { useraction } from '../actions/action'
import {Link, useParams, useLocation} from 'react-router-dom';
import Pagination from '../UI/Pagination';
import 'antd/dist/antd.css';
import {Spin} from 'antd';

export default function PlpPage(props) {
  const dispatch = useDispatch();
  const val1= useParams();
  console.log('plp1',val1)
  const selector = useSelector((state)=>state);
  console.log('plp2',props)
 const api = props.location?.pathname.substring(10).replace(' ','-');
const val = props.location?.pathname.substring(10).split('/')

// const location = useLocation();
// const val = location.pathname.substring(14).split('/')
// console.log(val,"PRoductlistval");
// const cat = location.pathname.substring(0).split('/')

// const category_id = cat[2];
// console.log(category_id,"Productlistcat");

    const initialState = {
        PageSize:12,  
    }
    const SortBy = {
      position:'',
      sort:'position',
    }
    const initialvalue = {
      gender:'',
      material:'',
      price:'',
      jewellery_type:'',
    }
    const pricerange = {
     from:'',
     to:'',
   }
   const filtername = {
     price:'',
     gender:'',
     material:'',
     jewellery_type:''
   }
    const [totalcount,settotalcount] = useState();
   const  [sidebarvalue,setsidebarvalue] = useState(initialvalue);
    const [state,setstate] = useState(initialState);
    const [sortby,setsortby] = useState(SortBy);
    const [ value,setvalue] = useState([]);
    const [sidebar,setsidebar] = useState([]);
    const [price,setprice] = useState(pricerange)
    const [sortname,setsortname] = useState(filtername);
    const [CurrentPage, setCurrentPage] = useState(1);
    const [loading,setloading] = useState(true);
    const [centerloading,setcenterloading] = useState(false);

    const clearfiltersingle=(name)=>{
     setsortname({...sortname,[name]:''})
     if(name==="price"){
      setprice({...price,from:'',to:''});
     }
     else{
     setsidebarvalue({...sidebarvalue,[name]:''})
     }
    }
    
    const AddToCart = async (sku,item) => {
      const user_id = localStorage.getItem('card_id');
      let product_details = {
        sku_name: sku,
        qty: 1,
        quote_id: user_id,
      }
      dispatch(useraction.AddToCartRequest(product_details,item));
    }

    
   function onHandleBrand(e,index){
     e.preventDefault();
     setcasstoggle(index);
   }

  
   
    useEffect(()=>{
      reload();
    },[CurrentPage,state.PageSize,sortby,sidebarvalue,price])

    const onHandleShowItem =(e)=>{
      setstate({...state,PageSize:e.target.value});
    }
    const onClickHandleFilter = (name,value,label)=>{
      if(name === "price"){
        const range = value.split("_");
        console.log(range);
       setprice({...price,from:range[0],to:range[1]})
      }
      setsortname({...sortname,[name]:label});
      setsidebarvalue({...sidebarvalue,[name]:value})
      console.log(sidebarvalue);
    }
    const onhandleSort =(e)=> {
       setsortby({...sortby,sort:e.target.value})
    }
    const onClearFilter = ()=>{
      setsortname('');
      setsidebarvalue({...sidebarvalue,gender:'',material:'',jewellery_type:''})
      setprice({...price,from:'',to:''});
    }
    async function reload(){
      setcenterloading(true)
     const category_id = await product.GetCategory_Id(api);
     console.log('plp',api);
     console.log(category_id);
      const result = await product.PlpPageApi(category_id.data.items[0].id,state.PageSize,CurrentPage,sortby,sidebarvalue,price)
      console.log(result,"plpdata1");
      setvalue(result?.data[0]?.data?.products.items)
     settotalcount(result?.data[0]?.data.products.total_count);
     setsidebar(result.data[0].data.products.aggregations);
     setTimeout(()=> setloading(false),1000);
     setTimeout(()=> setcenterloading(false),1000);
    }
    const AddToWishList = (sku_name)=>{
      dispatch(useraction.AddToWishListRequest(sku_name))
    }
    
  const [classtoggle,setcasstoggle] = useState()
    function toggleclass(i){
      let selected;
       selected = classtoggle === i ;
    return selected ? 'collapse show' : 'collapse'   
    }

    function togglearrowclass(i){
      let selected;
       selected = classtoggle === i ;
    return selected ?'mb-0 collapsed' :'mb-0';
    }
    
  return (
    <>
    {/* <Header /> */}
     {loading === false ? 
    <>
    {value.length  > 0 ?
    <>
    <section className="breadcrumb-section">
      <div className="custom-breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">Home</Link></li>
          {val?.map((item,index)=>{
            if(index === val.length-1){
              return (
               <li key={index} className="breadcrumb-item">{item}</li>
              )
            }
            else{
            return (
             <li key={index} className="breadcrumb-item"><Link to="/">{item}</Link></li>
            )
            }
           })}
        </ol>
      </div>
    </section>
<section className="plp-content">
  <div className="container-fluid">
    <div className="row">
    <div className="col-md-3">
          <div className="mobile-filter-btn">
            <i className="fas fa-filter"></i>
          </div>
        <div className="plp-filter">
          <div className="filter-heading-mobile">
            <div className="d-flex justify-content-between">
                <div className="mob-heading-text">Shopping Options</div>
                <div className="mob-heading-close-btn"><i className="far fa-window-close"></i></div>
            </div>
          </div>
          <div id="accordion">
            <div className="filter-title border d-flex justify-content-between p-3 align-items-baseline">
              <h2 className="text-uppercase">Filters</h2>
              <a  onClick={onClearFilter} className="text-uppercase small">Clear All</a>
            </div>
           {sidebarvalue.gender!=="" || sidebarvalue.material!=="" || sidebarvalue.jewellery_type!=="" || price.from!=="" ?
            <div className="selected-filter p-3 border-left border-right">
            {sortname.gender ? <div className="selected-creteria" onClick={()=>{clearfiltersingle('gender')}} > {sortname.gender}  </div> : ""}
            { sortname?.material ? <div className="selected-creteria" onClick={()=>{clearfiltersingle('material')}} > {sortname.material}  </div> : ""}
            { sortname?.jewellery_type ? <div className="selected-creteria" onClick={()=>{clearfiltersingle('jewellery_type')}}  > {sortname.jewellery_type}  </div> : ""}
            { sortname?.price ? <div className="selected-creteria" onClick={()=>{clearfiltersingle('price')}}  > {sortname.price}  </div> : ""}
            </div>
: ""}
            {sidebar?.map((item,index)=>(
            <>
             { item.options.length > 0 ?  
            <div key={index} onClick={(e)=>{onHandleBrand(e,index);}} className="card">
              <div className="card-header">
                <h5  className={togglearrowclass(index)} data-toggle="collapse" data-target="#Brands">
                {item.label}
                </h5>
              </div>              
              <div id="Brands" className={toggleclass(index)}>
                <div className="card-body">
                  <ul>
                  {item?.options?.map((items,index)=>(
                    <li key={index} onClick={()=>{ onClickHandleFilter(item.attribute_code,items.value,items.label)}} ><a href="#">{items.label}  <span className="filter-qty">{items.count}</span> </a></li>
                    ))}  
                  </ul>
                </div>
              </div>
            </div>
:''}         
</>
            ))}
          </div>
        </div>
      </div>
      <div className="col-md-9">
        <div className="sorting-bar">
          <div className="sortby-left">
            Sort By
            <select onChange={onhandleSort} defaultValue={SortBy.position} className="sorter-options">
                <option value="position" >Position</option>
                <option value="name"  >Product Name</option>
                <option value="price" >Price</option>
            </select>
            <a href="#"><i className="fa fas fa-arrow-up"></i></a>
          </div>
          <div className="sortby-out">
            Show
            <select onChange={onHandleShowItem}  defaultValue={state.PageSize} className="sorter-options">
                <option value="12"  >12</option>
                <option value="24">24</option>
                <option value="36">36</option>
            </select>
          </div>
        </div>
       {
       centerloading === true ?  
       <div style={{textAlign:'center',position:'relative',top:"50%"}}  > <Spin size='large' /> </div> 
      :  <div className="product-listing">
        {value?.map((item,index)=>(  
          <div key={index} className="product-info">
              <div className="product-image">
                <Link to={`/product/${item.sku}`}><img src={item.image.url} className="img-fluid"/></Link>
              </div>
              <div className="star-rating-bg">
                <div className="star-rating">
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                </div>
              </div>
              <div className="product-title">
                <Link  to={`/product/${item.sku}`}>
                  {item.name}
                  </Link>
              </div>
              <div className="product-price">${item.price_range.minimum_price.regular_price.value}</div>
              <div className="add-wishlist-out">
                <div className="add-to-cart-outer">
                    <button onClick={()=>{AddToCart(item.sku,item.id)}} className="add-to-cart-btn"><i className="fa fa-solid fa-cart-shopping"></i>{selector?.CartProcess?.loading === true && selector?.CartProcess?.index === item.id ? "LOADING..." : "Add to cart"}</button>
                </div>
                <div className="wishlist-out">
                    <a onClick={()=>{AddToWishList(item.sku)}} className="wishlist-icon"><i className="far fa-heart"></i></a>
                    <a href="#" className="compare-icon"><i className="fa fa-solid fa-signal"></i></a>
                </div>
              </div>
          </div>
        ))}
        </div>
        }
      </div>
    </div>
    <div className="bottom-pagination-wrapper mb-5">
    <div className="sortby-out">
            Show
            <select onChange={onHandleShowItem} defaultValue={state.PageSize}  className="sorter-options">
                <option value="12"  >12</option>
                <option value="24">24</option>
                <option value="36">36</option>
            </select>
          </div>
      <div>
        {value?.length > 0 ?
        <Pagination  currentPage={CurrentPage}  totalCount={totalcount} pageSize={state.PageSize} onPageChange={page => setCurrentPage(page)} />
:''}
      </div>
    </div>
  </div>
</section>
</>
 :<div className="alert alert-warning" role="alert">
 No Product is Avaliable
</div>}
    </>
    : 
   
   loading === true ? <div style={{textAlign:'center', position:"fixed",  top:"calc(100vh - 50%)", left:0,right:0,}} > <Spin size='large' /> </div>
   : ''}
   {/* <JewellryFooter /> */}
    </>
  )
}


