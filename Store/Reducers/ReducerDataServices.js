import CONSTANTS from '../CONSTANTS.js';

export default ReducerDataServices = (state=null, action) => {
    switch (action.type) {
        case CONSTANTS.DATA_SERVICES:
            return action.data;  
        default:
            return state;
    }
}