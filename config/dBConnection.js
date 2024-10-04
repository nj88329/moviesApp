const mongoose = require('mongoose');

const connectDb = async () => {
    try {
      const conn = await mongoose.connect(`${process.env.CONNECTION_STRING}`);
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  }

 


// connectDb().catch(console.error);
 module.exports = { connectDb }  ;