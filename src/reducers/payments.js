export function payment(state={},action) {
    switch (action.type) {
        case 'paymentrequest':
            return {
                Register: true
            }
        case 'paymentsuccess':
            return {

            }

        case 'paymentfail':
            return {

            }
            default:
                return state
    }
}
