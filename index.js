require('dotenv').config();

const nodemailer = require('nodemailer')
const express = require('express')
const app = express()
const port = 3000


app.listen(port, () => {
  console.log(`nodemailerProject is listening at http://localhost:${port}`)
});

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN
  }
});

// let transporter = nodemailer.createTransport({
//     service: 'yahoo',
//     auth: {
//       user: 'merikek_jes@yahoo.com',
//       pass: 'MDJA2geda',
//     }
//   })

let mailOptions = {
  from: process.env.MAIL_USERNAME,
  to: "kdankyira.development@gmail.com",
  subject: "Nodemailer Test",
  text: "This means it has worked. Hurrayy!!"
};

transporter.sendMail(mailOptions, (err, data) => {
  if (err) {
    console.log(`Error Occured:${err}`)
    } else {
      console.log("Email Sent!")
    }
});