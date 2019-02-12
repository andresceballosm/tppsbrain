import CONSTANTS from '../../CONSTANTS.js';

export default ReducerImage = (state = { image: null, uid: null }, action) => {
    switch (action.type) {
        case CONSTANTS.LOAD_IMAGE_LOGOCLUB:
            console.log('entro a reducerImage', action);
            return { image: action.image, uid: action.uid };
        case CONSTANTS.CLEAN_IMAGE_LOGOCLUB:
            return { image: null };   
        default:
            return state;
    }
}