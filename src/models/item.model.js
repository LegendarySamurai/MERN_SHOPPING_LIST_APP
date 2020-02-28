const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const itemSchema = new Schema({
	name: {
		type: String,
		required:  true
	},
	date: {
		type: Date,
		default: Date.now()
	}
});

// defining a User model
const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
