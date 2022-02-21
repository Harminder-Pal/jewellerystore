import request from './http_axios'
const token = "jnztsl452zn753eq0znr6bxzmnupvdu9"

export const product = {
    bannerApi
};

function bannerApi()  {
    return request('/default/rest/all/V1/codilar/bannerslider/slider/loadById/1',"","get","",token);
}