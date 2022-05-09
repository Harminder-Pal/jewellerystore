export function addshipping(state={},action) {
    switch (action.type) {
        case 'addshippingrequest':
            return {
                Register: true
            }
        case 'addshippingsuccess':
            return {

            }

        case 'addshippingfail':
            return {

            }
            default:
                return state
    }
}
