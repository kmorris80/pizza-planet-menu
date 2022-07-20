import { initializeApp } from 'firebase/app';
import { collection, getFirestore } from 'firebase/firestore/lite';


const firebaseConfig = {
    apiKey: "AIzaSyCU5G_VlvSlPuTpIlgUYRJDgBAq-7cMQSQ",
    authDomain: "pizza-planet-7e925.firebaseapp.com",
    databaseURL: "https://pizza-planet-7e925-default-rtdb.firebaseio.com",
    projectId: "pizza-planet-7e925",
    storageBucket: "pizza-planet-7e925.appspot.com",
    messagingSenderId: "623448374561",
    appId: "1:623448374561:web:c158931d009e8ac1af5260"
  };

const app=initializeApp(firebaseConfig);
const db = getFirestore(app);
const dbMenuRef = collection(db,'pizzaMenu');

export default dbMenuRef; //menu folder will be created when we create first pizza, import "dbMenuRef" into components
// const firebaseAppConfig = getFirebaseConfig();
// // TODO 0: Initialize Firebase
// initializeApp(firebaseAppConfig);
// // TODO 12: Initialize Firebase Performance Monitoring

// initFirebaseAuth();