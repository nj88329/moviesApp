const mongoose = require('mongoose');

const tasksSchema = mongoose.Schema({
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
