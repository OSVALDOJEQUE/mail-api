const Mail = require("../lib/Mail");

exports.sendMail =  async (req,res, next)=>{

    let { email, subject, text } = req.body;
    
    const message = {
      from: process.env.MAIL_USER,
      to: email,
      subject: subject,
      html: text
    };

    try {

      let info = await Mail.sendMail({
          from: process.env.MAIL_USER,
          to: email,
          subject: subject,
          html: text
      });
      res.status(200).json({
          "Message": message
      });
      console.log(info);
    } catch (error){
        res.send(error);
        console.log("error: ", error);
    }
    
  
  };