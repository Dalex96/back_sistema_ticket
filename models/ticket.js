const mongoose = require('mongoose')

const { Schema } = mongoose

const TicketSchema = new Schema({
	id_user: {type: Schema.ObjectId, ref: 'user' }, 
	ticket_pedido: { type: String, required: true }, 
})


module.exports = mongoose.model('ticket', TicketSchema)