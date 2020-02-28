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
// @description:  Create an item
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


// @route:        DELETE api/items/:id
// @description:  Delete an item
// @access:       Public

/*
router.delete('/:id', (req, res) => {
	Item.findById(req.params.id)
		.then(item => item.remove().then(() => res.send({ success: 'Item removed' })))
		.catch(err => res.status(404).send({ failure: 'Item with the indicated id does not exist' }));
});
*/

router.delete('/:id', async (req, res) => {
	try {
		const item = await Item.findById(req.params.id);
		await item.remove();
		res.send({ success: 'Item removed' })
	}
	catch (err) {
		res.status(404).send({ failure: 'Item with the indicated id does not exist' });
	}
});


module.exports = router;
