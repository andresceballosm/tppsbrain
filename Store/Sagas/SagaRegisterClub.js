import { call, takeEvery, put } from 'redux-saga/effects';
import { authentication, dataBase } from '../Services/Firebase';
import CONSTANTS from '../CONSTANTS';
import { ActionStopLoading, ActionOpenAlertError } from '../Actions/ActionApp';

const registerInFirebase = values =>
  authentication
    .createUserWithEmailAndPassword(values.email, values.password)
    .then(success => success);

const registerUserInDataBase = ({ uid, email, clubname, administrator, mainAddress, phone, website }) => 
  dataBase.collection('users').doc(`${uid}`).set({
    clubname,
    email,
    administrator,
    type:'admin', 
  })

  const registerClubInDataBase = ({ uid, email, clubname, administrator, mainAddress, phone, website }) => 
  dataBase.collection('clubs').doc(`${uid}`).set({
    clubname,
    email,
    administrator, 
    mainAddress, 
    phone, 
    website,
    license:'inactive'
  })
  
function* sagaRegister(values) {
    try {
      const register = yield call(registerInFirebase, values.data);
      const { email, uid } = register.user._user;
      const { data: { clubname, administrator, mainAddress, phone, website } } = values;
      yield call(registerUserInDataBase, { uid, email, clubname, administrator });
      yield call(registerClubInDataBase, { uid, email, clubname, administrator, mainAddress, phone, website });
      yield put(ActionStopLoading());
    } catch (error) {
      console.log(error);
      yield put(ActionStopLoading());
      yield put(ActionOpenAlertError(error));
    }
}
export const sagaRegisterClub = [
   //take every listening to the dispatch
   takeEvery(CONSTANTS.REGISTERCLUB, sagaRegister) 
];

