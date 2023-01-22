import * as functions from "firebase-functions";

// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// twilio send message on date
// https://www.twilio.com/docs/sms/scheduling
// https://www.twilio.com/docs/sms/send-messages
const accountSid = "AC67cfca8abb9523d87221c2a11b4dbbb9"
const authToken = "620f7c80f26575c232aef6634340920e";

const client = require('twilio')(accountSid, authToken);

export const sendMsgOnDate = functions.pubsub.schedule('every 5 minutes').onRun((context) => {
    client.messages
        .create({
            body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
            from: '+17258009659',
            to: '+19177777777'
        })
        .then((message: { sid: any; }) => console.log(message.sid));
})
