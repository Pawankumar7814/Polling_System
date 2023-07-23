// Importing modules and Controller
const express = require('express');
const router = express.Router();
const questionController = require('../../../controllers/question_Controller');

// Route to Create a question
router.post('/createQuestion', questionController.createQuestion);

// Route to view a specific question
router.get('/viewQuestion/:id', questionController.viewQuestion);

// Route to delete a specific question
router.delete('/:id/deleteQuestion', questionController.deleteQuestion);

module.exports = router;