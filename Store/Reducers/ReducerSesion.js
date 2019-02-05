import CONSTANTS from '../CONSTANTS.JS';

export default ReducerSesion = (state=null, action) => {
    switch (action.key) {
        case CONSTANTS.ESTABLECER_SESION:
            return action.usuario
        case CONSTANTS.CERRAR_SESION : 
            return null;   
        default:
            return state;
    }
}