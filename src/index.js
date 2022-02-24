require("dotenv").config();
const express = require("express")

const swagger = require("swagger-ui-express");

const swaggerDocs = require("./swagger.json");

const bodyParser = require("body-parser")
const app = express();
app.use(require("cors")());

// create application/json parser
app.use(bodyParser.json());

// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }));


const MailController = require("./app/Controllers/MailController");


app.use("/documentation", swagger.serve,swagger.setup(swaggerDocs))

app.post('/mail', MailController.sendMail);

app.post('/reset-password', MailController.resetPassword);

const PORT = process.env.PORT || 3008;
app.listen(PORT, () => console.log("Servidor esta rodando na porta:" + PORT));



  

  
