const mongoose = require('mongoose');

const URL = 'mongodb://localhost/prueba-smart-2020';

mongoose.connect(URL)
	.then(db => console.log('Db is connected') )
	.catch(err => console.error(err))

module.exports = mongoose;