// Import require modules
const express = require('express');
const router = express.Router();

// Route to Questions
router.use('/v1', require('./v1'));

// router.get('/v1', (req, res) => {
//     res.send('Access to the api routes');
// })

module.exports = router;