import {getPhoneNumber} from "./phoneNumbers";
import { sendMsgOnDate } from "./scheduleSendMsg";
import { getPlantsFromDb } from "./getPlantsFromDb";

export const sendReminderByTime = async (user) => {
    const plants = await getPlantsFromDb();
    console.log(plants);
    plants.forEach((plant) => {
        console.log(plant)
        const phoneNumber = "+16047049500";
        let FutureDate = new Date(Date.now());
        for (let i = 1; i <= 50; i++) {
            FutureDate.setDate(FutureDate.getDay() + plant.water_every * i);
            console.log(`Sending a message to ${phoneNumber} on ${FutureDate} for ${plant.name}!`)
            sendMsgOnDate(FutureDate, plant.name, phoneNumber);
        }
    })
    return plants
}