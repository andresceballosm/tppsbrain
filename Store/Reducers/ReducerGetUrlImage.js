import CONSTANTS from '../CONSTANTS.js';

export default ReducerGetUrlImage = (state=null, action) => {
    switch (action.type) {
        case CONSTANTS.GET_URL_IMAGE:
            return action.urlImage;  
        default:
            return state;
    }
}