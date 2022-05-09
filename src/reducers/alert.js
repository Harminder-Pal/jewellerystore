export function alert(state ={}, action){
    switch(action.type){
        case 'success':
            return{
                type:"alert-success",
                messsage:action.messsage
            };
        case 'error':
            return{
                type:"alert-failure",
                messsage:action.messsage
            };
        case 'clear':
            return{
                
            };
        default:
            return state;

    }
}
