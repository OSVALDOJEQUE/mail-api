const Mail= require("../../lib/Mail");

module.exports = {
    key:"RegistationMail",
    async handle({data}){
        const {content} = data;
        try {

            let info = await Mail.sendMail({
                from: process.env.MAIL_USER,
                to: content.email,
                subject: content.subject,
                html: content.text
            });
            res.status(200).json({
                "Message": message
            });
            console.log(info);
          } catch (error){
              res.send(error);
              console.log("error: ", error);
          }

    },
}


