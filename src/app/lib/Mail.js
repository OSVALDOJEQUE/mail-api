const nodemailer = require("nodemailer");
const mailConfig = require("../../config/mail");

const sendMail = nodemailer.createTransport(mailConfig);
module.exports = sendMail;