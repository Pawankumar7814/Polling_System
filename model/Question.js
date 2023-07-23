// Import modules
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const questionSchema = new Schema({
    title: { type: String, required: true },
    options: [{ type: mongoose.Schema.Types.ObjectId, ref: "options" }],
}, {
    timestamps: true,
});

const Question = mongoose.model("questions", questionSchema);

// Exporting the model of question
module.exports = Question;