import {combineReducers} from "redux";
import {firebaseReducer} from "react-redux-firebase";
import {firestoreReducer} from "redux-firestore";
import login from './login';
export const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    login,
});