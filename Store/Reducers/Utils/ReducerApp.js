import CONSTANTS from '../../CONSTANTS.js';

export default ReducerSetLoading = (state = { loading: false }, action) => {
    switch (action.type) {
        case CONSTANTS.SET_LOADING:
            console.log('entro a setLoading', action.type);
            return { loading: 'true' };
        case CONSTANTS.STOP_LOADING:
            console.log('entro a stopLoading', action.type);
            return { loading: 'false' };   
        default:
            return state;
    }
}



