// Import modules
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const questionSchema = new Schema({
    title: { type: String, require: true },
    options: { type: mongoose.Schema.Types.ObjectId, ref: 'Option' }
}, {
    timestamps: true
});

const Question = mongoose.model('questions', questionSchema);

module.exports = Question;