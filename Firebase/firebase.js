import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyC-FcUid_3X-8CBxo2BlONMtj7mZjNd2jw",
    authDomain: "black-cirrus-418421.firebaseapp.com",
    projectId: "black-cirrus-418421",
    storageBucket: "black-cirrus-418421.appspot.com",
    messagingSenderId: "171956390321",
    appId: "1:171956390321:web:8ddbb2b0d325fff91b9590",
    measurementId: "G-GJ1EVLDDFY"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage, ref, uploadBytes, getDownloadURL };
