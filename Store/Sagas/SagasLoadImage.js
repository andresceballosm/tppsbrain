import { takeEvery, put } from 'redux-saga/effects';
import { storage, dataBase } from '../Services/Firebase';
import CONSTANTS from '../CONSTANTS';
import { ActionStopLoading, ActionOpenAlertError } from '../Actions/ActionApp';

const route = (path) => {
    switch (path) {
        case CONSTANTS.PATH_LOGO_CLUB:
            return 'clubs'; 
        default:
            return null;
    }
}
 

function* sagasLoadImage({image,uid,item}) {
    const { sourceURL } = image;
    const { path } = image;
    var pathImage = '';
    if (sourceURL != undefined){
        pathImage = sourceURL;
    }else{
        pathImage = path;
    }
    const pathFirebase = route(item);

    try {
        const storageRef = storage.ref().child("images/"+ item + "/" + uid);
        yield storageRef.put(pathImage).then(function(snapshot) {
            const ref = snapshot.ref;
            var url = {};
            url[item] = ref;
            //update[`favorites.${someUid}`] = 'abc';
            var docRef = dataBase.collection(pathFirebase).doc(`${uid}`);
            docRef.update(url);
        });
        yield put(ActionStopLoading());
    } catch (error) {
        console.log(error);
        yield put(ActionStopLoading());
        yield put(ActionOpenAlertError(error));
    }
}
export const sagaLoadImage = [
   //take every listening to the dispatch
   takeEvery(CONSTANTS.LOAD_IMAGE_LOGOCLUB, sagasLoadImage) 
];

