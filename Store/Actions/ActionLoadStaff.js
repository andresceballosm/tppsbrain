import CONSTANTS from '../CONSTANTS';

export const ActionLoadStaff = uid => {
    return{
        type: CONSTANTS.LOAD_STAFF,
        uid
    }
};