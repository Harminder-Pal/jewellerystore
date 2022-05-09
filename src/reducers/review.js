export function addreview(state={},action) {
    switch (action.type) {
        case 'addreviewrequest' :
            return {
                Register: true
            }
        case 'addreviewsuccess':
            return {

            }

        case 'addreviewfail':
            return {

            }
            default:
                return state
    }
}
export function deletereview(state={},action) {

    switch (action.type) {

        case 'deletereviewrequest':

            return {

                Register: true

            }

        case 'deletereviewsuccess':

            return {



            }



        case 'deletereviewfail':

            return {



            }

            default:

                return state

    }

}