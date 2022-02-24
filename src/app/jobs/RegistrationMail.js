const Mail= require("../lib/Mail"); 
const fs = require("fs");
const handlebars = require("handlebars");

const path = require("path");

module.exports = {
    key:"RegistrationMail",
    async handle({data}){
        const filePath = path.join(__dirname,'../../../mail.html');
        const source = fs.readFileSync(filePath, 'utf-8').toString();
        const template = handlebars.compile(source);
        const {message} = data;
        let year = new Date().getFullYear();;
        const replacements = {
            username:message.username ?? 'Utilizador',
            text: message.text,
            year
        };

        const html = template(replacements)
        
            await Mail.sendMail({
                from: process.env.MAIL_USER,
                to: message.email,
                subject: message.subject,
                html: html,
                text: message.text
            });

    },
}


