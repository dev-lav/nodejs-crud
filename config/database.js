/*
* @Author: fatoni
* @Date:   2019-07-01 19:49:45
* @Last Modified by:   fatoni
* @Last Modified time: 2019-07-01 19:52:44
*/
const mongoose = require("mongoose");

module.exports = () => {
	mongoose.connect( process.env.MONGO_URI, {
		useNewUrlParser: true
	}).then( () => {
		console.log("db connected");
	}).catch( error => {
		console.log("failed to connect");
		throw error;
	})
}