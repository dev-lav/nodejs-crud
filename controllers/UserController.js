/*
* @Author: fatoni
* @Date:   2019-07-01 20:08:49
* @Last Modified by:   fatoni
* @Last Modified time: 2019-07-01 21:12:34
*/
const UserModel = require('./../models/User');

const userController = {};

userController.index = async (req, res) => {
	const users = await UserModel.find({}).sort({'createdAt': 'desc'});
 	return res.render('users/index', {users});
};

userController.create = async (req, res) => {
	return res.render('users/create');
};

userController.store = async (req, res) => {
	await UserModel.create(req.body);
	return res.redirect('/users');
};

userController.edit = async (req, res) => {
	const params = req.params;
	const user = await UserModel.findById(params.id);
 	return res.render('users/edit', {user});
};

userController.update = async (req, res) => {
	await UserModel.findByIdAndUpdate(req.params.id, {
		$set: req.body
	},{
		new: true
	});
	return res.redirect('/users');
};

userController.show = async (req, res) => {

};

userController.destroy = async (req, res) => {
	await UserModel.findByIdAndDelete(req.params.id);
	return res.redirect('/users');
};

module.exports = userController