/*
* @Author: fatoni
* @Date:   2019-07-01 20:09:45
* @Last Modified by:   fatoni
* @Last Modified time: 2019-07-01 20:44:12
*/
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
},{
	timestamps: true
});

module.exports = mongoose.model('users', userSchema);