// schedule sending messages for plants a-la twillio

import axios from "axios";

const accountSid = atob("QUM2N2NmY2E4YWJiOTUyM2Q4NzIyMWMyYTExYjRkYmJiOQo=")
const authToken = atob("YTg1NDY3NTAxMjc4NDM5MjNmMDc1OWY4ZDE3NDc0ZDQK")


export const sendMsgOnDate = async (date: Date, plant: string, phone: string) => {
    const params = new URLSearchParams();
    params.append('Body', `It's time to water your ${plant}!`);
    params.append('From', '+17258009659');
    params.append('To', phone);
    params.append('SendAt', date.getTime().toString())


    axios.post(
        `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
        params,
        {
            auth: {
                username: accountSid,
                password: authToken
            }
        }
    ).then(
        (response) => {
            let sid = response.data.get(
                'sid'
            )
            if (sid !== undefined) {
                console.log(`Message sent with SID: ${sid}`)
                return sid;
            } else {
                console.log(`Message not sent!`)
                return null;
            }
        }
    ).catch(
        (error) => {
            console.log(error)
            return null;
        }
    )
}

export const cancelMsg = (sid: string) => {
    let params = new URLSearchParams();
    params.append('Status', 'canceled')
    axios.post(
        `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages/${sid}.json`,
        params,
        {
            auth: {
                username: accountSid,
                password: authToken
            }
        }
    )
}
