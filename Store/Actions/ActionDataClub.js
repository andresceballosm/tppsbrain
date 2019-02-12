import CONSTANTS from '../CONSTANTS';

export const ActionDataClub = dataClub => ({
    type: CONSTANTS.DATACLUB,
    dataClub: dataClub._data,
});