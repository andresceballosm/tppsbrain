import CONSTANTS from '../CONSTANTS';

export const ActionGetDataClub = uid => {
    console.log('ActionGetData');
    return{
        type: CONSTANTS.GET_DATACLUB,
        uid,
    }

};