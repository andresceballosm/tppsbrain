import CONSTANTS from '../CONSTANTS';

export const ActionLoadFacilities = uid => {
    return{
        type: CONSTANTS.LOAD_FACILITIES,
        uid
    }
};