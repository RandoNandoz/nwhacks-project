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

export const sendReminderByTime = async (e, user) => {
    e.preventDefault()
    const plants = await getUserPlantsFromDb(user);
    console.log(plants);
    for (const plant of plants) {
        console.log(plant)
        const userPhoneNumbers = getPhoneNumber(user.uid);
        console.log(userPhoneNumbers)
        let FutureDate = new Date(Date.now());
        for (let phoneNumber of userPhoneNumbers) for (let i = 0; i <= 10; i++) {
            FutureDate.setDate(FutureDate.getDay() + plant.water_every * i);
            console.log(`Sending a message to ${phoneNumber} on ${FutureDate} for ${plant.name}!`)
            let sid = sendMsgOnDate(FutureDate, plant.name, phoneNumber);
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


export const stopReminders = (e, user) => {
    e.preventDefault()
    const dbRef = ref(db);
    get(child(dbRef, `users/${user.uid}/pendingMsgs`)).then((snapshot) => {
        if (snapshot.exists()) {
            for (const msg of snapshot.val()) {
                cancelMsg(msg)
            }
        }
    })
}