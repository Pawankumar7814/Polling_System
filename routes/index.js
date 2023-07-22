// Importing modules
const express = require('express');
const router = express.Router();

// Route to API
router.get('/', (req, res) => {
    console.log('Router access');
});


module.exports = router;