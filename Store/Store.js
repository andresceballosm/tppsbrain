import { createStore, applyMiddleware } from 'redux';
import Reducers from './Reducers/RootReducer';
import createSagasMiddleware from 'redux-saga';
import functionPrimaria from './Sagas/Sagas';

const sagaMiddleware = createSagasMiddleware()
const store = createStore(Reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(functionPrimaria);

export default store
