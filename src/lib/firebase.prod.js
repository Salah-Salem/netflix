import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed'; 
// we need somehow seed database ;

// we need config here 
const config = {
    apiKey: "AIzaSyCrJc7Tot0kIKFl5vj534HDyjgsHyntTBo",
    authDomain: "netflix-4184f.firebaseapp.com",
    databaseURL: "https://netflix-4184f.firebaseio.com",
    projectId: "netflix-4184f",
    storageBucket: "netflix-4184f.appspot.com",
    messagingSenderId: "213158530954",
    appId: "1:213158530954:web:d8f94287f470bc9fcf0273"
};

const firebase = Firebase.initializeApp(config);
// seedDatabase(firebase);
export { firebase };