const express = require('express');
const userRoutes = express.Router();
const userController = require('../controllers/userController') 
const jwt = require('jsonwebtoken');
//jwt middeleware
const jwtverify = (req,res,next) =>{
    const authHeader = req.headers.authorization;
	if (authHeader === undefined) {
		return res.json({ message: 'No Token Provided' }).status(401);
	}
	const token = authHeader.split(' ')[1];
	jwt.verify(token, 'keyboradcat', (err) => {
		if (err) {
			return res
				.json({ Error: err, Message: 'Authentication Failed' })
				.status(500);
		}
		next();
	});
}

userRoutes.post('/userRegister', userController.userRegister)
userRoutes.post('/userLogin',userController.login)
module.exports = userRoutes;
