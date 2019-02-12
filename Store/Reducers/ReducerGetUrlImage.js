import CONSTANTS from '../CONSTANTS.js';

export default ReducerGetUrlImage = (state=null, action) => {
    switch (action.type) {
        case CONSTANTS.GET_URL_IMAGE:
        console.log('esto es action en reducerGetUrlImage',action.urlImage)
            return action.urlImage;  
        default:
            return state;
    }
}