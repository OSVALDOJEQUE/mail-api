const Queue = require("../lib/Queue");

exports.sendMail =  async (req,res)=>{
  const {username,email,subject,text} = req.body;

  const message = {
    username,
    email,
    subject,
    text,
  };

  // //Adicionar job Registation Mail na Fila
  await Queue.add("RegistrationMail",{ message});

  // await Queue.add("ConfirmationMail",{ message}); 

  return res.json(message);   
  };  