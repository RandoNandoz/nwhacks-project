// schedule sending messages for plants a-la twillio

import axios from "axios";

const accountSid = "AC67cfca8abb9523d87221c2a11b4dbbb9"
const authToken = "620f7c80f26575c232aef6634340920e";


export const sendMsgOnDate = (date: Date, plant: string, phone: string) => {
    const params = new URLSearchParams();
    params.append('Body', `It's time to water your ${plant}!`);
    params.append('From', '+17258009659');
    params.append('To', phone);
    axios.post(
        `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
        params,
        {
            auth: {
                username: accountSid,
                password: authToken
            }
        }
    )
}
