// Importing modules
const express = require('express');
require('dotenv').config();
const db = require('./config/mongoose');
const app = express(); // Creating an express application
const port = 4200; // Setting up the port number

// Routes
app.use('/', require('./routes')); // Route to routing pages (By degfault it will fgo tp the index file)

// Starting the server
app.listen(port, (err) => {
    if (err) {
        // console.log("Error while starting the application error is ", err);
        console.log(`Error while starting the aplication error is ${err}`);
        return;
    }
    console.log(`The server is running on ${port}`);
});