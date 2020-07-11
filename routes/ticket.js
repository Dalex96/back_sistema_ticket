const express = require('express')
// const { body, sanitizeBody, validationResult } = require('express-validator');
// const ValidUser = require('../middlewares/user').ValidUser
// const ValidId = require('../middlewares/email').ValidId
const router = express.Router()

const Ticket = require('../models/ticket')

//All list
router.get('/', async (req, resp) => {
	const Types = await Ticket.find()
	if(Types){
		resp.json(Types)
	}
	resp.json({})
})

//One list
router.get('/:id', async (req, resp) => {
	const fieldTicket = await Ticket.findById(req.params.id)
	if(fieldTicket){
		resp.json(fieldTicket)
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

router.get('/:id/user', async (req, resp) => {
	const fieldTicketForUser = await Ticket.find({id_user: req.params.id})
	console.log(req.params.id)
	if(fieldTicketForUser){
		resp.json(fieldTicketForUser)
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
	const {ticket_pedido, id_user} = req.body
	const newTicket = new Ticket({ticket_pedido, id_user})
	const request = await newTicket.save()
	if(request){
		resp.json({
			status: '200',
			message: 'Ticket Created'
		})
	}
})

// Update
router.put('/:id', async (req, resp) => {

	const {ticket_pedido, id_user} = req.body
	const updateTicket = {ticket_pedido, id_user}
	const request = await Ticket.findByIdAndUpdate(req.params.id, updateTicket)
	if(request){
		resp.json({
			status: '200',
			message: 'Ticket Updated'
		})
	}

})

// Delete
router.delete('/:id', async (req, resp) => {
	const delTicket = await Ticket.findByIdAndRemove(req.params.id)
	if(delTicket){
		resp.json({
			status: '201',
			message: 'Ticket Deleted'
		})
	}

})


module.exports = router