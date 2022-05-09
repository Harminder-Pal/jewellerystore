import request from './http_axios'
import {GusetUserServices} from './guestServices'
const token = "jnztsl452zn753eq0znr6bxzmnupvdu9"

export const product = {
   AddToCart, 
   bannerApi,
   blogApi,
   userdetailApi,
   PlpPageApi, 
   AddToWishList,
   wishlistItem, 
   navbarApi,
   featuredProductApi,
   happyCustomerApi, 
   salebannerApi,
   luxuryApi,  
   weddingApi, 
   productApi,
   searchApi, 
   giftsApi, 
   footerApi, 
   neckwearApi, 
   ourCollectionApi, 
   promisesApi, 
   DeleteProductFromCart,
   forgetpassword,
   resetpassword,
   customerdetailbyid,
   getquote_id,
   subtotal,
   shippingapi,
   orderPlacement,
   guestorderplace,
   SearchApi,
   SingleBlogStory,
   MostViewBlog,
   AboutUsApi,
   AddCartUser,
   GetCartItems,
   GetCartItem,
   ProductListApi,
   GetAllCountryApi,
   GetStatesByCountryApi,
   GetCartTotal,
   GetCategory_Id,
   AllOrders,
   signout,
   AddUserShippingAddress,
   NextProduct,
   PreviousProduct
};

function bannerApi()  {
    return request('/default/rest/all/V1/codilar/bannerslider/slider/loadById/1',"","get","",token);
}

function blogApi()  {
    return request('/jewellery_store_view/rest/V1/mpblog/post/list?storeId=3&searchCriteria[currentPage]=1',"","get","",token);
}

function navbarApi()  {
    return request('jewellery_store_view/rest/V1/categories',"","get","",token);
}

function featuredProductApi()  {
    return request('/rest/jewellery_store_view/V1/products/?searchCriteria[filter_groups][0][filters][0][field]=website_id&searchCriteria[filter_groups][0][filters][0][value]=2&searchCriteria[filter_groups][0][filters][0][condition_type]=eq&searchCriteria[filter_groups][0][filters][1][field]=is_featured&searchCriteria[filter_groups][0][filters][1][value]=1&searchCriteria[filter_groups][0][filters][1][condition_type]=eq&searchCriteria[sortOrders][0][field]=created_at&searchCriteria[currentPage]=1&searchCriteria[sortOrders][0][direction]=ASC&store_id=3&searchCriteria[pageSize]=30',"","get","",token);
}

function ourCollectionApi()  {
    return request('rest/V1/cmsBlock/search?searchCriteria[filterGroups][0][filters][0][field]=store_id&searchCriteria[filterGroups][0][filters][0][value]=3&searchCriteria[filterGroups][0][filters][0][condition_type]==&searchCriteria[filterGroups][1][filters][0][field]=identifier&searchCriteria[filterGroups][1][filters][0][value]=jewellery_our_collection&searchCriteria[filterGroups][1][filters][0][condition_type]==',"","get","",token);
}

function salebannerApi()  {
    return request('rest/V1/cmsBlock/search?searchCriteria[filterGroups][0][filters][0][field]=store_id&searchCriteria[filterGroups][0][filters][0][value]=3&searchCriteria[filterGroups][0][filters][0][condition_type]==&searchCriteria[filterGroups][1][filters][0][field]=identifier&searchCriteria[filterGroups][1][filters][0][value]=sale-image&searchCriteria[filterGroups][1][filters][0][condition_type]==',"","get","",token);
}

function weddingApi()  {
    return request('rest/V1/cmsBlock/search?searchCriteria[filterGroups][0][filters][0][field]=store_id&searchCriteria[filterGroups][0][filters][0][value]=3&searchCriteria[filterGroups][0][filters][0][condition_type]==&searchCriteria[filterGroups][1][filters][0][field]=identifier&searchCriteria[filterGroups][1][filters][0][value]=buy_rings&searchCriteria[filterGroups][1][filters][0][condition_type]==',"","get","",token);
}

function productApi(sku_name)  {
    return request(`jewellery_store_view/rest/V1/products/${sku_name}`,"","get","",token);
}

function giftsApi()  {
    return request('rest/V1/cmsBlock/search?searchCriteria[filterGroups][0][filters][0][field]=store_id&searchCriteria[filterGroups][0][filters][0][value]=3&searchCriteria[filterGroups][0][filters][0][condition_type]==&searchCriteria[filterGroups][1][filters][0][field]=identifier&searchCriteria[filterGroups][1][filters][0][value]=buy_gifts&searchCriteria[filterGroups][1][filters][0][condition_type]==',"","get","",token);
}

function footerApi()  {
    return request('rest/V1/cmsBlock/search?searchCriteria[filterGroups][0][filters][0][field]=store_id&searchCriteria[filterGroups][0][filters][0][value]=3&searchCriteria[filterGroups][0][filters][0][condition_type]==&searchCriteria[filterGroups][1][filters][0][field]=identifier&searchCriteria[filterGroups][1][filters][0][value]=jewellery_footer&searchCriteria[filterGroups][1][filters][0][condition_type]==',"","get","",token);
}

function neckwearApi()  {
    return request('rest/V1/cmsBlock/search?searchCriteria[filterGroups][0][filters][0][field]=store_id&searchCriteria[filterGroups][0][filters][0][value]=3&searchCriteria[filterGroups][0][filters][0][condition_type]==&searchCriteria[filterGroups][1][filters][0][field]=identifier&searchCriteria[filterGroups][1][filters][0][value]=buy_neck_wears&searchCriteria[filterGroups][1][filters][0][condition_type]==',"","get","",token);
}

function promisesApi()  {
    return request('rest/V1/cmsBlock/search?searchCriteria[filterGroups][0][filters][0][field]=store_id&searchCriteria[filterGroups][0][filters][0][value]=3&searchCriteria[filterGroups][0][filters][0][condition_type]==&searchCriteria[filterGroups][1][filters][0][field]=identifier&searchCriteria[filterGroups][1][filters][0][value]=our_promises&searchCriteria[filterGroups][1][filters][0][condition_type]==',"","get","",token);
}

function searchApi(value)  {
    return request(`rest/jewellery_store_view/V1/products/?searchCriteria[filter_groups][0][filters][0][field]=website_id&searchCriteria[filter_groups][0][filters][0][value]=2&searchCriteria[filter_groups][0][filters][0][condition_type]=eq&searchCriteria[filter_groups][1][filters][0][field]=name&searchCriteria[filter_groups][1][filters][0][value]=%${value}%&searchCriteria[filter_groups][1][filters][0][condition_type]=like&searchCriteria[currentPage]=1&searchCriteria[pageSize]=3&searchCriteria[sortOrders][0][field]=created_at&searchCriteria[sortOrders][0][direction]=DESC`,"","get","",token);
}

function SearchApi(value,pagesize,currentpage,SortBY,sidebar,price){
  let data = '{products(search:"'  + value +   '", filter:{ category_id:{ eq: \"5\" }, brand : { eq:"'+ sidebar.brand +'" }, colors: { eq:"'+ sidebar.colors +'" } , size : { eq:"'+ sidebar.size +'" }, price:{from: "'+ price.from +'", to: "'+ price.to +'" }} pageSize:' + parseInt(pagesize) +' ,currentPage: ' + parseInt(currentpage) +', sort: {' +  SortBY.sort + ': ASC } ){aggregations{attribute_code count label options{ count label value }}total_count page_info {page_size current_page} items { id name sku short_description { html } image { url } price_range { minimum_price { regular_price { value currency } final_price { value currency } fixed_product_taxes { label amount {value currency }}}maximum_price { discount { amount_off percent_off } fixed_product_taxes { label amount { value currency } } } } }}}';
    let query = {
      "query":data,
      "storeCode":"jewellery_store_view",
      "catId":"5"
}
return request('jewellery_store_view/rest/all/V1/product/filtersCollection',query,'post','',token);
}

function luxuryApi()  {
    return request('jewellery_store_view/rest/V1/products/?searchCriteria[filter_groups][0][filters][0][field]=category_id&searchCriteria[filter_groups][0][filters][0][value]=4&searchCriteria[filter_groups][0][filters][0][condition_type]=eq&fields=items[sku,name,id,price,custom_attributes]&searchCriteria[pageSize]=10&searchCriteria[sortOrders][0][field]=created_at& searchCriteria[sortOrders][0][direction]=ASC',"","get","",token);
}

function happyCustomerApi() {
    return request('default/rest/all/V1/vestestimonial/testimonial/list?searchCriteria%5BpageSize%5D=20'," ","get"," ",token );
}

// async function AddToCart(product_details) {
//     const cart_id = localStorage.getItem("cart_id");
//     if (cart_id) {
//       const cart_data = JSON.parse(cart_id);
//       console.log(product_details, cart_data.cart_id)
//       return await GusetUserServices.AddProductGuestCart(
//         product_details,
//         cart_data.cart_id
//       );
      
//     } else {
//       const cart_id = await GusetUserServices.GuestUserGenerateToken();
//       const user_id = await GusetUserServices.CreateCustomerGuest(cart_id.data);
//       localStorage.setItem(
//         "cart_id",
//         JSON.stringify({ cart_id: cart_id.data, id: user_id.data })
//       );
//       console.log(product_details)
//       return await GusetUserServices.AddProductGuestCart(
//         product_details,
//         cart_id.data
//       );
//     }
//   }

  async function AddToCart(product_details) {
    if(localStorage.getItem('user')){
      const user = JSON.parse(localStorage.getItem('user'));
      console.log(product_details,"user");
      console.log("Add to Cart", user);
      const details = {
        "cartItem": {
          "quote_id": user.qouteid,
          "sku": product_details.sku_name,
          "qty": product_details.qty
          
        
        }
     
    }
    console.log( user.qouteid , "Addtocart2");
    return await product.AddCartUser(user.qouteid,details);
  }
    else if(localStorage.getItem('cart_id')) {
      const cart_id = localStorage.getItem("cart_id");
      const cart_data = JSON.parse(cart_id);
      return await GusetUserServices.AddProductGuestCart(
        product_details,
        cart_data.cart_id
      );
    } 
    else {
      const cart_id = await  GusetUserServices.GuestUserGenerateToken();
      const user_id = await GusetUserServices.CreateCustomerGuest(cart_id.data);
      localStorage.setItem(
        "cart_id",
        JSON.stringify({ cart_id: cart_id.data, id: user_id.data })
      );
      return await GusetUserServices.AddProductGuestCart(
        product_details,
        cart_id.data
      );
    }
  }

function DeleteProductFromCart(item_id, quote_id) {
    return request(
      `jewellery_store_view/rest/V1/carts/${quote_id}/items/${item_id}`,
      "",
      "Delete",
      "",
      token
    );
}

function userdetailApi(userToken)  {
    return request('jewellery_store_view/rest/V1/customers/me', "","get","",userToken);
}

function AddToWishList(sku_name,customer_id){
    return request(`jewellery_store_view/rest/V1/wishlist/addBySku/${sku_name} `,customer_id,"post",'',token)
  }

  function wishlistItem(customer_id)  {
    return request(`jewellery_store_view/rest/all/V1/wishlist/items?customerId=${customer_id}&page_size=30&sortBy=price&soryByValue=ASC`,"","get","",token);
}


function PlpPageApi(category_id, pageSize, currentPage,SortBY,sidebar,price) {
  console.log(sidebar,price,category_id,pageSize,currentPage,SortBY);
  let data;
  if (

    sidebar.gender !== "" ||

    sidebar.material !== "" ||

    SortBY.jewellery_type !== "" ||

    price.to !== "" ||

    price.from !== "" 
    // ||

    // sidebar.size !== ""

  ) {

    data =

      '{products(filter:{category_id:{ eq:"' +

      category_id +

      '" },gender : { eq:"' +

      sidebar.gender +

      '" }, material: { eq:"' +

      sidebar.material +

      '" } , jewellery_type : { eq:"' +

      sidebar.jewellery_type +

      '" }, price:{from: "' +

      price.from +

      '", to: "' +

      price.to +

      '" }}, pageSize:' +

      pageSize +

      "  ,currentPage: " +

      currentPage +

      ", sort: {" +

      SortBY.sort +

      ": ASC }) {aggregations{attribute_code count label options{ count label value }}total_count page_info {page_size current_page} items { id brand name sku short_description { html } image { url } price_range { minimum_price { regular_price { value currency } final_price { value currency } fixed_product_taxes { label amount {value currency }}}maximum_price { discount { amount_off percent_off } fixed_product_taxes { label amount { value currency } } } } }}}";

  }
  // if(SortBY.position==="" && SortBY.sort==="" && price.from === "" && price.to === "" && sidebar.gender ==="" && sidebar.material ==="" && sidebar.jewellery_type ==="" ){
  //   data = '{products(filter:{category_id:{ eq: "' + category_id + '" } }, pageSize: ' + pageSize + ',currentPage: ' + currentPage + ' ){aggregations{attribute_code count label options{ count label value }}total_count  page_info {page_size  current_page} items { id brand name sku short_description {  html }  image { url } price_range {  minimum_price {  regular_price { value currency } final_price { value currency } fixed_product_taxes {  label amount {value  currency }}}maximum_price {  discount {  amount_off    percent_off } fixed_product_taxes { label amount { value currency } } } } }}}';
  //   console.log(data,"productlistapiif");
  // }
  // // else if( sidebar.name!=="" && price.from !=="" && price.to !=="" ){
  // //   data = '{products(search: \"\", filter:{category_id:{ eq: "'+ category_id+'" },price:{from: "'+ price.from +'", to: "'+ price.to +'" } }, pageSize: '+ pageSize +',currentPage: '+currentPage+' ){aggregations{attribute_code count label options{ count label value }}total_count page_info {page_size current_page} items { id brand name sku short_description { html } image { url } price_range { minimum_price { regular_price { value currency } final_price { value currency } fixed_product_taxes { label amount {value currency }}}maximum_price { discount { amount_off percent_off } fixed_product_taxes { label amount { value currency } } } } }}}';
  // // }
  //  if(sidebar.gender !== "" ||  sidebar.colors!=="" ||  SortBY.sort!=="" || price.to !=="" || price.from !=="" || sidebar.size !=="" ){
  //   data = '{products(filter:{category_id:{ eq:"'+ category_id +'" },gender : { eq:"'+ sidebar.brand +'" }, colors: { eq:"'+ sidebar.colors +'" } , size : { eq:"'+ sidebar.size +'" }, price:{from: "'+ price.from +'", to: "'+ price.to +'" }}, pageSize:'+ pageSize + '  ,currentPage: '+ currentPage + ', sort: {' +  SortBY.sort + ': ASC }) {aggregations{attribute_code count label options{ count label value }}total_count page_info {page_size current_page} items { id brand name sku short_description { html } image { url } price_range { minimum_price { regular_price { value currency } final_price { value currency } fixed_product_taxes { label amount {value currency }}}maximum_price { discount { amount_off percent_off } fixed_product_taxes { label amount { value currency } } } } }}}';
  //   console.log(data);
  // }
  //  else{
  //   data = '{products(filter:{category_id:{ eq: "' + category_id + '" } }, pageSize: ' + pageSize + ',currentPage: ' + currentPage + ', sort: {' + SortBY.sort +'}){aggregations{attribute_code count label options{ count label value }}total_count  page_info {page_size  current_page} items { id brand name sku short_description {  html }  image { url } price_range {  minimum_price {  regular_price { value currency } final_price { value currency } fixed_product_taxes {  label amount {value  currency }}}maximum_price {  discount {  amount_off    percent_off } fixed_product_taxes { label amount { value currency } } } } }}}';
  // }
  let query = {
    "query":data,
    "storeCode":"jewellery_store_view",
    "catId":category_id,
  }
  return request(
    'jewellery_store_view/rest/V1/product/filtersCollection',
    query,
    "POST",
    "",
    token
  );
}

async function ProductListApi(PageSize) {
  return request(
    `rest/jewellery_store_view/V1/products/?searchCriteria%5BpageSize%5D=${PageSize}`,
    "",
    "get",
    "",
    token
  );
}

function forgetpassword(payload) {
  console.log(payload)
  return request('jewellery_store_view/rest/V1/customers/password', payload , "put",'',token)
  
}

function resetpassword(details) {
  return request('jewellery_store_view/rest/V1/customers/resetPassword', details, "post",'', token)
}

function customerdetailbyid(id){
  return request(`jewellery_store_view/rest/V1/customers/${id}`, "", "get", '', token)
}

function getquote_id(token){
  const user= JSON.parse(localStorage.getItem('user'));
  console.log(user);
  return request('jewellery_store_view/rest/V1/carts/mine', "", "post",'', token )
}

function subtotal(id){
  return request(`jewellery_store_view/rest/V1/carts/${id}/totals`, "", "get", '', token)
}

function shippingapi(guest, details){
  return request(`jewellery_store_view/rest/V1/guest-carts/${guest}/shipping-information`, details, "post", '', token)
}

function orderPlacement(id, details){
  return request(`jewellery_store_view/rest/V1/carts/${id}/order`, details, "put", '', token)
}

function guestorderplace(guesttoken, details){
  console.log(guesttoken, details);
  return request(`jewellery_store_view/rest/V1/guest-carts/${guesttoken}/order`, details, "put", '', token)
}

function SingleBlogStory(id){
  return request(`default/rest/all/V1/mpblog/post/view/${id}?postId=${id}`, " ", "get", '',token)
}

function MostViewBlog(){
  return request(`default/rest/all/V1/mpblog/post/mostviewed?storeId=3`, "", "get", '', token)
}

function AboutUsApi(id){
  return request(`default/rest/all/V1/cmsPage/${id}`, " ", "get", '', token)
}

function AddCartUser(quote_id,product_details){
  return request(`jewellery_store_view/rest/V1/carts/${quote_id}/items`,product_details,'POST','',token);
}

function GetCartItems(quote_id){   
  return request(`jewellery_store_view/rest/V1/carts/${quote_id}`,'','get','',token);
}

async function GetCartItem(){
  if(localStorage.getItem('user')){
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user.qouteid,"getcartitem")
   return await product.GetCartItems(user.qouteid);
  }
  if(localStorage.getItem('cart_id')){
    const cart_id = JSON.parse(localStorage.getItem('cart_id'));
    return  await GusetUserServices.CheckGuestItemsCart(cart_id.cart_id);
  }
}

function GetAllCountryApi(){
  return request('rest/all/V1/directory/countries', '', 'get', '', token);
}


function GetStatesByCountryApi(id){
  return request(`default/rest/all/V1/directory/countries/${id}`,'','get',token);
}

function GetCartTotal(id){
  return request(`jewellery_store_view/rest//V1/carts/${id}`,'','get','',token);
}

function GetCategory_Id(params){
  return request(`jewellery_store_view/rest/V1/categories/list?searchCriteria[filterGroups][0][filters][0][field]=url_path&searchCriteria[filterGroups][0][filters][0][value]=${params}&searchCriteria[filterGroups][0][filters][0][conditionType]=eq&fields=items[name,id]`,
  "",
  "GET",
  "",
  token
);
}

function AllOrders(customer_id){
  return request(`jewellery_store_view/rest/V1/orders?searchCriteria[filterGroups][0][filters][0][field]=customer_id&searchCriteria[filterGroups][0][filters][0][value]=59&searchCriteria[filterGroups][0][filters][0][conditionType]=eq&searchCriteria[page_size]=1&searchCriteria[sortOrders][0][field]=grand_total&searchCriteria[sortOrders][0][direction]=DESC`,'','get','',token);
}

function signout(){
  localStorage.removeItem('user');
  return true;
}

function AddUserShippingAddress(id, payload){
  return request(`jewellery_store_view/rest/V1/carts/${id}/shipping-information`,payload, "post", "", token)
}

function NextProduct(id){
  return request(`default/rest/all/V1/Nextproduct/getlist?product=${id}`, "", "get","",token)
}

function PreviousProduct(id){
  return request(`default/rest/all/V1/Previousproduct/getlist?product=${id}`, "", "get", "", token)
}