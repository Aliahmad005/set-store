// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration




const firebaseConfig = {
  apiKey: "AIzaSyA1BR-HK_IQICkwDZENBB3pYXlJpmB4x6Q",
  authDomain: "web-chat-app-b5031.firebaseapp.com",
  databaseURL: "https://web-chat-app-b5031-default-rtdb.firebaseio.com",
  projectId: "web-chat-app-b5031",
  storageBucket: "web-chat-app-b5031.appspot.com",
  messagingSenderId: "248414956011",
  appId: "1:248414956011:web:04221b4e819a14802fd1ae"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();



export default firebase;