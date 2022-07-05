const Queue = require("../lib/Queue");

const sendMail =  async (req,res)=>{
  const {username,email,subject,text} = req.body;

  const message = {
    username,
    email,
    subject,
    text,
  };

  await Queue.add("RegistrationMail",{ message});

  return res.json(message);   
  };

  const resetPassword =  async (req,res)=>{
    const {email,text} = req.body;
    const subject = "Recuperação da senha de utilizador"
  
    const message = {
      email,
      subject,
      text,
    };

    await Queue.add("ResetPassword",{ message});
  
    return res.json(message);   
  };

  const form =  async (req,res)=>{
    const {username,email,subject,text} = req.body;

    const message = {
      username,
      email,
      subject,
      text,
    };
    
    await Queue.add("Form",{ message});
    
    return res.json(message);   
 };
  

    module.exports ={
      sendMail,
      resetPassword,
      form
    }