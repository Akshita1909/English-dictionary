const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');



const auth = {
    auth: {
        api_key: '9ac8cb56a715d751b7428df224b28ee8-19806d14-d65cde48',
        domain: 'sandboxe6cc17c1269c45e1b70b2246ab336da3.mailgun.org',
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));


const sendMail = (email, subject, text, cb) => {
const mailOptions = {
    from: email,
    to: 'enter your email address',
    subject,
    text
};

transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
        cb(err, null);
    } else {
        cb(null, data);
    }
});
}

module.exports = sendMail;

