const routerSubmissionFunctions = require('./routerSubmissionFunctions');
const routerGetFunctions = require('./routerGetFunctions');
const express = require('express');
const ser = express.Router();
const { storage } = require('./Cloudinary');
const multer = require('multer');

const parser = multer({storage: storage});

ser.post('/photo', parser.single('photo'), routerSubmissionFunctions.uploadPhoto);
ser.post('/text', routerSubmissionFunctions.submitText);
ser.get('/getOneUnapproved', routerGetFunctions.getOneUnapproved);
ser.get('/getAllApprovedSubmissions', routerGetFunctions.getAllApprovedSubmissions);

module.exports = ser;