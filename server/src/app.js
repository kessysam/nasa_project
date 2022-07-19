/*
    This is our express middleware set-up,
    its seperated from our server set-up to 
    enable seperation of concern and clearity
*/

const express = require('express');
const cors = require('cors');

const planetsRouter = require('./routes/planets.router');

const app = express({
    origin:'http://localhost:3000'
});
app.use(cors());
app.use(express.json());
app.use(planetsRouter);

module.exports = app;