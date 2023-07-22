// Importing modules
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const optionSchema = new Schema({
    name: { type: String, require: true },
    question: { type: mongoose.Schema.Types.ObjectId, require: true },
    vote: { type: Number, default: 0 },
    addVote: { type: String }
}, {
    timestamps: true
});

const Option = mongoose.model('options', optionSchema);

module.exports = Option;