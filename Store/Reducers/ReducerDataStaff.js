import CONSTANTS from '../CONSTANTS.js';

export default ReducerDataStaff = (state=null, action) => {
    switch (action.type) {
        case CONSTANTS.DATA_STAFF:
            return action.data;  
        default:
            return state;
    }
}