// Importing modules
const express = require('express');
const router = express.Router();

// Route to question
router.use('/question', require('./question'));

// Route to option
router.use('/option', require('./option'));

// Export the router
module.exports = router;