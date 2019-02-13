import CONSTANTS from '../CONSTANTS.js';

export default ReducerSesion = (state=null, action) => {
    switch (action.type) {
        case CONSTANTS.SET_SESION:
            return action.usuario;
        case CONSTANTS.LOGOUT : 
            console.log('reducer logout');
            return null;   
        default:
            return state;
    }
}