
const express = require('express');

const helloRoute = require('./routes/hello');

//define the port number the server will listen on
const PORT = 3000;

//create an instance of an express application for the starting point
const app = express();

//middleware to register routes or to mount routes

app.use(helloRoute);

//start the server and listen on the specified port
app.listen(PORT, "0.0.0.0" ,function(){
    console.log(`server is running on port ${PORT}`);
} )

