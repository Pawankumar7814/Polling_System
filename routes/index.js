// Importing modules
const express = require('express');
const router = express.Router();

// Route to API
router.use('/api', require('./api'));

module.exports = router;