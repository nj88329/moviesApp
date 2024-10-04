const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
    uid : { type: String , required :true ,unique : true},
    name : {
        type: String,
        required: [ true , "Please add the user name"]
     },
     email:{
        type: String,
        required : [ true , "Please add the user email address"],
        unique : [true , "Email already taken" ]
     },
    image:{
        type:String
    }
},
    {
        timestamps : true,
    }
);

module.exports = mongoose.model("Users" , usersSchema );
