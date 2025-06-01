const Submission = require('../models/Submission');

exports.getOneSubmission = async (req, res) => {
    try{
    const oldestUnapproved = await Submission.findOne({ accepted: false })
    .sort({ createdAt: 1})
    .exec();

    if(!oldestUnapproved){
        return res.status(404).json({ message: 'No unapproved submission found' });
    }

    res.json(oldestUnapproved);
    } catch(err){
        console.error('Error in getOneSubmission:', err);
        res.status(500).json({ message: 'Error fetching submission'});
    }
}