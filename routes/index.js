const express = require('express');
// const Posts = require('../models/blog/posts')
const router = express.Router()

router.get('/', async (req, res) => {
	res.json({
		status: true
	})
})

router.get('/*', async (req, resp) => {
	resp.redirect('/');
})

module.exports = router;