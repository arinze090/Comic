/* eslint-disable prettier/prettier */
import firebase from 'firebase/app';
import 'firebase/auth';
import Constants from 'expo-constants';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyDUntLu7yE5rHcbs8w6TTVzmyP8PqetILI',
  authDomain: 'comicapp-b315c.firebaseapp.com',
  projectId: 'comicapp-b315c',
  storageBucket: 'comicapp-b315c.appspot.com',
  messagingSenderId: '961485833793',
  appId: '1:961485833793:web:962f6f46ce056f3728e8c0',
  measurementId: 'G-L3M6MYGWFZ',
};

let Firebase;

if (firebase.apps.length === 0) {
  Firebase = firebase.initializeApp(firebaseConfig);
}

export default Firebase;
