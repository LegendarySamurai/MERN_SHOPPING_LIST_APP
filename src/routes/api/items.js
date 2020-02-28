const express = require('express');
const router = express.Router();

// Item model
const Item = require('../../models/item.model');

// @route:        GET api/items
// @description:  Get all items
// @access:       Public
// router.get('/', (req, res) => {
// 	console.log('router.get() is working...');
// 	Item.find()
// 		.then(items => res.send(items))
// });

router.get('/', (req, res) => {
	Item.find()
		.then(items => res.json(items));
});

module.exports = router;
