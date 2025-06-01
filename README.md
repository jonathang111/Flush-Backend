Structure:
This backend utilizes express, mongoose, multer, and cloudinary API. The main server is located in server.js, this is the "switchboard" of all incoming calls. 

All routers are located in the /Routers subdirectory. 


These are accessed with '/submission' basepath followed by one of the calls listed in the 'Submission Router Calls'. A usual call may look like this:

            const response = await fetch('http://localhost:3000/submission/text', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(submission)
            });

Submission Router Calls:
'/photo', POST: Takes in raw photo and will output a link to a cloudinary file.
    - The photo link should be used when you upload to '/text'
    Upon success with uploading a response of 
                { message: 'Photo uploaded!', url: req.file.path }

    else, a response of 

                    { message: 'No file uploaded' }

as well as an error status of 400 is returned.

'/text', POST: Takes a JSON of the following format:
    Submission Schema:
                    {
                    photoURL: String,
                    rating: Number,
                    reviewText: String,
                    nickname: String,
                    location: String,
                    submittedAt: {type: Date, defualt: Date.now},
                    accepted: { type: Boolean, default: true }
                    }

    This is then uploaded to the mongoDB database and responde of 

                { message: 'Submission saved!', submission: newSubmission }

    is returned in JSON format. If submission fails, a response of 

                    { message: 'Error saving submission' }

    as well as an error status 500 is returned.

'/getAllApprovedSubmissions', GET: Returns x amount of approved submissions. On the front end a call looks like

                '/submission/getAllApprovedSubmissions?page=y&limit=x'

Where 'limit = x' declares the number of returned json requests, and 'page = y' is used to keep track of the page so that submissions are not repeated. 
Upon success, x results are returned in the schema of Submission (listed above). 
If the request fails, you will recieve 

                { message: 'Error fetching submissions', error: err.message }

As well as an error code 500.