const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    Username:{
        type:String,
        required: true
     },

     Phonenumber:{
         type:Number,
         required: true,
         unique:true
     },
     Email:{
        type:String,
        required: true
    },
    Password:{
        type:String,
        required: true
    },
    Confirmpassword:{
        type:String,
        required: true
    }

})

module.exports = mongoose.model("User",UserSchema);