import CONSTANTS from '../CONSTANTS.js';

export default ReducerTypeUser = (state=null, action) => {
    switch (action.type) {
        case CONSTANTS.TYPE_USER:
            return action.typeUser; 
        default:
            return state;
    }
}