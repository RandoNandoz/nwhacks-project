import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get } from "firebase/database";

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

const db = getDatabase(app);

export const setPhoneNumber = (phoneNumber: string, uid: string) => {
    set(ref(db, `users/${uid}/phoneNumber`), phoneNumber).then(
        (response) => {
            console.log(response);
        },
        (error) => {
            console.log(error);
        }
    );
}

export const getPhoneNumber = (uid: string): string[] => {
    let res = []
    const phoneNumberRef = ref(db, `users/${uid}/phoneNumber`);
    get(phoneNumberRef).then((snapshot) => {
        if (snapshot.exists()) {
            for (const key in snapshot.val()) {
                res.push(snapshot.val()[key])
            }
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    })
    return res
}
