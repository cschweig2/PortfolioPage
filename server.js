const nodemailer = require('nodemailer');
const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config()
const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_PASS = process.env.GMAIL_PASS;
const port = 3001;

app.listen(port, () => {
    console.log(`example app listening at http://localhost:${port}`);
});

app.options('/contact', cors());

// instantiate the SMTP server
const smtpTrans = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: 'chelraebecker@gmail.com',
        pass: `${process.env.GMAIL_PASS}`
    }
});

smtpTrans.verify( function (error, success) {
    if (error) {
        console.log(error)
    } else {
        console.log('server is ready to take our messages');
    }
});

// POST route from contact form
app.post('/contact', cors(), (req, res, next) => {

    let firstName = req.firstName;
    let lastName = req.lastName;
    let email = req.email;
    let phone = req.phone;
    let message = req.message;
    console.log(firstName);

    let mail = {
        from: `${firstName} ${lastName}`,
        to: 'chelraebecker@gmail.com',
        subject: 'New message from portfolio website!',
        text: `Message: ${message} /n Email: ${email} /n Phone: ${phone}`
    }
    console.log(mail);

    smtpTrans.sendMail(mail, (err, data) => {
        console.log('sending mail');
        if (err) {
            console.log(err);
            res.json({
                status: 'fail'
            });
        } else {
            console.log('success');
            res.json({
                status: 'success'
            });
        }
    });
});
