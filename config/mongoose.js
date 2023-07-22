// Importing module
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DatabaseURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000
});

mongoose.connection.once('open', function() {
    console.log(`Database has been connected successfully.`);
});

const connectDB = mongoose.connection;

// Exporting the module
module.exports = connectDB;