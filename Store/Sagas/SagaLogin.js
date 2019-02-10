import { call, takeEvery, all } from 'redux-saga/effects';
import { authentication } from '../Services/Firebase';
import CONSTANTS from '../CONSTANTS';
import { ActionSetLoading } from '../Actions/ActionSetSesion';

const sagaRegisterClub = require('./SagaRegisterClub');
const loginInFirebase = ({ email, password }) =>
authentication.signInWithEmailAndPassword(email, password).then(success => success.toJSON());

function* Login(values) {
  try {
    const resultado = yield call(loginInFirebase, values.data);
  } catch (error) {
    console.log(error);
  }
}

export const sagaLogin = [
  //take every listening to the dispatch
  takeEvery(CONSTANTS.LOGIN, Login) 
]

