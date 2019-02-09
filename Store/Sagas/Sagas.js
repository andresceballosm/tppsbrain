import { takeEvery, call } from 'redux-saga/effects';
import { authentication, dataBase } from '../Services/Firebase';
import CONSTANTS from '../CONSTANTS';

const registerInFirebase = values =>
  authentication
    .createUserWithEmailAndPassword(values.email, values.password)
    .then(success => success);

const registerInDataBase = ({ uid, email, name }) =>
  dataBase.collection('users').doc(`${uid}`).set({
    name,
    email,
  });

function* sagaRegister(values) {
  try {
    const register = yield call(registerInFirebase, values.data);
    const { email, uid } = register.user._user;
    console.log('llega este email', email);
    console.log('llega este uid', uid);
    const { data: { name } } = values;
    console.log('data:name', name)
    yield call(registerInDataBase, { uid, email, name });
  } catch (error) {
    console.log(error);
  }
}

const loginInFirebase = ({ email, password }) =>
authentication.signInWithEmailAndPassword(email, password).then(success => success.toJSON());

function* sagaLogin(values) {
  try {
    const resultado = yield call(loginInFirebase, values.data);
  } catch (error) {
    console.log(error);
  }
}

export default function* functionPrimary() {    
//take every listening to the dispatch
console.log('llego a la function primary');
  yield takeEvery(CONSTANTS.REGISTER, sagaRegister);
  yield takeEvery(CONSTANTS.LOGIN, sagaLogin);
}
