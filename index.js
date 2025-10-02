require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./routes/auth');
const bannerRouter = require('./routes/banner');

//define the port number the server will listen on
const PORT = process.env.PORT;

//create an instance of an express application for the starting point
const app = express();
const DB = process.env.MONGO_URI;
//middleware to register routes or to mount routes
app.use(express.json());
app.use(authRouter);
app.use(bannerRouter);

mongoose.connect(DB).then(()=>{
    console.log('MongoDB Connected');
});


//start the server and listen on the specified port
app.listen(PORT, "0.0.0.0" ,function(){
    console.log(`server is running on port ${PORT}`);
} )

