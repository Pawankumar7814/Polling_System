const express = require('express');
const router = express.Router();
const optionController = require('../../../controllers/option_Controller');

router.get('/createOption', (req, res) => {
    res.send('Option routes')
});

module.exports = router;