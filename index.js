
const express = require('express');

//define the port number the server will listen on
const PORT = 3000;

//create an instance of an express application for the starting point
const app = express();

//start the server and listen on the specified port
app.listen(PORT, "0.0.0.0" ,function(){
    console.log(`server is running on port ${PORT}`);
} )

