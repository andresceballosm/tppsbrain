import CONSTANTS from '../CONSTANTS';

export const ActionGetDataClub = uid => {
    return{
        type: CONSTANTS.GET_DATACLUB,
        uid,
    }

};