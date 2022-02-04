module.exports = { 
    key:"ConfirmationMail",
    async handle({data}){
        const {message} = data;
        console.log("ConfirmationMail");
    },
}