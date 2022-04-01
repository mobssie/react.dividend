import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// 리덕스
import { Provider } from 'react-redux';
import { createStore, combineReducers, compose } from 'redux'
import { rootReducer } from './modules';
import { createFirestoreInstance } from "redux-firestore";
import firebase from "firebase/compat/app"
import 'firebase/compat/firestore';
import 'firebase/auth'
import { firebaseConfig } from "./firebase";
import {
  ReactReduxFirebaseProvider,
  firebaseReducer
} from 'react-redux-firebase'

const responseGoogle = (response) => {
  console.log(response);
}

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

const initialState = {};
const store = createStore(rootReducer, initialState);

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);