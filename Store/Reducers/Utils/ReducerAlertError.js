import CONSTANTS from '../../CONSTANTS.js';

export default ReducerAlertError = (state = { alertError: false }, action) => {
    switch (action.type) {
        case CONSTANTS.OPEN_ALERTERROR:
            console.log('reducerAlertError', action);
            return { alertError: true, error:action.error };
        default:
            return state;
    }
}