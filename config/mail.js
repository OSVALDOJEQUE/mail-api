module.exports = {
    service: "gmail",
    port: process.env.MAIL_PORT, 
    secure: false,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
};