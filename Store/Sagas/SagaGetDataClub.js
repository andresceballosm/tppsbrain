import { takeEvery, put, call } from 'redux-saga/effects';
import { storage, dataBase } from '../Services/Firebase';
import CONSTANTS from '../CONSTANTS';
import { ActionStopLoading, ActionOpenAlertError } from '../Actions/ActionApp';
import { ActionDataClub, ActionDataLocation, ActionDataFacilities, ActionDataServices , ActionDataStaff } from '../Actions/ActionDataClub';
import { ActionGetUrlImage } from '../Actions/ActionGetUrlImage';
import { ActionLoadClubProfileComplete } from '../Actions/ActionLoadClubProfileComplete'
import { ActionGetSettingClub } from '../Actions/ActionSetSettingClub';

const getDataClub = clubRef => 
    clubRef.get().then(dataClub => dataClub);

const getSettingClub = settingRef => 
    settingRef.get().then(settingClub => settingClub)     

const getDataFacilities = facilitiesRef => 
    facilitiesRef.get().then(dataClub => dataClub)    

const getDataLocation = locationRef => 
    locationRef.get().then(querySnapshot => querySnapshot)

const getDataServices = servicesRef => 
    servicesRef.get().then(dataClub => dataClub) 
    
const getDataStaff = staffRef => 
    staffRef.get().then(querySnapshot => querySnapshot)    
    
const getDownloadURL = ref => 
    ref.getDownloadURL().then(urlImage => urlImage)

function* sagasGetData( dataUid ) {
    const {uid} = dataUid;
    try {
        const settingRef = dataBase.collection('settings_club').doc(uid);
        const settingClub = yield call(getSettingClub, settingRef)
        yield put(ActionGetSettingClub(settingClub));
        const clubRef = dataBase.collection('clubs').doc(uid);
        const dataClub = yield call(getDataClub, clubRef);
        yield put(ActionDataClub(dataClub));
        //Get url image in storage
        const ref = storage.ref(dataClub._data.LOGO_CLUB);
        const urlImage = yield call(getDownloadURL, ref);
        yield put(ActionGetUrlImage(urlImage));
        const locations = yield call(sagasLoadLocation, uid);
        const facilities = yield call(sagasLoadFacilities, uid);
        const services = yield call(sagasLoadServices, uid);
        const staff = yield call(sagasLoadStaff, uid);
        yield put(ActionLoadClubProfileComplete('complete'));
        yield put(ActionStopLoading());

    } catch (error) {
        console.log(error);
        yield put(ActionLoadClubProfileComplete('complete'));
        yield put(ActionStopLoading());
        //yield put(ActionOpenAlertError(error));
    }
};

function* sagasLoadFacilities( uid ) {
    try {
        const facilitiesRef = dataBase.collection('facilities').where("club_ID", "==", uid);
        const dataFacilities = yield call(getDataFacilities, facilitiesRef);
        yield put(ActionDataFacilities(dataFacilities));
    } catch (error) {
        console.log(error);
        yield put(ActionStopLoading());
        //yield put(ActionOpenAlertError(error));
    }
};

function* sagasLoadLocation( uid ) {
    console.log('sagas uid',uid);
    try {
        const locationRef = dataBase.collection('Location').where("club_ID", "==", uid)
        const dataLocation = yield call(getDataLocation, locationRef);
        console.log('dataLocation',dataLocation._docs);
        yield put(ActionDataLocation(dataLocation._docs))
        //yield put(ActionStopLoading());
    } catch (error) {
        console.log(error);
        //yield put(ActionStopLoading());
        //yield put(ActionOpenAlertError(error));
    }
};

function* sagasLoadServices( uid ) {
    try {
        const servicesRef = dataBase.collection('services').where("club_ID", "==", uid);
        const dataClub = yield call(getDataServices, servicesRef);
        yield put(ActionDataServices(dataClub));
    } catch (error) {
        console.log(error);
        yield put(ActionStopLoading());
        //yield put(ActionOpenAlertError(error));
    }
};

function* sagasLoadStaff( uid ) {
    try {
        const staffRef = dataBase.collection('Staff').where("club_ID", "==", uid);
        const dataStaff = yield call(getDataStaff, staffRef);
        yield put(ActionDataStaff(dataStaff._docs));
    } catch (error) {
        console.log(error);
        yield put(ActionStopLoading());
        //yield put(ActionOpenAlertError(error));
    }
};

export const sagaGetDataClub = [
   //take every listening to the dispatch
   takeEvery(CONSTANTS.GET_DATACLUB, sagasGetData),
   takeEvery(CONSTANTS.LOAD_FACILITIES, sagasLoadFacilities),
   takeEvery(CONSTANTS.LOAD_LOCATION, sagasLoadLocation),
   takeEvery(CONSTANTS.LOAD_SERVICES, sagasLoadServices),
   takeEvery(CONSTANTS.LOAD_STAFF, sagasLoadStaff),  
];

