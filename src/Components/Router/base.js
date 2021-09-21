import firebase from "firebase"
import "firebase/auth"
import "firebase/storage"
import "firebase/firestore"

export const app = firebase.initializeApp({
    apiKey: "AIzaSyBgCYRLyN4LWlLMfByXVMOvmWc6T2RkH2c",
    authDomain: "malush-61ad7.firebaseapp.com",
    projectId: "malush-61ad7",
    storageBucket: "malush-61ad7.appspot.com",
    messagingSenderId: "612353552623",
    appId: "1:612353552623:web:4851a6a96e0bc1f114eb1a"
})