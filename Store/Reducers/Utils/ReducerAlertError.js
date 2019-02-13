import CONSTANTS from '../../CONSTANTS.js';

export default ReducerAlertError = (state = { alertError: false }, action) => {
    switch (action.type) {
        case CONSTANTS.OPEN_ALERTERROR:
            return { alertError: true, error:action.error };
        default:
            return state;
    }
}