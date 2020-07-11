const express = require('express')
// const { body, sanitizeBody, validationResult } = require('express-validator');
// const ValidUser = require('../middlewares/user').ValidUser
// const ValidId = require('../middlewares/email').ValidId
const router = express.Router()

const UserType = require('../models/user_type')

//All list
router.get('/', async (req, resp) => {
	const Types = await UserType.find()
	if(Types){
		resp.json(Types)
	}
	resp.json({})
})

//One list
router.get('/:id', async (req, resp) => {
	const fieldUserType = await UserType.findById(req.params.id)
	if(fieldUserType){
		resp.json(fieldUserType)
	}
	resp.json({
	"errors": [
			{
			    "value": req.params.id,
			    "msg": "User does not exist",
			    "param": "id",
			    "location": "body"
			}
		]
	})

})

// Create
router.post('/', async (req, resp) => {
	const {nombre} = req.body
	const newUserType = new UserType({nombre})
	const request = await newUserType.save()
	if(request){
		resp.json({
			status: '200',
			message: 'UserType Created'
		})
	}
})

// Update
router.put('/:id', async (req, resp) => {

	const {nombre} = req.body
	const updateUserType = {nombre}
	const request = await UserType.findByIdAndUpdate(req.params.id, updateUserType)
	if(request){
		resp.json({
			status: '200',
			message: 'UserType Updated'
		})
	}

})

// Delete
router.delete('/:id', async (req, resp) => {
	const delUserType = await UserType.findByIdAndRemove(req.params.id)
	if(delUserType){
		resp.json({
			status: '201',
			message: 'UserType Deleted'
		})
	}

})


module.exports = router