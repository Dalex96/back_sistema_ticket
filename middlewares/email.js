const Email = require('../models/email')
const middlewares = {
  
  //   ValidEmail : async function (req, res, next) {
		// const validEmail = await Email.findOne({"email":req.body.email})
		// if(validEmail){
		// 	return res.status(400).json({ 
		// 	    "errors": [
		// 	        {
		// 	            "value": req.body.email,
		// 	            "msg": "The value already exists",
		// 	            "param": "email",
		// 	            "location": "body"
		// 	        }
		// 	    ] 
		// 	});
		// }
		// next()
  //   },    
  //   ValidId : async function (req, res, next) {
		// const validIdEmail = await Email.findOne({"_id":req.params.id})
		// if(!validIdEmail){
		// 	return res.status(400).json({ 
		// 	    "errors": [
		// 	        {
		// 	            "value": req.body.email,
		// 	            "msg": "Email does not exist",
		// 	            "param": "email",
		// 	            "location": "body"
		// 	        }
		// 	    ] 
		// 	});
		// }
		// next()
  //   },
};
module.exports = middlewares;