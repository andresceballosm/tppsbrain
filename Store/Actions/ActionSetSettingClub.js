import CONSTANTS from '../CONSTANTS';

export const ActionSetSettingClub = (params) => {
    var typeAction = '';
    if(params.param == 'backgroundcolor'){
        typeAction = CONSTANTS.SET_SETTING_BACKGROUNDCOLOR;
    }else if(params.param == 'institutionalcolor'){
        typeAction = CONSTANTS.SET_SETTING_INSTITUTIONALCOLOR;
    }
    return{
        type: typeAction,
        params,
    }
};

export const ActionGetSettingClub = (params) => {
    return{
        type: CONSTANTS.GET_SETTING_CLUB,
        params,
    }
};
