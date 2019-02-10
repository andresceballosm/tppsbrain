import CONSTANTS from '../CONSTANTS';

export const ActionSetLoading = () => ({
    type: CONSTANTS.SET_LOADING,
});

export const ActionStopLoading = () => ({
    type: CONSTANTS.STOP_LOADING,
});

export const ActionOpenModal = () => ({
    type: CONSTANTS.OPEN_MODAL,
});

export const ActionCloseModal = () => ({
    type: CONSTANTS.CLOSE_MODAL,
});

export const ActionOpenAlertError = error => ({
    type: CONSTANTS.OPEN_ALERTERROR,
    error,
});

export const ActionLoadImage = image => {
    console.log('image en actionLoadImage',image)
    return {
        type: CONSTANTS.LOAD_IMAGE_LOGOCLUB,
        image,
    }
};

export const ActionCleanImage = image => {
    console.log('image en actionCleanImage',image)
    return {
        type: CONSTANTS.CLEAN_IMAGE_LOGOCLUB,
        image,
    }
};


