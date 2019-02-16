import CONSTANTS from '../CONSTANTS';

export const ActionDataClub = data => {
    return {
    type: CONSTANTS.DATACLUB,
    data: data._data,
    }
};

export const ActionDataFacilities = data => {
    return {
    type: CONSTANTS.DATA_FACILITIES,
    data,
    }
};

export const ActionDataLocation = (data) => {
    return{
        type: CONSTANTS.DATA_LOCATION,
        data,
    }
};

export const ActionDataServices = data => {
    return {
    type: CONSTANTS.DATA_SERVICES,
    data,
    }
};

export const ActionDataStaff = data => {
    return {
    type: CONSTANTS.DATA_STAFF,
    data,
    }
};
