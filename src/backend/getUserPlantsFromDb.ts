import { initializeApp } from "firebase/app";
import { getDatabase, child, get, ref } from "firebase/database";

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

export const getUserPlantsFromDb = async (uid) => {
    let res = []
    // read all plant data from db
    const dbRef = ref(getDatabase(app));
    const snapshot = await get(child(dbRef, `users/${uid}/plants`))


    if (snapshot.exists()) {
        for (const key in snapshot.val()) {
            res.push(snapshot.val()[key])
        }
    } else {
        console.log("You have no plants!");
    }

    return res
}
