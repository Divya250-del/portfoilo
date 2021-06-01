const mongoose=require("mongoose");
const  contactschema= new mongoose.Schema({
    Name :{
        type:String,
        required:true,
        unique:true
    },

    Email:{
        type:String,
        required:true,
        unique:true
    },
    subject :{
        type:String,
        required:true
    },
    message :{
        type:String,
        required:true
    }
})
const Sendme= new mongoose.model("Register", contactschema);
module.exports=Sendme;