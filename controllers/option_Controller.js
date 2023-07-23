const Question = require('../model/Question');
const Option = require('../model/Option');

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
            add_vote: `http://localhost:3000/api/v1/options/${opt._id}/add_vote`,
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
    }
}