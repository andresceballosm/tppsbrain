import CONSTANTS from '../CONSTANTS.js';

export default ReducerDataLocation = (state=null, action) => {
    switch (action.type) {
        case CONSTANTS.DATA_LOCATION:
            return action.data;  
        default:
            return state;
    }
}