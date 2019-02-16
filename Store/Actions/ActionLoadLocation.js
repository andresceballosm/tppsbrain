import CONSTANTS from '../CONSTANTS';

export const ActionLoadLocation = uid => {
    return{
        type: CONSTANTS.LOAD_LOCATION,
        uid
    }
};