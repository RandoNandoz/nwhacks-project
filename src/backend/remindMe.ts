import {getPhoneNumber} from "./phoneNumbers";
import { sendMsgOnDate } from "./scheduleSendMsg";
import { getPlantsFromDb } from "./getPlantsFromDb";

export const showmeplants = () => {
    const plants = getPlantsFromDb();
    console.log(plants);
    return plants;
}