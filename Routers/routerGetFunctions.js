const Submission = require('../models/Submission');

exports.getOneUnapproved = async (req, res) => {
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
};

exports.getAllApprovedSubmissions = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limi) || 10;

    try{
        const submissions = await Submission.find({accepted : true})
        .sort({createdAt: -1})
        .skip((page-1) * limit)
        .limit(limit)
        .exec();

        res.json(submissions);
    }   catch(err){
        console.error('Error in getAllApprovedSubmissions:', err);
        res.status(500).json({ message: 'Error fetching submissions', error: err.message });
    }
};