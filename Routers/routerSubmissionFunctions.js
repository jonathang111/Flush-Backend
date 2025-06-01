const Submission = require('../models/Submission');

exports.uploadPhoto = async(req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  res.json({
    message: 'Photo uploaded!',
    url: req.file.path,   //cloudinary link.
  });
};

exports.submitText = async (req, res) => {
    try {
        const newSubmission = new Submission({
            photoURL : req.body.photoURL, //must be sent on frontend
            rating: req.body.rating,
            reviewText: req.body.reviewText,
            nickname: req.body.nickname,
            location: req.body.location,
            submission: false
        });

        await newSubmission.save();

        res.json({ message: 'Submission saved!', submission: newSubmission });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error saving submission' });
    }
}

