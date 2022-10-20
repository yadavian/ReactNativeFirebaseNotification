var admin = require("firebase-admin");
var serviceAccount = require("./rnfirebasenotification-2f9e3-firebase-adminsdk-p9opv-cd3ab110fe.json");

const express = require('express');
const { json } = require("express");
const app = express()
app.use(express.json())

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const message = {
    notification: {
        title: "Test From Post Man",
        body: "Busy of Node Js"
    },
    token: "fEMi5oBIQNWY-wJIyaVjOJ:APA91bG0tE1xtGkMG_fbb3HQHAsIKneAmRdHShHIuYipfe855EUGAW66qqbRYJch0QSBdjjHam9KcTGHpaP4x6aA1fn2mSiSuUkevXqm-Fslce5MjGhtZ2DCQhkAVkrk3exIUKtk8xbC"
}
// app.post('/send-notification', async (req, res) => {
admin.messaging().send(message).then(res => {
    console.log("Send success.");
}).catch(error => {
    console.log(error);
})
// })

// app.listen(3000,()=>{
//     console.log("========server running=======")
// });