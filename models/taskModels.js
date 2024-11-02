const mongoose = require('mongoose');

const tasksSchema = mongoose.Schema({
    user_id : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref: "User"
     },
     movie : {
        type: Object,
        required: [ true , "Please add the movie"]
     },
      taskStatus:{
        type: String
     },
     
},
    {
        timestamps : true,
    }
);

module.exports = mongoose.model("Task" , tasksSchema );
