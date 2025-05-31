const express = require ('express'); //pulls class from express lib
const app = express(); //creates an express server instance
const port = 3000; //port to use
const submission = require('./Routers/submissions');
const mongoose = require('./db/Connection')

//if applied to app, it is globabl, if you want local to router, apply to router only.
app.use(express.json());

app.use('/user', submission); //connects to submission file and activaes upon post /user

app.post('/api/hello', (req, res) => {
    console.log('Recieved body request', req.body);
    res.json({message: 'Hello from server!'});
});

//to send data back, i.e. response, you run res.send(data) or to send json res.json(data), both send data automatically
//managed by express


app.listen(port, () => { //app will listen at port 300
    console.log(`server listening at http://localhost:${port}`);
});