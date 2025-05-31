const routerFunctions = require('./submissionFunctions.js');
const express = require('express');
const ser = express.Router();

ser.post('/uploadPhoto', routerFunctions.submitPhoto);
ser.post('/submitText', routerFunctions.submitText);

module.exports = ser;