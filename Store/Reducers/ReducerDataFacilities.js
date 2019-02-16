import CONSTANTS from '../CONSTANTS.js';

export default ReducerDataFacilities = (state=null, action) => {
    switch (action.type) {
        case CONSTANTS.DATA_FACILITIES:
            return action.data;  
        default:
            return state;
    }
}