import {getPhoneNumber} from "./phoneNumbers";
import {cancelMsg, sendMsgOnDate} from "./scheduleSendMsg";
import {getUserPlantsFromDb} from "./getUserPlantsFromDb";
import {getDatabase, set, get, ref, child} from "firebase/database";
import {initializeApp} from "firebase/app";

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

export const sendReminderByTime = async (user) => {
    const plants = await getUserPlantsFromDb(user);
    console.log(plants);
    for (const plant of ["succulent"]) {
        console.log(plant)
        const userPhoneNumbers = ["+16047049500", "+16047220983", "+16723384317", "+17786836092"]
        console.log(userPhoneNumbers)
        let FutureDate = new Date(Date.now());
        for (const phoneNumber of userPhoneNumbers) {
            for (let i = 1; i <= 10; i++) {
                FutureDate.setDate(FutureDate.getDay());
                console.log(`Sending a message to ${phoneNumber} on ${FutureDate} for 'succulent!`)
                let sid = sendMsgOnDate(FutureDate, 'succulent', phoneNumber);
                if (sid !== null) {
                    const dbRef = ref(db);
                    let snapshot;
                    snapshot = await get(child(dbRef, `users/${user.uid}/pendingMsgs`));
                    snapshot.val().push(sid)
                    await set(ref(db, `users/${user.uid}`), {
                        'pendingMsgs': snapshot.val()
                    })
                }
            }
        }
    }

    return plants
}

export const stopReminders = (user) => {
    const dbRef = ref(db);
    get(child(dbRef, `users/${user.uid}/pendingMsgs`)).then((snapshot) => {
        if (snapshot.exists()) {
            for (const msg of snapshot.val()) {
                cancelMsg(msg)
            }
        }
    })
}