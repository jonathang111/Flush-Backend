const express = require('express');
const routerFunctions = require('submissionFunctions');
const ser = express.Router();;

ser.post('/uploadPhoto', routerFunctions.submitPhoto);
ser.post('/submitText', routerFunctions.submitText);

module.exports = ser;