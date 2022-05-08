/*
    This is our express middleware set-up,
    its seperated from our server set-up to 
    enable seperation of concern and clearity
*/

const express = require('express');

const app = express();
app.use(express.json());

module.exports = app;