import { all } from 'redux-saga/effects';
import { sagaRegisterClub } from './SagaRegisterClub';
import { sagaLogin } from './SagaLogin';
import { sagaLoadImage } from './SagasLoadImage';
import { sagaGetDataClub } from './SagaGetDataClub'

export default function* rootSaga() {    
  yield all([
    ...sagaLogin,
    ...sagaRegisterClub,
    ...sagaLoadImage,
    ...sagaGetDataClub,
  ])
};
