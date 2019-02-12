import CONSTANTS from '../CONSTANTS.js';

export default ReducerDataClub = (state={ _data: null }, action) => {
    console.log('ReducerDataClub', action.type);
    switch (action.type) {
        case CONSTANTS.DATACLUB:
        console.log('entraa a ReducetGetDataClub',action);
            return action.dataClub;  
        default:
            return state;
    }
}