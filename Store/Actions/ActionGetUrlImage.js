import CONSTANTS from '../CONSTANTS';

export const ActionGetUrlImage = urlImage => {
    console.log('Actiooon urlImage',urlImage)
    return{
        type: CONSTANTS.GET_URL_IMAGE,
        urlImage,
    }

};