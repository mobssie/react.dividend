import firebase from "firebase/compat/app"
import 'firebase/compat/firestore';
import { getAuth, onAuthStateChanged } from "firebase/auth";


export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATA_BASEURL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID
}



// // firebaseConfig 정보로 firebase 시작
// firebase.initializeApp(rrfConfig);

// // firebase의 firestore 인스턴스를 변수에 저장
// const firestore = firebase.firestore();
// // 필요한 곳에서 사용할 수 있도록 내보내기
// // 다른 곳에서 불러올때 firestore로 불러와야 함!!
// export { firestore };

