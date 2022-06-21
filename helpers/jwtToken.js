require('dotenv').config();
const jwt = require('jsonwebtoken');
const key = process.env.JWT_KEY;
module.exports ={
	sign: (data)=> jwt.sign({ ...data }, key),
	verify: (token)=>jwt.verify(token, key)

};