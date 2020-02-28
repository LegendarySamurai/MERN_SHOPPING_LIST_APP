const mongoose = require('mongoose');

// DB Config
const db = require('./config/keys').mongoURI;


// Connect to Mongo DB
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log('Mongo DB connected...'))
	.catch(err => console.log(err));
