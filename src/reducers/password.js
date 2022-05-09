export function forgetpassword(state={},action) {
    switch (action.type) {
        case 'forgetpasswordrequest':
            return {
                Register: true
            }
        case 'forgetpasswordsuccess':
            return {

            }

        case 'forgetpasswordfail':
            return {

            }
            default:
                return state
    }
}
export function resetpassword(state={},action) {

    switch (action.type) {

        case 'resetpasswordrequest':

            return {

                Register: true

            }

        case 'resetpasswordsuccess':

            return {



            }



        case 'resetpasswordfail':

            return {



            }

            default:

                return state

    }

}