import CONSTANTS from '../CONSTANTS';

export const ActionLoadServices = uid => {
    return{
        type: CONSTANTS.LOAD_SERVICES,
        uid
    }
};