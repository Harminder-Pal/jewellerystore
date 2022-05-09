export function signup(state={},action) {
    switch (action.type) {
        case 'signuprequest':
            return {
                Register: true
            }
        case 'signupsuccess':
            return {

            }

        case 'signupfail':
            return {

            }
            default:
                return state
    }
}

const user = localStorage.getItem('user');
const initialState = user ? { loggedIn: true, user } : {}

export function login(state= initialState,action) {

   

    switch (action.type) {

        case 'loginrequest':

            return {

                
                Payload : action.Payload

            }

        case 'loginsuccess':

            return {

                loggedIn : true ,

                Payload : action.Payload

            }



        case 'loginfail':

            return {



            }

        case 'SignOut':

            return{

                
            }

            default:

                return state

    }

}