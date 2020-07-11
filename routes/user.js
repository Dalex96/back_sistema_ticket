const express = require('express')
// const { body, sanitizeBody, validationResult } = require('express-validator');
// const ValidUser = require('../middlewares/user').ValidUser
// const ValidId = require('../middlewares/email').ValidId
const router = express.Router()

const User = require('../models/user')

//All list
router.get('/', async (req, resp) => {
	const Users = await User.find()
	if(Users){
		resp.json(Users)
	}
	resp.json({})
})

//One list
router.get('/:id', async (req, resp) => {
	await User.findById(req.params.id)
			.populate("type")
		    .exec(function(err, person) {
		    	console.log(person)
				if(person){
					resp.json(person)
				}
		        // do something.
		        // variable `person` contains the final populated data
		    });		

})

router.get('/:id/email', async (req, resp) => {
	await User.findOne({email: req.params.id})
			.populate("type")
		    .exec(function(err, person) {
				if(person){
					resp.json(person)
				}
		        // do something.
		        // variable `person` contains the final populated data
		    });		

})

// Create
router.post('/', async (req, resp) => {
	const { password, nombre, id_tipouser} = req.body
	const email = req.body.email.toLowerCase()
	const newUser = new User({email, password, nombre, id_tipouser})
	const request = await newUser.save()
	if(request){
		resp.json({
			status: '200',
			message: 'User Created'
		})
	}
})

// Update
router.put('/:id', async (req, resp) => {

	const { password, nombre, id_tipouser} = req.body
	const email = req.body.email.toLowerCase()	
	const updateUser = {email, password, nombre, id_tipouser}
	const request = await User.findByIdAndUpdate(req.params.id, updateUser)
	if(request){
		resp.json({
			status: '200',
			message: 'User Updated'
		})
	}

})

// Delete
router.delete('/:id', async (req, resp) => {
	const delUser = await User.findByIdAndRemove(req.params.id)
	if(delUser){
		resp.json({
			status: '201',
			message: 'User Deleted'
		})
	}

})


module.exports = router