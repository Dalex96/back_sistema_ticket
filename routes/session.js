const express = require('express')
const { body, sanitizeBody, validationResult } = require('express-validator');
// const veryFyToken = require('../middlewares/newUser').veryFyToken
// const jwt = require('jsonwebtoken')
// const config = require('../configs/config')
const router = express.Router()

const User = require('../models/user')
const Type = require('../models/user_type')

// Login

router.post('/login', 
	[
	  body('email')
	    .isEmail()
	    .normalizeEmail(),
	  sanitizeBody('notifyOnReply').toBoolean()
	],
	async (req, resp) => {
	//resp.set('Access-Control-Allow-Origin', '*')
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return resp.status(406).json({ 
			errors: errors.array() 
		});
	}

	const validUser = await User.findOne({"email":req.body.email})
	if(validUser){
		if(req.body.password === validUser.password){
			req.session.email = req.body.email
			req.session.user = validUser._id
			const rolUser = await Type.findOne({"_id":validUser.id_tipouser})
			if(rolUser.nombre === 'admin'){
				req.session.admin = true;
			}else{
				req.session.admin = false
			}
			resp.json({
				mensaje: 'Autenticación correcta',
				data: req.session
			});
		}else{
			return resp.status(401).json({
				status: '401',
				message: 'Password Invalido!'
			})			
		}
	}else{
		return resp.status(401).json({
			status: '401',
			message: 'Email Invalido!'
		})
	}

})

// Logout endpoint
router.get('/logout', function (req, res) {
  req.session.destroy();
  res.send("logout success!");
});


module.exports = router