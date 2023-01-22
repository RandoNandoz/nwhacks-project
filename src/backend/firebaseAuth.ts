import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, browserSessionPersistence, setPersistence } from "firebase/auth";

const firebaseConfig = {

    apiKey: "AIzaSyDhQtFyzVzn8HyImunbxYc_dyzArZg0010",

    authDomain: "plantis-8ff44.firebaseapp.com",

    databaseURL: "https://plantis-8ff44-default-rtdb.firebaseio.com",

    projectId: "plantis-8ff44",

    storageBucket: "plantis-8ff44.appspot.com",

    messagingSenderId: "157187864759",

    appId: "1:157187864759:web:dc4a544c9f1082b0937532"

};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export const createUser = (email: string, password: string) => {
    
    let user = null;
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            user = userCredential.user;
            console.log("created user " + user.uid);
            setPersistence(auth, browserSessionPersistence)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
    return user
}

export const signInUser = (email: string, password: string) => {
    
    let user = null;
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            user = userCredential.user;
            console.log("signed in user " + user.uid);
            setPersistence(auth, browserSessionPersistence)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
    return user
}

