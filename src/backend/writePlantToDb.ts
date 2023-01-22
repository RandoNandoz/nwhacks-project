import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

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

// const readPlantsFromDb() => {
//     const dbRef = db;
// }

const writePlantToDb = async (name, desc, image_url, water_every, pruning, soil, sunlight, fertilzer) => {
    set(ref(db, 'plants/' + name), {
        "name": name,
        "desc": desc,
        "image_url": image_url,
        "water_every": water_every,
        "pruning": pruning,
        "soil": soil,
        "sunlight": sunlight,
        "fertilzer": fertilzer
    })
}

export default writePlantToDb