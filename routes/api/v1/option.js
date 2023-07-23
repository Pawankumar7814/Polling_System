// Importing modules and Controller
const express = require('express');
const router = express.Router();
const optionController = require('../../../controllers/option_Controller');

// Route to create a new option
router.post('/:id/createOption', optionController.createOption);

// Route to add a vote to a specific option
router.post('/:id/addVote', optionController.addVote);

// Route to delete a specific option
router.delete('/:id/deleteOption', optionController.deleteOption);

module.exports = router;