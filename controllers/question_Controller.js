const Question = require('../model/Question');
const Option = require('../model/Option');
// const { json } = require('body-parser');

// To create a new question
module.exports.createQuestion = async function(req, res) {
    try {
        console.log("The req.body ", req.body);
        // console.log(req.url);
        const que = await Question.create(req.body);
        // console.log(que);
        res.send(que);
    } catch (err) {
        res.send(`Error! occur while creating a question ${err}`);
        res.status(500).send("Internal Server Error");
        return;
    }
}

// To view the question
module.exports.viewQuestion = async function(req, res) {
    try {
        console.log(req.params.id);
        const que = await Question.findById(req.params.id).populate("options");

        if (que) {
            res.send(que);
        } else {
            return res.send("No records");
        }
    } catch (err) {
        console.log("Error while finding the question ", err);
        res.status(500).send("Error while viewing the question");
        return;
    }
}

// To delete the Question


module.exports.deleteQuestion = async function(req, res) {
    try {
        res.send(req.params.id);
        // Find the question using id
        const question = await Question.findById(req.params.id);
        console.log(question);
        // If question exists
        if (question) {
            await Question.deleteOne({ _id: req.params.id }); // Correct the usage of deleteOne()
            await Option.deleteMany({ question: req.params.id }); // Correct the usage of deleteMany()
            res.send("Question has been deleted successfully");
            // console.log("Question has been deleted successfully.");
        } else {
            res.send("Question doesn't exist");
            // console.log("Question doesn't exist.");
        }
    } catch (error) {
        console.log("Error while deleting the question", error);
        res.status(500).send("Error while deleting the question");
        return;
    }
}