const express = require('express');
const router = express.Router();
const optionController = require('../../../controllers/option_Controller');

router.post('/:id/createOption', optionController.createOption);
router.post('/:id/addVote', optionController.addVote);
router.delete('/:id/deleteOption', optionController.deleteOption);

module.exports = router;