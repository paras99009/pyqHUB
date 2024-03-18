
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyC_aaLoQ6sLGtKswvl9vqEpBRoPxPL054k",
    authDomain: "pyqhub-dd357.firebaseapp.com",
    projectId: "pyqhub-dd357",
    storageBucket: "pyqhub-dd357.appspot.com",
    messagingSenderId: "170335761743",
    appId: "1:170335761743:web:ad5eb735ec3c0992b9413a",
    measurementId: "G-SDJ8QEGW7S"
  };


const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const firestore =getFirestore(app)
const storage=getStorage(app);
export {app,auth,firestore,storage};