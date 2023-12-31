const Question = require('../model/Question');
const Option = require('../model/Option');

// To add an option 
module.exports.createOption = async function(req, res) {
    try {
        console.log(req.body, req.params.id);
        // Create the option
        const opt = await Option.create({
            name: req.body.name,
            question: req.params.id,
        });
        // Add the 'add_vote' property to the created option
        const updateOpt = await Option.findByIdAndUpdate(opt._id, {
            addVote: `http://localhost:3000/api/v1/options/${opt._id}/addVote`,
        });
        updateOpt.save();
        // Now searching the question so that we can append the option to the 'options' array
        const ques = await Question.findById(req.params.id);
        if (ques) {
            ques.options.push(updateOpt);
            await ques.save(); // Make sure to await the save operation
            // console.log(ques);
            res.send(ques);
        } else {
            res.send('Question does not exist');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('An error occurred');
        return;
    }
}

// To add a vote
module.exports.addVote = async function(req, res) {
    try {
        console.log(req.params.id);
        // Here we will add vote or increase the vote counting by 1
        const option = await Option.findByIdAndUpdate(req.params.id, { $inc: { vote: 1 } });

        if (option) {
            await option.save();
            console.log(option);
            return res.json({ "message": "Successfully voted", "data": option });
        } else {
            return res.send('Option does not exist ');
        }
    } catch (err) {
        console.log("Error while voting ", err);
        res.status(500).send('An error occurred');
        return
    }
}

// To delete an option
module.exports.deleteOption = async function(req, res) {
    try {
        const option = await Option.findById(req.params.id);
        if (option) {
            // Fetching the question ID
            const question_ID = option.question;
            // Removing the option from the question
            const question = await Question.findByIdAndUpdate(question_ID, {
                $pull: {
                    options: req.params.id
                }
            });
            // Removing the option
            await Option.findByIdAndDelete(req.params.id);
            // console.log("Option deleted Successfully");
            return res.send("Option deleted Successfully");
        } else {
            throw new Error(`No such option with id ${req.params.id}`);
        }
    } catch (err) {
        console.log(err);
        res.status(500).send('An error occurred');
        return;
    }
}