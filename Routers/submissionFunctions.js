const Submission = require('../models/Submission');


async function uploadPhotoToService(photo){
    //logic here
    //return url;
}

exports.submitText = async (req, res) => {
    try {
        const url = await uploadPhotoToService(req.body.photoData);
        const newSubmission = new Submission({
            photoURL,
            rating: req.body.rating,
            reviewText: req.body.reviewText,
            nickname: req.body.nickname,
            location: req.body.location
        });

        await newSubmission.save();

        res.json({ message: 'Submission saved!', submission: newSubmission });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error saving submission' });
    }
}

//seperate route for photo submission, returns an html link message
exports.submitPhoto = async (req, res) => {
    try{
        const url = await uploadPhotoToSrvice(req); //should return a url
        res.json({ url });
    }
    catch(err){
        res.status(500).json({ message: 'Error uploading photo' });
    }
}


