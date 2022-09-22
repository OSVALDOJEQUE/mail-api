const Mail= require("../lib/Mail"); 
const fs = require("fs");
const handlebars = require("handlebars");

const path = require("path");

module.exports = {
    key:"TeacherMail",
    async handle({data}){
        const filePath = path.join(__dirname,'../../mail/teacherMail.html');
        const source = fs.readFileSync(filePath, 'utf-8').toString();
        const template = handlebars.compile(source);
        const {message} = data;
        let year = new Date().getFullYear();

        const replacements = {
            username:message.username ?? 'Utilizador',
            password:message.password,
            email:message.user,
            year
        };
        
        const html = template(replacements)
        
            await Mail.sendMail({
                from: 'SIGA UEM <no-reply@uem.ac.mz>',
                to: message.email,
                subject: message.subject,
                html: html
            });
            console.log(data);

    },
}

// module.exports = { 
//     key:"TeacherMail",
//     async handle({data}){
//         const {message} = data;
//         console.log(message);
//     },
// }


