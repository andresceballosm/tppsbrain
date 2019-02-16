import CONSTANTS from '../CONSTANTS.js';

export default ReducerSettingClub = (state={backgroundcolor:null,institutionalcolor:null}, action) => {
    switch (action.type) {
        case CONSTANTS.SET_SETTING_BACKGROUNDCOLOR:
            return Object.assign({}, state, {
                backgroundcolor: action.params.color
            }) 
        case CONSTANTS.SET_SETTING_INSTITUTIONALCOLOR : 
            return Object.assign({}, state, {
                institutionalcolor: action.params.color
            })
        case CONSTANTS.GET_SETTING_CLUB : 
            return action.params._data    
        default:
            return state;
    }
}