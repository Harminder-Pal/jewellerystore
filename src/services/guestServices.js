import request from './http_axios';
const token = "jnztsl452zn753eq0znr6bxzmnupvdu9"

function GuestUserGenerateToken () {
    return request ('jewellery_store_view/rest/V1/guest-carts','','post','',token)
}

function CreateCustomerGuest (cart_id) {
    return request(`jewellery_store_view/rest/V1/guest-carts/${cart_id}`,'','get','',token)
}

function AddProductGuestCart(product_details, cart_id) {
    const postdata = {
        "cartItem": {
          "sku": product_details.sku_name,
          "qty": product_details.qty,
        }
    }
    return request(`jewellery_store_view/rest/V1/guest-carts/${cart_id}/items`,JSON.stringify(postdata),'post','',token)
}

function GetProductFromCart (cart_id){
    return request(`jewellery_store_view/rest/V1/guest-carts/${cart_id}/items`,'','get','',token)
}

export const  GusetUserServices = {
    CreateCustomerGuest, AddProductGuestCart, GetProductFromCart,GuestUserGenerateToken
}