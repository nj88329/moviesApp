const admin = require('./assets/firebase')
const fs = require('fs');
const express  = require('express');
const { connectDb } = require("./config/dbConnection");
const cors = require('cors');
const { upload, multer }= require('./controllers/storageController');

const path = require('path');
require("dotenv").config();

const app = express();
app.use(cors());


connectDb();

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
    res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
    next();
  });


app.use( '/add' , require('./routes/taskRoute'));
app.use('/auth', require('./routes/googleAuthRoute'));

app.post("/upload", upload.single('file'), (req, res) => {
  console.log("Body: ", req.body);
  console.log("File: ", req.file);
  res.status(200).json({
    message: 'File uploaded successfully!',
    file: req.file,
  });
});


app.listen(PORT , ()=>{
    console.log(`Server running on port ${PORT}`)
});
