const Mail= require("../lib/Mail"); 

module.exports = {
    key:"RegistationMail",
    async handle({data}){
        const {message} = data;
            await Mail.sendMail({
                from: process.env.MAIL_USER,
                to: message.email,
                subject: message.subject,
                html: message.text
            });

    },
}


