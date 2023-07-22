const express = require('express');
const router = express.Router();
const questionController = require('../../../controllers/question_Controller');

router.get('/createQuestion', (req, res) => {
    res.send('Question routes')
});

module.exports = router;