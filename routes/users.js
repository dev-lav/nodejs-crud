const express = require('express');
const router = express.Router();
const userController = require('./../controllers/UserController');

/* GET users listing. */
router.get('/', userController.index);
router.get('/:id/detail', userController.show);
router.get('/create', userController.create);
router.post('/store', userController.store);
router.get('/edit/:id', userController.edit);
router.post('/update/:id', userController.update);
router.get('/delete/:id', userController.destroy);

module.exports = router;
