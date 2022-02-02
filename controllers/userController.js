const userModel = require('../models/userModel');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

exports.userRegister = async (req, res) => {
	try {
		const { userName, passWord, userPhone } = req.body;
        const isUserExists = await userModel.findOne({userName:userName})
        if(isUserExists){
            return res.json({message:"UserName already taken"}).status(400)
        }
		const userData = await userModel.create({
			userName,
			userPhone,
			passWord: bcrypt.hashSync(passWord, 15),
		});
		if (userData) {
			return res.json({ message: ' user register success...!' }).status(200);
		}
		res.json({ message: 'Error in User register...!' }).status(400);
	} catch (err) {
		if (err) {
			throw err;
		}
		res.json({ serverMsg: serverErrorMessage }).status(500);
	}
};
exports.login = async(req,res) => {
    try {
        const { userName,passWord } = req.body
        const user = await userModel.findOne({userName:userName})
        if(!user){
            return res.json({message:"User not found"}).status(400)
        }
       const isMatch = await bcrypt.compareSync(passWord,user.passWord)
       if(!isMatch){
           return res.json({message:"Password is incorrect"}).status(400)
       }
       const userAuthToken = jwt.sign({ _id: user._id }, 'keyboradcat', {
        expiresIn: '2h',
    });
    const userLoginData = {
        _id: user._id,
        userName: user.userName,
        userPhone: user.userPhone,
    };
    res.header('userAuthToken', userAuthToken)
        .json({
            userAuthToken,
            logginedUser: userLoginData,
        })
        .status(200);
    } catch (err) {
        if(err) throw err;
    }
}