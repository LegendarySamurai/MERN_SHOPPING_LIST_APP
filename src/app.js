const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Body parser Middleware
app.use(bodyParser.json());

module.exports = app;
