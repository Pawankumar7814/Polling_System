const Question = require('../model/Question');
require('../model/Option');
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
    }
}

// To delete the Question
module.exports.deleteQuestion = async function(req, res) {
    try {

    } catch (error) {
        console.log("Error while deleting the question");
    }
}