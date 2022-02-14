require("dotenv").config();
const express = require("express")
const bodyParser = require("body-parser")
const app = express();
app.use(require("cors")());

// create application/json parser
app.use(bodyParser.json());

// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }));


const MailController = require("./app/Controllers/MailController");


app.post('/mail', MailController.sendMail);

const PORT = process.env.PORT || 3008;
app.listen(PORT, () => console.log("Servidor esta rodando na porta:" + PORT));



  

  
