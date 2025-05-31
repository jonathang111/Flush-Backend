const mongoose = require('../db/Connection');
//mongoose.schema only creates an in mmeory js object, that defines the document layout.
//new creates an instance of that object, which we then plug into mongoose.model() does 
//the model get registered under the name Submission and gives you the ability to create() documents.
const SubmissionLayout = new mongoose.Schema({ //create blueprint object
    photoURL: String,
    rating: Number,
    reviewText: String,
    nickname: String,
    location: String,
    submittedAt: {type: Date, defualt: Date.now}
});

//creates model class, has static functions liek find(), create() update(),
//but if you plan on plugging it in you must create an instance, either create or save after creation.
module.exports = mongoose.model('Submission', SubmissionLayout);