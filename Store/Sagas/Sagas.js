import { all } from 'redux-saga/effects';
import { sagaRegisterClub } from './SagaRegisterClub';
import { sagaLogin } from './SagaLogin';

export default function* rootSaga() {    
  yield all([
    ...sagaLogin,
    ...sagaRegisterClub
  ])
};
