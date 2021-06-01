const express = require("express");
const path = require("path");
const app = express();
const fs = require("fs");

const port=process.env.PORT || 80;

//mongodb connection file
require("./conn")

//mongodb schema file
const Register=require("./monschema")

app.use('/static', express.static('static'));
app.use(express.urlencoded());

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get("/", (req, res) => {
    
    res.status(404).render('demo.pug');
    
});
app.post("/register", async(req, res) => {
    try{
        const registerEmployee = new Register({
            Name: req.body.Name,
            Email: req.body.Email,
            subject: req.body.subject,
            message: req.body.message
        });
        const registered = await registerEmployee.save();
        res.render("index");

    }


   catch(error){
        res.status(400).send(error);      

   }
    
    
});

app.listen(port, () => {
    console.log("listening the port at 80");
});
// app.get("/about", (req, res) => {
//     res.send("Hello from about");
// });
// app.get("/contact", (req, res) => {
//     res.status(404).send("Hello from the contact");
// });