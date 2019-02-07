import { combineReducers } from 'redux';
import ReducerSesion from './ReducerSesion';
import ReducerGetLanguage from './ReducerGetLanguage';
import { reducer as form } from 'redux-form';


export default(reducers = combineReducers({
    ReducerSesion,
    ReducerGetLanguage,
    form
}));