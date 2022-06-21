require('dotenv').config();
const bcrypt = require('bcryptjs');
const salt = process.env.SALT;
module.exports = {
	hash: (value)=> bcrypt.hashSync(value, parseInt(salt)),
	compare:({value, hash})=> bcrypt.compareSync(value, hash)
};