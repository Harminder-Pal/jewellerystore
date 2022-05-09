const initialState = {
    products: [],
    Subtotal:0,
    loading:false,
    index:0,
  };


  export function CartProcess(state = initialState, action) {
    switch (action.type) {
        case 'addtocartrequest':
            return {
                ...state,
                payload: action.payload,
                loading:true,
                index:action.index,
              };
        case 'addtocartsuccess':
            if(state.products.length === 0){
                state.products.push(action.payload);
              }
              state.products.map((item,index) => { 
                if (item.item_id === action.payload.item_id) {
                 item.qty = action.payload.qty;
                }
                console.log(index,state.products.length);
                if(item.item_id!==action.payload.item_id && index === state.products.length-1){
                let items = { ...item, ...action.payload };
                console.log(items);
                 state.products.push(items);
                
                }
              });
              let subtotal = 0;
              state?.products.map(item=>{
                 let total =( parseInt(item.qty) * parseInt(item.price) ) 
                 subtotal +=total;
              })
              
              return { ...state,Subtotal:subtotal,loading:false};

        case 'addtocartfail':
            return {
                ...state,
              };
           

        case 'removefromcartrequest':

            state.products.forEach((item,index)=>{return  item.item_id === action.payload.item_id ? state.products.splice(index,1) : ''})
      return {
        payload: action.payload,
        ...state,
      };

        case 'removefromcartsuccess':

            return {
                ...state,
               };


        case 'removefromcartfail':

            return {...state};
           
        case 'getallitemsincartrequest':

            return {
            };

        case 'getallitemsincartsuccess':
            console.log(action.payload,"cart success");
      let result = 0;
      action?.payload?.map(item=>{
         let total =( parseInt(item.qty) * parseInt(item.price) ) 
         result +=total;
      })
      return {
        ...state,
        products:action.payload,
        Subtotal:result,
      };



        case 'getallitemsincartfail':

            return {};
            default:

                return state

    }

}
 

export function addtocart(state={},action) {
    switch (action.type) {
        case 'addtocartrequest':
            return {
                Register: true
            }
        case 'addtocartsuccess':
            return {

            }

        case 'addtocartfail':
            return {

            }
            default:
                return state
    }
}
export function removefromcart(state={},action) {

    switch (action.type) {

        case 'removefromcartrequest':

            return {

                Register: true

            }

        case 'removefromcartsuccess':

            return {



            }



        case 'removefromcartfail':

            return {



            }

            default:

                return state

    }

}

export function getallitemsincart(state=initialState,action) {

    switch (action.type) {

        case 'getallitemsincartrequest':

        console.log(action.payload, "cart request");


            return {

               

            }

        case 'getallitemsincartsuccess':
            console.log(action.payload,"cart success");

            return {



            }



        case 'getallitemsincartfail':

            return {



            }

            default:

                return state

    }

}