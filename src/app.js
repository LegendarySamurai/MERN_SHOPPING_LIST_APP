const express = require('express');
require('./db/mongoose');
const bodyParser = require('body-parser');
const itemsRouter = require('./routes/api/items');

const app = express();

// Body parser Middleware
app.use(bodyParser.json());

// Use routes
app.use('/api/items', itemsRouter);

module.exports = app;
