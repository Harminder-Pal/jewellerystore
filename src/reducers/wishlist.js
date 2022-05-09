const initialState = {
    wishlist:[],
    length:0
  };

export function WishListProcess(state = initialState, action) {
    switch (action.type) {
        case 'addtowishlistrequest':
            return {
                Register: true
            }
        case 'addtowishlistsuccess':
            return {

            }

        case 'addtowishlistfail':
            return {

            }

        case 'removefromwishlistrequest':

            return {

                Register: true

            }

        case 'removefromwishlistsuccess':

            return {



            }



        case 'removefromwishlistfail':

            return {



            }



        case 'getwishlistitemrequest':

            return {

                

            }

        case 'getwishlistitemsuccess':

            return {

                Payload : action.Payload

            }



        case 'getwishlistitemfail':

            return {



            }

            default:

                return state

    }

}