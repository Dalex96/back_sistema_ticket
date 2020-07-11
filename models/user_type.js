const mongoose = require('mongoose')

const { Schema } = mongoose

const UserTypeSchema = new Schema({
	nombre: { type: String, required: true }, 
})


module.exports = mongoose.model('type', UserTypeSchema)