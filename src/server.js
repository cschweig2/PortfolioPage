const nodemailer = require('nodemailer');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// POST route from contact form
app.post('/contact', (req, res) => {

    // instantiate the SMTP server
    const smtpTrans = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: GMAIL_USER,
            pass: GMAIL_PASS
        }
    });

    // specify what the email will look like
    const mailOpst = {
        from: 'contact form sender',
        to: GMAIL_USER,
        subject: 'New message from your website contact form',
        text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
    };

    // attempt to send the email
    smtpTrans.sendMail(mailOpts, (error, response) => {
        if (error) {
            res.render('contact-failure') // show a page indicating failure
        } else {
            res.render('contact-success') // show a page indicating success
        }
    });
});