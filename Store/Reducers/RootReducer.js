import { combineReducers } from 'redux';
import ReducerSesion from './ReducerSesion';
import ReducerGetLanguage from './ReducerGetLanguage';
import ReducerSetLoading from './Utils/ReducerApp'
import ReducerModal from './Utils/ReducerModal';
import ReducerAlertError from './Utils/ReducerAlertError'
import ReducerImage from './Utils/ReducerImage'
import { reducer as form } from 'redux-form';


export default(reducers = combineReducers({
    ReducerSesion,
    ReducerGetLanguage,
    app: ReducerSetLoading,
    ReducerModal,
    ReducerAlertError,
    ReducerImage,
    form
}));