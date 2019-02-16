import { combineReducers } from 'redux';
import ReducerSesion from './ReducerSesion';
import ReducerGetLanguage from './ReducerGetLanguage';
import ReducerSetLoading from './Utils/ReducerApp'
import ReducerModal from './Utils/ReducerModal';
import ReducerAlertError from './Utils/ReducerAlertError';
import ReducerImage from './Utils/ReducerImage';
import ReducerTypeUser from './ReducerTypeUser';
import ReducerDataClub from './ReducerDataClub';
import ReducerGetUrlImage from './ReducerGetUrlImage';
import ReducerDataFacilities from './ReducerDataFacilities';
import ReducerDataLocation from './ReducerDataLocation';
import ReducerDataServices from './ReducerDataServices';
import ReducerDataStaff from './ReducerDataStaff';
import ReducerSettingClub from './ReducerSettingClub';
import { reducer as form } from 'redux-form';

export default(reducers = combineReducers({
    ReducerSesion,
    ReducerGetLanguage,
    app: ReducerSetLoading,
    ReducerModal,
    ReducerAlertError,
    ReducerImage,
    ReducerTypeUser,
    ReducerDataClub,
    ReducerGetUrlImage,
    ReducerDataLocation,
    ReducerDataFacilities,
    ReducerDataServices,
    ReducerDataStaff,
    ReducerSettingClub,
    form
}));