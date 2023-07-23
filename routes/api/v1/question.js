const express = require('express');
const router = express.Router();
const questionController = require('../../../controllers/question_Controller');

router.post('/createQuestion', questionController.createQuestion);
router.get('/viewQuestion/:id', questionController.viewQuestion);

module.exports = router;