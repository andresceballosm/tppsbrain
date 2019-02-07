import CONSTANTS from '../CONSTANTS.js';

export default ReducerGetLanguage = (state=null, action) => {
    switch (action.type) {
        case CONSTANTS.GET_LANGUAGE:
            return action.language; 
        default:
            return state;
    }
}