import { takeEvery, put, call } from 'redux-saga/effects';
import { storage, dataBase } from '../Services/Firebase';
import CONSTANTS from '../CONSTANTS';
import { ActionStopLoading, ActionOpenAlertError } from '../Actions/ActionApp';
import { ActionDataClub } from '../Actions/ActionDataClub';
import { ActionGetUrlImage } from '../Actions/ActionGetUrlImage';

const getDataClub = clubRef => 
    clubRef.get().then(dataClub => dataClub)

const getDownloadURL = ref => 
    ref.getDownloadURL().then(urlImage => urlImage)

function* sagasGetData( dataUid ) {
    const {uid} = dataUid;
    try {
        const clubRef = dataBase.collection('clubs').doc(uid);
        const dataClub = yield call(getDataClub, clubRef);
        yield put(ActionDataClub(dataClub));
        //Get url image in storage
        const ref = storage.ref(dataClub._data.LOGO_CLUB);
        const urlImage = yield call(getDownloadURL, ref);
        yield put(ActionGetUrlImage(urlImage))
        yield put(ActionStopLoading());

    } catch (error) {
        console.log(error);
        yield put(ActionStopLoading());
        //yield put(ActionOpenAlertError(error));
    }
}
export const sagaGetDataClub = [
   //take every listening to the dispatch
   takeEvery(CONSTANTS.GET_DATACLUB, sagasGetData) 
];

