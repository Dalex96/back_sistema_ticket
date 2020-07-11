const mongoose = require('mongoose')

const { Schema } = mongoose

const UsersSchema = new Schema({
	nombre: { type: String, required: true }, 
	email: { type: String, required: true }, 
	password: { type: String, required: true }, 
	id_tipouser: {type: Schema.ObjectId, ref: 'type' }
	// id_tipouser: {type: String, required: true }
})


module.exports = mongoose.model('user', UsersSchema)