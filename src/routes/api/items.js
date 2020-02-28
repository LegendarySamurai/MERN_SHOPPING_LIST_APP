const express = require('express');
const router = express.Router();

// Item model
const Item = require('../../models/item.model');

// @route:        GET api/items
// @description:  Get all items
// @access:       Public
/*
router.get('/', (req, res) => {
	Item.find()
		.then(items => res.send(items))
});
*/

router.get('/', async (req, res) => {
	try {
		const items = await Item.find();
		res.send(items);
	}
	catch (err) {
		console.log(err);
	}
});



// @route:        POST api/items
// @description:  Create a Post
// @access:       Public

/*
router.post('/', (req, res) => {
	const item = new Item({
		name: req.body.name
	});

	item.save()
		.then(item => res.send(item));
});
*/

router.post('/', async (req, res) => {
	const item = new Item(req.body);

	try {
		await item.save();
		res.send(item);
	}
	catch (err) {
		console.log(err);
	}
});

module.exports = router;
